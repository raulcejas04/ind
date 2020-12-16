<?php

namespace App\Controller\Industria;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Industria;
use App\Entity\Domicilio;
use App\Entity\General;
use App\Entity\Admin\Usuario;
use App\Form\DomicilioType;
use App\Form\IndustriaType;
use Symfony\Component\HttpFoundation\Request;

class IndustriaController extends AbstractController {

    /**
     * @Route("/industria/nuevo",name="industria_nuevo")
     */
    public function nuevo(Request $request): Response {
        //si no existe el parametro username aplica -1
        $cuit = $request->get("usernane", -1);
        $industria = $this->getDoctrine()->getRepository(Industria::class)->buscarUnoPorCUIT($cuit);
        if (is_null($industria)) {
            $industria = new Industria();
            $usuario = $this->getDoctrine()->getRepository(Usuario::class)->find(["id" => -1]);
            $industria->setCUIT($cuit);
            $industria->setRazonSocial("");
            $industria->setCreadoPor($usuario);
            $em = $this->getDoctrine()->getManager();
            $em->persist($industria);
            $em->flush();
        }
        $formulario = $this->createForm(Industriatype::class, $industria);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $industria = $formulario->getData();
            $domicilio = $industria->getDomicilio();
            $d = $request->request->get('domicilio');
            if ($d != null) {
                if ($d['departamento'] != null) {
                    $departamento = $this->getDoctrine()->getRepository(General::class)->find($d['departamento']);
                    $domicilio->setDepartamento($departamento);
                }
                if ($d['localidad'] != null) {
                    $localidad = $this->getDoctrine()->getRepository(General::class)->find($d['localidad']);
                    $domicilio->setLocalidad($localidad);
                }
                if ($d['calle'] != null) {
                    $calle = $this->getDoctrine()->getRepository(General::class)->find($d['calle']);
                    $domicilio->setCalle($calle);
                }
            }


            $industria->getTitular()->setCUIL('123135465');
            $entityManager->persist($industria);
            $entityManager->flush();
            return $this->redirectToRoute('admin_usuarios');
        }
        return $this->render('industria/nuevo.html.twig', [
                    'formulario' => $formulario->createView(),
                    'lugares' => $industria->getLugares()
        ]);
    }

    /**
     * @Route("/industria/departamento-select", name="industria_departamento_select")
     */
    public function getDepartamentoSelect(Request $request) {
        $domicilio = new Domicilio();
        $provincia = $this->getDoctrine()->getRepository(General::class)->find($request->query->get('provincia'));
        $domicilio->setProvincia($provincia);
        $form = $this->createForm(DomicilioType::class, $domicilio);
        // no field? Return an empty response
        if (!$form->has('departamento')) {
            return new Response(null, 204);
        }
        return $this->render('domicilio/_departamento.html.twig', [
                    'domicilio' => $form->createView(),
        ]);
    }

    /**
     * @Route("/industria/localidad-select", name="industria_localidad_select")
     */
    public function getLocalidadSelect(Request $request) {
        $domicilio = new Domicilio();
        $id = $this->getDoctrine()->getRepository(General::class)->find($request->query->get('id'));
        $domicilio->setDepartamento($id);
        $form = $this->createForm(DomicilioType::class, $domicilio);
        // no field? Return an empty response
        if (!$form->has('localidad')) {
            return new Response(null, 204);
        }
        return $this->render('domicilio/_localidad.html.twig', [
                    'domicilio' => $form->createView(),
        ]);
    }

    /**
     * @Route("/industria/calle-select", name="industria_calle_select")
     */
    public function getCalleSelect(Request $request) {
        $domicilio = new Domicilio();
        $id = $this->getDoctrine()->getRepository(General::class)->find($request->query->get('id'));
        $domicilio->setLocalidad($id);
        $form = $this->createForm(DomicilioType::class, $domicilio);
        // no field? Return an empty response
        if (!$form->has('calle')) {
            return new Response(null, 204);
        }
        return $this->render('domicilio/_calle.html.twig', [
                    'domicilio' => $form->createView(),
        ]);
    }

}
