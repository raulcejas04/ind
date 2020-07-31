<?php

namespace App\Controller\Session;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use App\Form\Session\PerfilType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;


class SessionController extends AbstractController {

    /**
     * @Route("/", name="home")
     */
    public function home(): Response {
        return $this->render('index/home.html.twig');
    }

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
        if ($this->getUser()) {
            return $this->redirectToRoute('home');
        }

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

}
