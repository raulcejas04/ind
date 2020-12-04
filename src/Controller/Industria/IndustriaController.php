<?php

namespace App\Controller\Industria;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Industria;
use App\Form\IndustriaType;
use Symfony\Component\HttpFoundation\Request;

class IndustriaController extends AbstractController {

    /**
     * @Route("/industria/nuevo",name="industria_nuevo")
     */
    public function nuevo(Request $request): Response {
        $industria = new Industria();
        $formulario = $this->createForm(IndustriaType::class, $industria);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $industria = $formulario->getData();           
            $entityManager->persist($industria);
            $entityManager->flush();
            return $this->redirectToRoute('admin_usuarios');
        }
        
        return $this->render('industria/nuevo.html.twig', [
                    'formulario' => $formulario->createView(),
        ]);
    }

}
