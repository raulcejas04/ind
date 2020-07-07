<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;


class IndexController extends AbstractController {

    /**
     * @Route("/", name="home")
     */
    public function home(): Response {
        return $this->render('index/home.html.twig');
    }

    /**
     * @Route("/account", name="user_account")
     */
    public function account(): Response {
        /* Validacion de roles dentro de metodo */
        $this->denyAccessUnlessGranted('ROLE_USER');
        
        return $this->render('user/account-details.html.twig');
    }

}
