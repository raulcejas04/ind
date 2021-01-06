<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Industria;
use App\Entity\Lugar;

class DashboardController extends AbstractController {

    /**
     * @Route("/admin/dashboard",name="admin_dashboard")
     */
    public function index(Request $request): Response {

        $cantEmpadronadas = $this->getDoctrine()->getRepository(Industria::class)->getCantidadEmpadronadas();
        $cantExportadoras = $this->getDoctrine()->getRepository(Industria::class)->getCantidadExportadoras();
        $porcExportadoras = ($cantExportadoras * 100) / $cantEmpadronadas;
        $cantHabDefinitiva = $this->getDoctrine()->getRepository(Industria::class)->getCantidadHabilitacionDefinitiva();
        $porcHabDefinitiva = ($cantHabDefinitiva * 100) / $cantEmpadronadas;

        $cantLugaresHabilitados = $this->getDoctrine()->getRepository(Lugar::class)->getCantHabilitados();
        $cantLugaresDeshabilitados = $this->getDoctrine()->getRepository(Lugar::class)->getCantDeshabilitados();

        $cantLugaresExportadores = $this->getDoctrine()->getRepository(Lugar::class)->getCantExportadores(true);
        $cantLugaresNoExportadores = $this->getDoctrine()->getRepository(Lugar::class)->getCantExportadores(false);

        $cantHabilitacionDefinitiva = $this->getDoctrine()->getRepository(Lugar::class)->getCantTipoHabilitacion(35074);
        $cantHabilitacionProvisoria =  $this->getDoctrine()->getRepository(Lugar::class)->getCantTipoHabilitacion(35073);
        $cantHabilitacionInicio =  $this->getDoctrine()->getRepository(Lugar::class)->getCantTipoHabilitacion(35075);
        return $this->render('admin/dashboard/dashboard.html.twig', [
                    'cantEmpadronadas' => $cantEmpadronadas,
                    'porcExportadoras' => $porcExportadoras,
                    'porcHabDefinitiva' => $porcHabDefinitiva,
                    'cantLugaresHabilitados' => $cantLugaresHabilitados,
                    'cantLugaresDeshabilitados' => $cantLugaresDeshabilitados,
                    'cantLugaresExportadores' => $cantLugaresExportadores,
                    'cantLugaresNoExportadores' => $cantLugaresNoExportadores,
                    'cantHabilitacionDefinitiva' => $cantHabilitacionDefinitiva,
                    'cantHabilitacionProvisoria' => $cantHabilitacionProvisoria,
                    'cantHabilitacionInicio' => $cantHabilitacionInicio
        ]);
    }

}
