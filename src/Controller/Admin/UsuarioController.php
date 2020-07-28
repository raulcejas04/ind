<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Admin\Usuario;
use App\Form\Admin\UsuarioType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class UsuarioController extends AbstractController {

    /**
     * @Route("/admin/usuarios",name="admin_usuarios")
     */
    public function index(Request $request): Response {
        $defaultData = [];
        $formulario = $this->createFormBuilder($defaultData)
                ->add('busqueda', TextType::class, [ 'required' => false])
                ->add('buscar', SubmitType::class)
                ->getForm();
            $formulario->handleRequest($request);

        //si se hace una busqueda, trae los usuarios que coincidan
        if ($formulario->isSubmitted() && $form->isValid()) {
            $busqueda = $form->getData()['busqueda'];
            $usuarios = $this->getDoctrine()->getRepository(Usuario::class)->buscarUsuario($busqueda);
        } else {
            //si no hay busqueda trae y muestra todos los usuarios
            $usuarios = $this->getDoctrine()->getRepository(Usuario::class)->findAll();
        }

        return $this->render('admin/usuarios/usuarios.html.twig', ['usuarios' => $usuarios, 'formBusqueda' => $formulario->createView()]);
    }

    /**
     * @Route("/admin/usuarios/editar/{id}",name="admin_usuarios_editar")
     */
    public function editar(Request $request, $id): Response {
        //el manager de Doctrine facilita interactuar con la base
        $entityManager = $this->getDoctrine()->getManager();
        //trae usuario por id
        $usuario = $entityManager->getRepository(Usuario::class)->find($id);
        if (!$usuario) {
            throw $this->createNotFoundException(
                    'No existe un usuario con este id: ' . $id
            );
        }
        //crea un form a partir de src/Form/UserType
        $formulario = $this->createForm(UsuarioType::class, $usuario);

        //handleRequest() carga los datos del request al objeto form
        $formulario->handleRequest($request);
        /* a partir de eso se puede chequear si ya se toco el boton de submit, 
         * y si los datos ingresados son validos (toma constraints de src/Entity/User.php)
         */
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            /* cambia los datos del usuario con los datos que corresponden del form y 
             * actualiza la base.
             */
            $usuario = $formulario->getData();
            $entityManager->persist($usuario);
            $entityManager->flush();
            return $this->redirectToRoute('admin_usuarios');
        }

        /* como la primera vez que carga no se ha hecho un submit del form,
         *  hace un render de la plantilla con el form creado y los datos actuales del usuario 
         */
        return $this->render('admin/usuarios/editar.html.twig', [
                    'usuario' => $usuario,
                    'formulario' => $formulario->createView(),
        ]);
    }

    /**
     * @Route("/admin/usuarios/eliminar/{id}",name="admin_usuarios_eliminar",methods={"DELETE"})
     */
    public function eliminar(Request $request, User $user): Response {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_user');
    }

    /**
     * @Route("/admin/usuarios/nuevo",name="admin_usuarios_nuevo")
     */
    public function nuevo(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response {
        $usuario = new Usuario();

        $formulario = $this->createForm(UsuarioType::class, $usuario);

        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $usuario = $formulario->getData();
            $usuario->setPassword($passwordEncoder->encodePassword($usuario, "abc123"));
            $entityManager->persist($usuario);
            $entityManager->flush();
            return $this->redirectToRoute('admin_usuarios');
        }


        return $this->render('admin/usuarios/nuevo.html.twig', [
                    'formulario' => $formulario->createView(),
        ]);
    }

}
