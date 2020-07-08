<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AccountController extends AbstractController {

    /**
     * @Route("user/cambiar_contraseña",name="cambiar_contraseña")
     */
    public function cambiarContraseña(Request $request, UserPasswordEncoderInterface $passwordEncoder) {

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
                return $this->redirectToRoute('home');
            }
        }

        return $this->render('user/cambiar_password.html.twig', [
                    'form' => $form->createView(),
                    'errores' => $errores
        ]);
    }

}
