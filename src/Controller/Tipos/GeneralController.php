<?php

namespace App\Controller\Tipos;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\General;
use App\Form\GeneralType;
use App\Entity\Tipo;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;

class GeneralController extends AbstractController {

/**
     * @Route("/generales/{id}",name="generales")
     */
    public function index(Request $request): Response {       
        //traigo el tipo
        $id = $request->get('id');
        $tipo = $this->getDoctrine()->getRepository(Tipo::class)->find($id);        
        $defaultData = [];
        $formularioFiltro = $this->createFormBuilder($defaultData)
                ->add('busqueda', TextType::class, [ 'required' => false])
                ->add('buscar', SubmitType::class)
                ->getForm();
        $formularioFiltro->handleRequest($request);
        $tipos = array();
        //si se hace una busqueda, trae los registros que coincidan
        if ($formularioFiltro->isSubmitted() && $formularioFiltro->isValid()) {
            $busqueda = $formularioFiltro->getData()['busqueda'];
            $generales = $this->getDoctrine()->getRepository(General::class)->buscarItems($busqueda, $tipo);
        } else {
            //si no hay busqueda trae y muestra todos los registros
            $generales = $this->getDoctrine()->getRepository(General::class)->buscarItemsPorTipo($tipo);
        }
        return $this->render('general/general.html.twig', ['generales' => $generales, 'tipo' =>  $tipo, 'formBusqueda' => $formularioFiltro->createView()]);
    }
    
    /**
     * @Route("/generales/{id}/nuevo",name="generales_nuevo")
     */
    public function nuevo(Request $request): Response {
        $id = $request->get('id');
        $tipo = $this->getDoctrine()->getRepository(Tipo::class)->find($id);        
        $general = new General();       
        $formulario = $this->createForm(GeneralType::class, $general);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            
            $entityManager = $this->getDoctrine()->getManager();
            $general = $formulario->getData();
            $general->setTipo($tipo);
            /*$general->setCreadoPor(-1);
            $general->setCreadoEn(new \DateTime());
             * */             
            $entityManager->persist($general);
            $entityManager->flush();
            return $this->redirectToRoute('generales', ["id" => $id]);
        }

        return $this->render('general/nuevo.html.twig', [
                    'tipo' => $tipo,
                    'general' => $general,
                    'formulario' => $formulario->createView(),
        ]);      
    }
    
    
    /**
     * @Route("/general/editar/{id}",name="generales_editar")
     */
    public function editar(Request $request): Response {
        $id = $request->get("id");
        $entityManager = $this->getDoctrine()->getManager();
        $general = $entityManager->getRepository(General::class)->find($id);    
        if (!$general) {
            throw $this->createNotFoundException(
                    'No existe un tipo con este id: ' . $id
            );
        }        
        $formulario = $this->createForm(GeneralType::class, $general);
        $formulario->handleRequest($request);        
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $general = $formulario->getData();
            $entityManager->persist($general);
            $entityManager->flush();
            return $this->redirectToRoute('generales', ["id" => $general->getTipo()->getId()]);
        }
        return $this->render('general/editar.html.twig', [
                    'general' => $general,  
                    'formulario' => $formulario->createView(),
        ]);
    }
    
    /**
     * @Route("/gerneral/eliminar/{id}",name="generales_eliminar", methods={"DELETE"})
     */
    public function eliminar(Request $request , User $user): Response {
        $tipo = null;
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $general = $entityManager->getRepository(Tipo::class)->find($id);
            $tipo = $general->getTipo();
            $entityManager->remove($general);
            $entityManager->flush();
            
        }

        return $this->redirectToRoute('generales', ["id" => $tipo->getId()] );
    }


}
