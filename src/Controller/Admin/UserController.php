<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\User;
use App\Form\UserType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController {

    /**
     * @Route("/admin/user",name="admin_user")
     */
    public function index(): Response {
        //trae y muestra todos los usuarios
        $users = $this->getDoctrine()->getRepository(User::class)->findAll();
        return $this->render('admin/user.html.twig', ['users' => $users]);
    }

    /**
     * @Route("/admin/user/editar/{id}",name="admin_user_editar")
     */
    public function editar(Request $request, $id): Response {
        //el manager de Doctrine facilita interactuar con la base
        $entityManager = $this->getDoctrine()->getManager();
        //trae usuario por id
        $user = $entityManager->getRepository(User::class)->find($id);
        if (!$user) {
            throw $this->createNotFoundException(
                    'No existe un usuario con este id: ' . $id
            );
        }
        //crea un form a partir de src/Form/UserType
        $form = $this->createForm(UserType::class, $user);

        //handleRequest() carga los datos del request al objeto form
        $form->handleRequest($request);
        /*a partir de eso se puede chequear si ya se toco el boton de submit, 
         * y si los datos ingresados son validos (toma constraints de src/Entity/User.php)
         */
        if ($form->isSubmitted() && $form->isValid()) {
            /*cambia los datos del usuario con los datos que corresponden del form y 
             * actualiza la base.
             */
            $user = $form->getData();
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('admin_user');
        }
        
        /*como la primera vez que carga no se ha hecho un submit del form,
         *  hace un render de la plantilla con el form creado y los datos actuales del usuario 
         */
        return $this->render('admin/editar_user.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/user/eliminar/{id}",name="admin_user_eliminar",methods={"DELETE"})
     */
    public function eliminar(Request $request, User $user): Response {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_user');
    }

    /**
     * @Route("/admin/user/nuevo",name="admin_user_nuevo")
     */
    public function nuevo(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response {
        $user = new User();

        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $user = $form->getData();
            $user->setPassword($passwordEncoder->encodePassword($user, "abc123"));
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('admin_user');
        }


        return $this->render('admin/nuevo_user.html.twig', [
                    'form' => $form->createView(),
        ]);
    }

}
