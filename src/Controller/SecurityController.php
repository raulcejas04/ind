<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/* Controlador autogenerado, contiene logica de login y logout. 
    Para ver implementacion de metodos ir a src/Security/LoginAuthenticator.php */
class SecurityController extends AbstractController {

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

}
