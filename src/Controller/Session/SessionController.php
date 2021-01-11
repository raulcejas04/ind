<?php

namespace App\Controller\Session;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use App\Form\Session\PerfilType;
use App\Form\Session\FotoPerfilType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class SessionController extends AbstractController {


    /**
     * @Route("/cuenta", name="session_cuenta")
     */
    public function cuenta(): Response {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $usuario = $this->getUser();

        return $this->render('session/cuenta.html.twig', [
                    'usuario' => $usuario,
        ]);
    }

    /**
     * @Route("/cuenta/editarDatos", name="session_editar_datos")
     */
    public function editarDatos(Request $request): Response {
        /* Validacion de roles dentro de metodo */
        $this->denyAccessUnlessGranted('ROLE_USER');

        $entityManager = $this->getDoctrine()->getManager();
        $usuario = $this->getUser();
        $formulario = $this->createForm(PerfilType::class, $usuario);
        $formulario->handleRequest($request);

        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $usuario = $formulario->getData();
            $entityManager->persist($usuario);
            $entityManager->flush();
            return $this->redirectToRoute('session_cuenta');
        }

        return $this->render('session/cambiar_datos.html.twig', [
                    'formulario' => $formulario->createView(),
        ]);
    }

    /**
     * @Route("/login", name="login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response {
     /*   if ($this->getUser()) {
            return $this->redirectToRoute('tablero_dashboard');
        }*/

        // se fija si hay error en el login
        $error = $authenticationUtils->getLastAuthenticationError();
        // busca el ultimo nombre de usuario/e-mail ingresado
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout() {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
     * @Route("usuario/cambiar_password",name="cambiar_password")
     */
    public function cambiarPassword(Request $request, UserPasswordEncoderInterface $passwordEncoder) {

        //si el usuario no esta logueado redirige a login
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        $errores = [];
        $defaultData = [];
        $form = $this->createFormBuilder($defaultData)
                ->add('password_vieja', PasswordType::class, [
                    'label' => 'Contraseña actual',
                    'required' => true
                ])
                ->add('password', PasswordType::class, [
                    'label' => 'Contraseña nueva',
                    'required' => true
                ])
                ->add('repetir_password', PasswordType::class, [
                    'label' => 'Repita la contraseña nueva',
                    'required' => true
                ])
                ->add('cambiar', SubmitType::class, ['label' => 'Cambiar'])
                ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //trae el usuario actual
            /** @var \App\Entity\User $user */
            $user = $this->getUser();
            //cuando el form no corresponde a una entidad trae datos del form como un array asociativo 
            $data = $form->getData();
            $password_vieja = $data["password_vieja"];
            //chequea que lo ingresado en "contraseña actual" sea la contraseña correcta
            $checkPass = $passwordEncoder->isPasswordValid($user, $password_vieja);

            if (!$checkPass) {
                array_push($errores, 'La contraseña ingresada no es correcta.');
            }

            //chequea que las contraseñas nuevas coincidan
            $password_nueva = $data["password"];
            $password_nueva_repetida = $data["repetir_password"];

            if ($password_nueva !== $password_nueva_repetida) {
                array_push($errores, 'Las contraseñas no coinciden.');
            }

            // hashea la contraseña, la setea en el usuario, y hace el update a la base
            if (!$errores) {
                $entityManager = $this->getDoctrine()->getManager();

                $user->setPassword($passwordEncoder->encodePassword($user, $password_nueva));
                $entityManager->persist($user);
                $entityManager->flush();
                return $this->redirectToRoute('session_cuenta');
            }
        }

        return $this->render('session/cambiar_password.html.twig', [
                    'form' => $form->createView(),
                    'errores' => $errores
        ]);
    }

    /**
     *  @Route("cuenta/cambiar_img_perfil",name="cambiar_img_perfil")
     */
    public function cambiarImgPerfil(Request $request, SluggerInterface $slugger): Response {
        $this->denyAccessUnlessGranted('ROLE_USER');
        $entityManager = $this->getDoctrine()->getManager();
        $usuario = $this->getUser();
        $formulario = $this->createForm(FotoPerfilType::class, $usuario);
        $formulario->handleRequest($request);
        $errores = [];
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            // trae el archivo de imagen original y las coordenadas de corte
            $imgElegida = $formulario->get('imagen')->getData();
            $x = $formulario->get('x')->getData();
            $y = $formulario->get('y')->getData();
            $alto = $formulario->get('alto')->getData();
            $ancho = $formulario->get('ancho')->getData();
            try {
                //genera un nombre para el archvio nuevo                
                $nombreNuevo = $this->generarNombreArchivoNuevo($imgElegida, $slugger);
                //genera una imagen nueva a partir del archivo subio y las coordenadas, y la guarda
                //en la carpeta indicada en config/services.yaml
                $imgGenerada = $this->generarImagenNueva($imgElegida, $x, $y, $alto, $ancho, 100, 100);
                $this->guardarImgPerfil($imgElegida, $imgGenerada, $nombreNuevo);
                $eliminada = true;
                if(!is_null($usuario->getNombreImgPerfil())){
                     $eliminada = $this->eliminarImgPerfil($usuario->getNombreImgPerfil());
                }               
                if (!$eliminada) {
                    array_push($errores, "No se ha podido eliminar la imagen anterior.");
                    return $this->render('session/cambiar_img_perfil.html.twig', [
                                'formulario' => $formulario->createView(),
                                'errores' => $errores
                    ]);
                }
            } catch (FileException $ex) {
                array_push($errores, $ex->getMessage());
                return $this->render('session/cambiar_img_perfil.html.twig', [
                            'formulario' => $formulario->createView(),
                            'errores' => $errores
                ]);
            }
            $usuario->setNombreImgPerfil($nombreNuevo);
            $entityManager->persist($usuario);
            $entityManager->flush();
            return $this->redirectToRoute('session_cuenta');
        }

        return $this->render('session/cambiar_img_perfil.html.twig', [
                    'formulario' => $formulario->createView(),
                    'errores' => $errores
        ]);
    }

    private function generarImagenNueva($imgElegida, $x, $y, $alto, $ancho, $altoNuevo, $anchoNuevo) {

        if ($imgElegida->guessExtension() == 'jpeg') {
            $img = imagecreatefromjpeg($imgElegida);
        } elseif ($imgElegida->guessExtension() == 'png') {
            $img = imagecreatefrompng($imgElegida);
        }
        $imgCortada = imagecrop($img, ['x' => $x, 'y' => $y,
            'width' => $ancho, 'height' => $alto]);
        $imgNueva = imagecreatetruecolor($anchoNuevo, $altoNuevo);
        imagecopyresampled($imgNueva, $imgCortada, 0, 0, 0, 0, $anchoNuevo, $altoNuevo, $ancho, $alto);
        return $imgNueva;
    }

    private function generarNombreArchivoNuevo($archivo, $slugger) {
        $nombreArchivoOriginal = pathinfo($archivo->getClientOriginalName(), PATHINFO_FILENAME);
        $nombreArchivoSeguro = $slugger->slug($nombreArchivoOriginal);
        return $nombreArchivoSeguro . '-' . uniqid() . '.' . $archivo->guessExtension();
    }

    private function guardarImgPerfil($imgElegida, $imgGenerada, $nombreNuevo) {
        if ($imgElegida->guessExtension() == 'jpeg') {
            imagejpeg($imgGenerada, $this->getParameter('perfil_carpeta') . "/" . $nombreNuevo);
        } elseif ($imgElegida->guessExtension() == 'png') {
            imagepng($imgGenerada, $this->getParameter('perfil_carpeta') . "/" . $nombreNuevo);
        }
    }

    private function eliminarImgPerfil($nombreImg) {
        $unlinked = true;
        $path = $this->getParameter('perfil_carpeta') . "/" . $nombreImg;
        if (file_exists($path)) {
            $unlinked = unlink($path);
        }
        return $unlinked;
    }

}
