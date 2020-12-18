<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Admin\UsuarioTRIMU;
use Symfony\Component\HttpFoundation\Request;

class PruebasController extends AbstractController {
    /**
     * @Route("/pruebas/{id}",name="admin_pruebas")
     */
    public function editar(Request $request, $id): Response {
        //el manager de Doctrine facilita interactuar con la base
        $entityManager = $this->getDoctrine()->getManager('trimu');
        $usuario = $entityManager->getRepository(UsuarioTRIMU::class)->find($id);
        print_r($usuario);       
        die();
    }

   

}
