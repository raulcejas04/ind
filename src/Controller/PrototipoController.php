<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\PrototipoType;
use App\Entity\Prototipo;

class PrototipoController extends AbstractController
{
    /**
     * @Route("/prototipo", name="prototipo")
     */
    public function index()
    {        
        return $this->render('prototipo/index.html.twig', [
            'controller_name' => 'PrototipoController',
        ]);        
    }
    /**
     * @Route("/formularioPrototipo", name="formularioPrototipo")
     */
    public function formulario(){
         //el manager de Doctrine facilita interactuar con la base
       // $entityManager = $this->getDoctrine()->getManager();
        //trae usuario por id
       // $prototipo = $entityManager->getRepository(Prototipo::class)->find($id);
       $prototipo = new Prototipo();
        $form = $this->createForm(PrototipoType::class,$prototipo);
         return $this->render('prototipo/form.html.twig', [
                    'formulario' => $form->createView(),
        ]);
    }
}
