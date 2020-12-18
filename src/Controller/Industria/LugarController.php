<?php

namespace App\Controller\Industria;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Lugar;
use App\Entity\General;
use App\Entity\Domicilio;
use App\Entity\HorariosTrabajo;
use App\Entity\Industria;
use App\Form\LugarType;
use Symfony\Component\HttpFoundation\Request;

class LugarController extends AbstractController {

    /**
     * @Route("/industria/lugar/nuevo",name="lugar_nuevo")
     */
    public function nuevo(Request $request): Response {
        $cuit = $request->get("usernane", -1);
        $industria = $this->getDoctrine()->getRepository(Industria::class)->buscarUnoPorCUIT($cuit);
        if (is_null($industria->getCUIT())) {
            return $this->redirectToRoute('industria_nuevo');
        }
        $lugar = new Lugar();
        $lugar->setIndustria($industria);
        $this->CrearHorariosTrabajo($lugar);
        if ($lugar->getDomicilio() == null) {
            $this->SetearDomicilio($lugar);
        }
        $formulario = $this->GetFormularioConValidacion($request, $lugar);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $lugar = $formulario->getData();
            $domicilio = $lugar->getDomicilio();
            $entityManager->persist($domicilio);
            $this->PersistirEntidadesOpcionales($request, $lugar, $entityManager);
            $entityManager->persist($lugar);
            $entityManager->flush();
            return $this->redirectToRoute('industria_nuevo');
        }
        return $this->render('lugar/nuevo.html.twig', [
                    'formulario' => $formulario->createView(), 'lugar' => $lugar
        ]);
    }

    /**
     * @Route("/industria/lugar/modificar/{id}",name="lugar_modificar")
     */
    public function modificar(Request $request, $id): Response {
        $entityManager = $this->getDoctrine()->getManager();
        $lugar = $entityManager->getRepository(Lugar::class)->find($id);
        if (!$lugar) {
            throw $this->createNotFoundException(
                    'No existe un lugar con este id: ' . $id
            );
        }
        if ($lugar->getDomicilio() == null) {
            $this->SetearDomicilio($lugar);
        }
        $formulario = $this->GetFormularioConValidacion($request, $lugar);
        $formulario->handleRequest($request);

        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $lugar = $formulario->getData();
            $this->RemoverEntidadesOpcionales($request, $lugar, $entityManager);
            $this->PersistirEntidadesOpcionales($request, $lugar, $entityManager);
            $domicilio = $lugar->getDomicilio();
            $entityManager->persist($domicilio);
            $entityManager->persist($lugar);
            $entityManager->flush();
            return $this->redirectToRoute('industria_nuevo');
        }
        return $this->render('lugar/modificar.html.twig', [
                    'formulario' => $formulario->createView(),
                    'lugar' => $lugar,
                    'button_label' => 'Guardar Cambios'
        ]);
    }

    /**
     * @Route("/industria/lugar/eliminar/{id}",name="lugar_eliminar")
     */
    public function eliminar(Request $request, $id): Response {
        $entityManager = $this->getDoctrine()->getManager();
        $lugar = $entityManager->getRepository(Lugar::class)->find($id);
        $entityManager->remove($lugar);
        $entityManager->flush();
        return $this->redirectToRoute('industria_nuevo');
    }

    public function CrearHorariosTrabajo(Lugar $lugar) {
        if ($lugar->getHorariosTrabajo()->count() == 0) {
            $dias = $this->getDoctrine()->getRepository(General::class)->buscarDiasOrdenados();
            foreach ($dias as $dia) {
                $horario = new HorariosTrabajo();
                $horario->setDia($dia);
                $lugar->addHorariosTrabajo($horario);
            }
        }
    }

    public function SetearDomicilio(Lugar $lugar) {
        $domicilio = new Domicilio();
        $provincia = $this->getDoctrine()->getRepository(General::class)->find(2);
        $departamento = $this->getDoctrine()->getRepository(General::class)->find(856);
        $domicilio->setProvincia($provincia);
        $domicilio->setDepartamento($departamento);
        $lugar->setDomicilio($domicilio);
    }

    public function GetGruposValidacion($request) {
        $validationGroups = [];
        $lugar = $request->request->get('lugar');
        if ($lugar["habilitacion"]["tieneHabilitacion"] == 'si') {
            $tipoHabilitacion = $lugar["habilitacion"]["tipo"];
            array_push($validationGroups, "habilitacion");
            if ($tipoHabilitacion == 35075) {
                array_push($validationGroups, "expediente");
            }
            if ($tipoHabilitacion == 35074 || $tipoHabilitacion == 35073) {
                array_push($validationGroups, "expediente");
                array_push($validationGroups, "definitiva");
            }
        }
        if ($lugar["certAptitudAmb"]["tieneCertAptitudAmb"] == 'si') {
            array_push($validationGroups, "certAptitudAmb");
        }
        if ($lugar["dispCatProvincial"]["tieneCatProvincial"] == 'si') {
            array_push($validationGroups, "catProvincial");
        }
        if (array_key_exists ("tieneResiduosIndustriales",$lugar)) {
            array_push($validationGroups, "residuosIndustriales");
        }
         if (array_key_exists ("tieneResiduosEspeciales",$lugar)) {
            array_push($validationGroups, "residuosEspeciales");
            if(array_key_exists ("tieneEmisionesGaseosas",$lugar)){
                array_push($validationGroups, "emisionesGaseosas");
            }
        }
         if (array_key_exists ("tieneDenuncia",$lugar)) {
            array_push($validationGroups, "denuncias");
        }
        return $validationGroups;
    }

    public function GetFormularioConValidacion($request, $lugar) {
        $validationGroups = [];
        if (!is_null($request->request->get('lugar'))) {
            $validationGroups = $this->GetGruposValidacion($request, $lugar);
        } else {
            array_push($validationGroups, "Default");
        }
        if (count($validationGroups) == 0) {
            $formulario = $this->createForm(LugarType::class, $lugar, array(
                'validation_groups' => false,
            ));
        } else {
            $formulario = $this->createForm(LugarType::class, $lugar, array(
                'validation_groups' => $validationGroups,
            ));
        }
        return $formulario;
    }

    public function PersistirEntidadesOpcionales($request, $lugar, $entityManager) {
        if ($request->request->get('lugar')["habilitacion"]["tieneHabilitacion"] == 'si') {
            $habilitacion = $lugar->getHabilitacion();
            if ($habilitacion->getTipo()->getId() == 35075) {
                $habilitacion->setFechaInicio(null);
            }
            $entityManager->persist($habilitacion);
        } else {
            $lugar->setHabilitacion(null);
        }
        if ($request->request->get('lugar')["certAptitudAmb"]["tieneCertAptitudAmb"] == 'si') {
            $certAptitudAmb = $lugar->getCertAptitudAmb();
            $entityManager->persist($certAptitudAmb);
        } else {
            $lugar->setCertAptitudAmb(null);
        }
        if ($request->request->get('lugar')["dispCatProvincial"]["tieneCatProvincial"] == 'si') {
            $disp = $lugar->getDispCatProvincial();
            $entityManager->persist($disp);
        } else {
            $lugar->setDispCatProvincial(null);
        }
    }

    public function RemoverEntidadesOpcionales($request, $lugar, $entityManager) {
        if ($request->request->get('lugar')["habilitacion"]["tieneHabilitacion"] == 'no') {
            $habilitacion = $lugar->getHabilitacion();
            if ($habilitacion != null) {
                $lugar->setHabilitacion(null);
                $entityManager->remove($habilitacion);
            }
        }
        if ($request->request->get('lugar')["certAptitudAmb"]["tieneCertAptitudAmb"] == 'no') {
            $certAptitudAmb = $lugar->getCertAptitudAmb();
            if ($certAptitudAmb != null) {
                $entityManager->remove($certAptitudAmb);
                $lugar->setCertAptitudAmb(null);
            }
        }

        if ($request->request->get('lugar')["dispCatProvincial"]["tieneCatProvincial"] == 'no') {
            $disp = $lugar->getDispCatProvincial();
            if ($disp != null) {
                $entityManager->remove($disp);
                $lugar->setDispCatProvincial(null);
            }
        }
    }

}
