<?php

namespace App\Controller\Prototipo;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\Prototipo\PrototipoType;
use App\Entity\Prototipo\Prototipo;
use Symfony\Component\HttpFoundation\Request; 
use Symfony\Component\HttpFoundation\Response;

class PrototipoController extends AbstractController
{
    /**
     * @Route("/prototipo", name="prototipo")
     */
    public function index()
    {        
        return $this->render('Prototipo/index.html.twig', [
            'controller_name' => 'PrototipoController',
        ]);        
    }
    
    
    /**
     * @Route("/prototipo/nuevo", name="prototipo_nuevo")
     */
    public function prototipoNuevo(Request $request): Response {
        $prototipo = new Prototipo();
        //bindea entidad
        $form = $this->createForm(PrototipoType::class,$prototipo);
        //bindea la cartera de peticion
        $form->handleRequest($request);       
        if ($form->isSubmitted() && $form->isValid()) {
            //manejo de entidades
            $entityManager = $this->getDoctrine()->getManager();
            //extraigo los datos del formulario como entidad
            $prototipo = $form->getData();            
            //persisto la entidad  (osea en este caso hago un insert en la tabla)
            $entityManager->persist($prototipo);
            //commit 
            $entityManager->flush();
            //redirecciono a ruta prototipo
            return $this->redirectToRoute('prototipo');
        }
        
        return $this->render('Prototipo/nuevo_prototipo.html.twig', [
                    'formulario' => $form->createView(),
        ]);
    }
    
    /**
     * @Route("/prototipo/editar/{id}", name="prototipo_editar")    
     */
    public function prototipoEditar(Request $request, $id): Response {
        //el manager de Doctrine facilita interactuar con la base
        $entityManager = $this->getDoctrine()->getManager();
         //trae usuario por id
        $prototipo = $entityManager->getRepository(Prototipo::class)->findName($id);
        
        if (!$prototipo) {
            throw $this->createNotFoundException(
                    'No existe un regitro prototipo con este id: ' . $id
            );
        }
        //bindea entidad
        $form = $this->createForm(PrototipoType::class,$prototipo);
        //bindea la cartera de peticion
        $form->handleRequest($request);       
        if ($form->isSubmitted() && $form->isValid()) {
            //manejo de entidades
            $entityManager = $this->getDoctrine()->getManager();
            //extraigo los datos del formulario como entidad
            $prototipo = $form->getData();            
            //persisto la entidad  (osea en este caso hago un insert en la tabla)
            $entityManager->persist($prototipo);
            //commit 
            $entityManager->flush();
            //redirecciono a ruta prototipo
            return $this->redirectToRoute('prototipo');
        }
        
        return $this->render('Prototipo/editar_prototipo.html.twig', [
                    'formulario' => $form->createView(),
            ]);
        }
    
}
