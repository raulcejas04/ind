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
use App\Entity\AdminTRIMU\UsuarioTRIMU;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\RedirectResponse;

class IndustriaController extends AbstractController {

    private $urlLoginTRIMU = "https://trimu3.mda.gob.ar";

    //private $urlLoginTRIMU = "http://132.146.70.1:8090";

    /**
     * @Route("/industria/logout",name="industria_logout")
     */
    public function Logout(Request $request): Response {
        return new RedirectResponse('https://trimu3.mda.gob.ar/modulos/principal.php');
        //   return new RedirectResponse('http://132.146.70.1:8090/');
    }

    private function encriptar($q) {
        $cryptKey = 'qJB0rGtIn5UB1xG03efMda';
        $qEncoded = md5($cryptKey . "" . $q);
        return( $qEncoded );
    }

    private function chequeaLogueoTRIMU($request, $tiempo = 180) {
        //rutina para chequear credenciales;        
        $cuit = $request->get("cuit", null);
        $session = $request->get("session", null);
        $s = $request->getSession();

        if (is_null($cuit)) {
            if (!is_null($s->get("cuit")))
                $cuit = $s->get("cuit");
            else {
                return false;
                die("Faltan datos del usuario");
            }
        }
        $s->set('cuit', $cuit);


        if (is_null($session)) {
            if (!is_null($s->get("session")))
                $session = $s->get("session");
            else {
                return false;
                die("Faltan credenciales");
            }
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

        return ["cuit" => $cuit, "contribuyente" => $usuarioTRIMU->getContribuyente()];
    }

    /**
     * @Route("/industria/nuevo",name="industria_nuevo")
     */
    public function nuevoSinParametros(Request $request): Response {
        return $this->nuevo($request);
    }

    /**
     * @Route("/industria/nuevo/{cuit}/{session}",name="industria_nuevo_params")
     */
    public function nuevo(Request $request): Response {
        $contribuyente = $this->chequeaLogueoTRIMU($request, 180);
        if ($contribuyente === false) {
            return $this->redirect($this->urlLoginTRIMU);
        }
        $cuit = $contribuyente["cuit"];
        $contribuyente = $contribuyente["contribuyente"];
        $industria = $this->getDoctrine()->getRepository(Industria::class)->buscarUnoPorCUIT($cuit);

        if (is_null($industria->getCUIT())) {
            if (is_null($contribuyente))
                die("No esta asociado el contribuyente - Contacte al administrador");
            $industria = new Industria();
            $usuario = $this->getDoctrine()->getRepository(Usuario::class)->find(["id" => -1]);
            $industria->setCUIT($cuit);
            $industria->setRazonSocial($contribuyente->getDenominacion());
            $industria->setCreadoPor($usuario);
            $industria->setEsConfirmado(false);
            $em = $this->getDoctrine()->getManager();
            $em->persist($industria);
            $em->flush();
        }

        $showAlertLugares = false;
        $showAlertNoLugares = false;
        $showErrorDepartamento = false;
        $showErrorLocalidad = false;
        $showErrorCalle = false;

        $formulario = $this->GetFormularioConValidacion($request, $industria);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $industria = $formulario->getData();
            $esConfirmado = false;
            $d = $request->request->get('domicilio');
            $domicilio = $industria->getDomicilio();
            if ($domicilio->getProvincia() != null) {
                if ($d != null) {
                    if (isset($d['departamento']) && !is_null($d['departamento'])) {
                        $departamento = $this->getDoctrine()->getRepository(General::class)->find($d['departamento']);
                        $domicilio->setDepartamento($departamento);
                    }
                    if (isset($d['localidad']) && !is_null($d['localidad'])) {
                        $localidad = $this->getDoctrine()->getRepository(General::class)->find($d['localidad']);
                        $domicilio->setLocalidad($localidad);
                    }
                    if (isset($d['calle']) && !is_null($d['calle'])) {
                        $calle = $this->getDoctrine()->getRepository(General::class)->find($d['calle']);
                        $domicilio->setCalle($calle);
                    }
                }
            } else {
                $domicilio->setDepartamento(null);
                $domicilio->setLocalidad(null);
                $domicilio->setCalle(null);
            }
            $industria->setDomicilio($domicilio);
            $entityManager->persist($domicilio);
            $entityManager->persist($industria);
            $entityManager->flush();

            if ($formulario->getClickedButton() && 'confirmarIndustria' === $formulario->getClickedButton()->getName()) {
                $esConfirmado = true;

                $showAlertLugares = $this->ValidarNoLugaresPendientes($industria);
                if ($industria->getLugares()->count() == 0) {
                    $showAlertNoLugares = true;
                }
                $showErrorDepartamento = is_null($domicilio->getDepartamento()) ? true : false;
                $showErrorLocalidad = is_null($domicilio->getLocalidad()) ? true : false;
                $showErrorCalle = is_null($domicilio->getCalle()) && $domicilio->getCalleAlternativa() == null ? true : false;
                if ($showAlertNoLugares || $showAlertLugares || $showErrorDepartamento || $showErrorLocalidad || $showErrorCalle) {
                    return $this->render('industria/nuevo.html.twig', [
                                'formulario' => $formulario->createView(),
                                'lugares' => $industria->getLugares(),
                                'industriaConfirmada' => $industria->getEsConfirmado(),
                                'showAlertLugares' => $showAlertLugares,
                                'showErrorDepartamento' => $showErrorDepartamento,
                                'showErrorLocalidad' => $showErrorLocalidad,
                                'showErrorCalle' => $showErrorCalle,
                                'showAlertNoLugares' => $showAlertNoLugares
                    ]);
                } else {
                    $industria->setReempadronadoEn((new \DateTime())->format('Y-m-d H:i:s'));
                    $industria->setEsConfirmado($esConfirmado);
                    $entityManager->persist($industria);
                    $entityManager->flush();
                }
            }


            if ($request->request->has('nuevoLugar')) {
                return $this->redirectToRoute('lugar_nuevo');
            } else if ($request->request->has('modificarLugar')) {
                $idLugar = $request->request->get('modificarLugar');
                return $this->redirectToRoute('lugar_modificar', array('id' => $idLugar));
            } else if ($request->request->has('eliminarLugar')) {
                $idLugar = $request->request->get('_idLugarEliminar');
                return $this->redirectToRoute('lugar_eliminar', array('id' => $idLugar));
            }
            return $this->redirectToRoute('industria_nuevo');
        }
        return $this->render('industria/nuevo.html.twig', [
                    'formulario' => $formulario->createView(),
                    'lugares' => $industria->getLugares(),
                    'industriaConfirmada' => $industria->getEsConfirmado(),
                    'showAlertLugares' => $showAlertLugares,
                    'showErrorDepartamento' => $showErrorDepartamento,
                    'showErrorLocalidad' => $showErrorLocalidad,
                    'showErrorCalle' => $showErrorCalle,
                    'showAlertNoLugares' => $showAlertNoLugares
        ]);
    }

    /**
     * @Route("/industria/departamento-select", name="industria_departamento_select")
     */
    public function getDepartamentoSelect(Request $request) {
        $cuit = $this->chequeaLogueoTRIMU($request, 180);
        if ($cuit === false) {
            return $this->redirect($this->urlLoginTRIMU);
        }

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
        $cuit = $this->chequeaLogueoTRIMU($request, 180);
        if ($cuit === false) {
            return $this->redirect($this->urlLoginTRIMU);
        }

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
        $cuit = $this->chequeaLogueoTRIMU($request, 180);
        if ($cuit === false) {
            return $this->redirect($this->urlLoginTRIMU);
        }

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
        $cuit = $this->chequeaLogueoTRIMU($request, 180);
        if ($cuit === false) {
            return $this->redirect($this->urlLoginTRIMU);
        }

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

    public function ValidarNoLugaresPendientes(Industria $industria): bool {
        $hayNoConfirmados = false;
        $lugares = $industria->getLugares();
        foreach ($lugares as $lugar) {
            if (!$lugar->getEsConfirmado()) {
                $hayNoConfirmados = true;
                break;
            }
        }
        return $hayNoConfirmados;
    }

}
