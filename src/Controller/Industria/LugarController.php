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
use App\Entity\AdminTRIMU\UsuarioTRIMU;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\FormError;

class LugarController extends AbstractController {

    private $urlLoginTRIMU = "http://132.146.70.1:8090";

    function encriptar( $q ) {
        $cryptKey  = 'qJB0rGtIn5UB1xG03efMda';
        $qEncoded  =  md5($cryptKey."".$q);
        return( $qEncoded );
    }
    
    private function chequeaLogueoTRIMU($request, $tiempo = 180) {
        $cuit = "";
        $session = "";
        $s = $request->getSession();
        //si no hay secion se va a login trimu
        if (is_null($s)) {
            return $this->redirect($this->urlLoginTRIMU);
        }

        if (!is_null($s->get("cuit")))
            $cuit = $s->get("cuit");
        else {
            die("Faltan datos del usuario");
        }
        $s->set('cuit', $cuit);
        if (!is_null($s->get("session")))
            $session = $s->get("session");
        else {
            die("Faltan credenciales");
        }
        
        $s->set('session', $session);
        $entityManagerTRIMU = $this->getDoctrine()->getManager('trimu');

        $usuarioTRIMU = $entityManagerTRIMU->getRepository(UsuarioTRIMU::class)->buscarUnoPorId($cuit);

        if (!is_null($usuarioTRIMU->getId())) {
            $token = $usuarioTRIMU->getToken();
            if ($session != $this->encriptar($token))
                die("No cumple con las credenciales");
            // chequear que la session no este activa luego de 3 hs 180min?
            $token_s = explode("|MDA|", $token);
            //el segundo elemento es la fecha/hora de logueo 
            $fechaLogin = $datetime1 = new \DateTime($token_s[1]);
            $now = $datetime1 = new \DateTime();
            $interval = $now->diff($fechaLogin);
            $minutos = $interval->format('%i');
            if ($minutos * 1 > $tiempo)
                return $this->redirect($this->urlLoginTRIMU);
        }

        return $cuit;
    }

    /**
     * @Route("/industria/lugar/nuevo",name="lugar_nuevo")
     */
    public function nuevo(Request $request): Response {
        $cuit = $this->chequeaLogueoTRIMU($request);
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
            $esConfirmado = false;
            if ($formulario->getClickedButton() && 'confirmar' === $formulario->getClickedButton()->getName()) {
                $esConfirmado = true;
            }
            $entityManager = $this->getDoctrine()->getManager();
            $lugar = $formulario->getData();
            $lugar->setEsConfirmado($esConfirmado);
            $this->EliminarHorariosTrabajoInvalidos($lugar);
            $domicilio = $lugar->getDomicilio();
            $entityManager->persist($domicilio);
            $this->PersistirEntidadesOpcionales($request, $lugar, $entityManager);

            $entityManager->persist($lugar);
            $entityManager->flush();
            return $this->redirectToRoute('industria_nuevo');
        }
        return $this->render('lugar/nuevo.html.twig', [
                    'formulario' => $formulario->createView(), 'lugar' => $lugar,
                    'showButton' => true,
                    'consulta' => false,
        ]);
    }

    /**
     * @Route("/industria/lugar/consultar/{id}",name="lugar_consultar")
     */
    public function Consultar(Request $request, $id): Response {
        $cuit = $this->chequeaLogueoTRIMU($request);
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
        $this->CrearHorariosTrabajo($lugar);
        $formulario = $this->createForm(LugarType::class, $lugar, array(
            'disabled' => true,
        ));
        return $this->render('lugar/modificar.html.twig', [
                    'formulario' => $formulario->createView(),
                    'lugar' => $lugar,
                    'showButton' => false,
                    'consulta' => true
        ]);
    }

    /**
     * @Route("/industria/lugar/modificar/{id}",name="lugar_modificar")
     */
    public function modificar(Request $request, $id): Response {
        $cuit = $this->chequeaLogueoTRIMU($request);
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

        $this->CrearHorariosTrabajo($lugar);
        $formulario = $this->GetFormularioConValidacion($request, $lugar);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $esConfirmado = false;
            if ($formulario->getClickedButton() && 'confirmar' === $formulario->getClickedButton()->getName()) {
                $esConfirmado = true;
            }
            $entityManager = $this->getDoctrine()->getManager();
            $lugar = $formulario->getData();
            $this->RemoverEntidadesOpcionales($request, $lugar, $entityManager);
            $this->PersistirEntidadesOpcionales($request, $lugar, $entityManager);
            if (!$lugar->getEsProduccion()) {
                $lugar->setFechaUltimaInpeccion(null);
            }
            $lugar->setEsConfirmado($esConfirmado);
            $domicilio = $lugar->getDomicilio();
            $entityManager->persist($domicilio);
            $this->EliminarHorariosTrabajoInvalidos($lugar);
            $entityManager->persist($lugar);
            $entityManager->flush();
            return $this->redirectToRoute('industria_nuevo');
        }
        return $this->render('lugar/modificar.html.twig', [
                    'formulario' => $formulario->createView(),
                    'lugar' => $lugar,
                    'button_label' => 'Guardar Cambios',
                    'showButton' => true,
                    'consulta' => false
        ]);
    }

    /**
     * @Route("/industria/lugar/eliminar/{id}",name="lugar_eliminar")
     */
    public function eliminar(Request $request, $id): Response {
        $cuit = $this->chequeaLogueoTRIMU($request);
        $entityManager = $this->getDoctrine()->getManager();
        $lugar = $entityManager->getRepository(Lugar::class)->find($id);
        $habilitacion = $lugar->getHabilitacion();
        if ($habilitacion != null) {
            $lugar->setHabilitacion(null);
            $entityManager->remove($habilitacion);
        }

        $cert = $lugar->getCertAptitudAmb();
        if ($cert != null) {
            $lugar->setCertAptitudAmb(null);
            $entityManager->remove($cert);
        }
        $apoderado = $lugar->getApoderado();

        $domicilio = $lugar->getDomicilio();
        $entityManager->remove($lugar);
        $entityManager->flush();
        if ($domicilio != null) {
            $lugar->setDomicilio(null);
            $entityManager->remove($domicilio);
        }
        if ($apoderado != null) {
            $lugar->setApoderado(null);
            $entityManager->remove($apoderado);
        }
        $entityManager->flush();
        return $this->redirectToRoute('industria_nuevo');
    }

    public function CrearHorariosTrabajo(Lugar $lugar) {
        
        $dias = $this->getDoctrine()->getRepository(General::class)->buscarDiasOrdenados();
        if ($lugar->getHorariosTrabajo()->count() == 0) {
            foreach ($dias as $dia) {
                $horario = new HorariosTrabajo();
                $horario->setDia($dia);
                $lugar->addHorariosTrabajo($horario);
            }
        } else {
            foreach ($dias as $dia) {
                $tieneDia = false;
                foreach ($lugar->getHorariosTrabajo() as $diaExistente) {
                    if ($diaExistente->getDia() == $dia) {
                        $tieneDia = true;
                    }
                    if ($tieneDia) {
                        break;
                    }
                }
                if (!$tieneDia) {
                    $horario = new HorariosTrabajo();
                    $horario->setDia($dia);
                    $lugar->addHorariosTrabajo($horario);
                }
            }
        }
    }

    public function EliminarHorariosTrabajoInvalidos(Lugar $lugar) {
        foreach ($lugar->getHorariosTrabajo() as $dia) {
            if ($dia->getHoraInicio()->getTimestamp() == "0" && $dia->getHoraFin()->getTimestamp() == "0") {
                $lugar->removeHorariosTrabajo($dia);
            }
        }
        return $lugar;
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
        $cuit = $this->chequeaLogueoTRIMU($request);
        $validationGroups = [];
        $lugar = $request->request->get('lugar');
        if (array_key_exists("confirmar", $lugar)) {
            array_push($validationGroups, "principal");
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
            if (array_key_exists("esProduccion", $lugar)) {
                if ($lugar["certAptitudAmb"]["tieneCertAptitudAmb"] == 'si') {
                    array_push($validationGroups, "certAptitudAmb");
                }
                if ($lugar["dispCatProvincial"]["tieneCatProvincial"] == 'si') {
                    array_push($validationGroups, "catProvincial");
                }
                if (array_key_exists("tieneResiduosIndustriales", $lugar)) {
                    array_push($validationGroups, "residuosIndustriales");
                }
                if (array_key_exists("tieneResiduosEspeciales", $lugar)) {
                    array_push($validationGroups, "residuosEspeciales");
                    if (array_key_exists("tieneEmisionesGaseosas", $lugar)) {
                        array_push($validationGroups, "emisionesGaseosas");
                    }
                }
                if (array_key_exists("tieneDenuncia", $lugar)) {
                    array_push($validationGroups, "denuncias");
                }
                array_push($validationGroups, "produccion");
            }
            if (array_key_exists("esExportador", $lugar)) {
                array_push($validationGroups, "paises");
            }
        } else {
            array_push($validationGroups, "requerido");
        }
        return $validationGroups;
    }

    public function GetFormularioConValidacion($request, $lugar) {
        $cuit = $this->chequeaLogueoTRIMU($request);
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
        $cuit = $this->chequeaLogueoTRIMU($request);
        if ($request->request->get('lugar')["habilitacion"]["tieneHabilitacion"] == 'si') {
            $habilitacion = $lugar->getHabilitacion();
            if ($habilitacion->getTipo()->getId() == 35075) {
                $habilitacion->setFechaInicio(null);
                $habilitacion->setLugar($lugar);
            }
            $entityManager->persist($habilitacion);
        } else {
            $lugar->setHabilitacion(null);
        }
        if ($request->request->get('lugar')["certAptitudAmb"]["tieneCertAptitudAmb"] == 'si') {
            $certAptitudAmb = $lugar->getCertAptitudAmb();
            $certAptitudAmb->setLugar($lugar);
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
        $cuit = $this->chequeaLogueoTRIMU($request);
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
