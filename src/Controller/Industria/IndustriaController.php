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
        if (is_null($industria->getCUIT())) {
            $industria = new Industria();
            $usuario = $this->getDoctrine()->getRepository(Usuario::class)->find(["id" => -1]);
            $industria->setCUIT($cuit);
            $industria->setRazonSocial("");
            $industria->setCreadoPor($usuario);
            $em = $this->getDoctrine()->getManager();
            $em->persist($industria);
            $em->flush();
        }
        $formulario = $this->GetFormularioConValidacion($request, $industria);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $industria = $formulario->getData();
            $esConfirmado = false;
            if ($formulario->getClickedButton() && 'confirmarIndustria' === $formulario->getClickedButton()->getName()) {
                $esConfirmado = true;
                $this->RemoverLugaresNoConfirmados($industria, $entityManager);
            }
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

            $industria->setEsConfirmado($esConfirmado);
            $industria->setDomicilio($domicilio);
            $entityManager->persist($domicilio);
            $entityManager->persist($industria);
            $entityManager->flush();
            if ($request->request->has('nuevoLugar')) {
                return $this->redirectToRoute('lugar_nuevo');
            } else if ($request->request->has('modificarLugar')) {
                $idLugar = $request->request->get('_idLugar');
                return $this->redirectToRoute('lugar_modificar', array('id' => $idLugar));
            } else if ($request->request->has('eliminarLugar')) {
                $idLugar = $request->request->get('_idLugar');
                return $this->redirectToRoute('lugar_eliminar', array('id' => $idLugar));
            }
            return $this->redirectToRoute('industria_nuevo');
        }
        return $this->render('industria/nuevo.html.twig', [
                    'formulario' => $formulario->createView(),
                    'lugares' => $industria->getLugares(),
                    'industriaConfirmada' => $industria->getEsConfirmado()
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

    public function GetFormularioConValidacion($request, $industria) {
        $industriaRequest = $request->request->get('industria');
        $disabled = false;
        if ($industria->getEsConfirmado()) {
            $disabled = true;
        }
        if (is_null($request->request->get('industria')) || array_key_exists("confirmarIndustria", $industriaRequest)) {
            $formulario = $this->createForm(IndustriaType::class, $industria, array(
                'validation_groups' => "industria",
                'disabled' => $disabled
            ));
        } else {
            $formulario = $this->createForm(IndustriaType::class, $industria, array(
                'validation_groups' => false,
                'disabled' => $disabled
            ));
        }
        return $formulario;
    }

    public function RemoverLugaresNoConfirmados(Industria $industria, $entityManager) {
        $lugares = $industria->getLugares();
        foreach ($lugares as $lugar) {
            if (!$lugar->getEsConfirmado()) {
                $entityManager->remove($lugar);
                $industria->removeLugare($lugar);
            }
        }
    }

}
