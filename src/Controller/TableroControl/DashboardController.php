<?php

namespace App\Controller\TableroControl;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Industria;
use App\Entity\Lugar;

class DashboardController extends AbstractController {

    /**
     * @Route("/tablero/dashboard",name="tablero_dashboard")
     */
    public function index(Request $request): Response {

        $cantEmpadronadas = $this->getDoctrine()->getRepository(Industria::class)->getCantidadEmpadronadas();
        $cantExportadoras = $this->getDoctrine()->getRepository(Industria::class)->getCantidadExportadoras();
        $porcExportadoras = ($cantExportadoras * 100) / $cantEmpadronadas;
        $cantHabDefinitiva = $this->getDoctrine()->getRepository(Industria::class)->getCantidadHabilitacionDefinitiva();
        $porcHabDefinitiva = ($cantHabDefinitiva * 100) / $cantEmpadronadas;

        $cantLugares = $this->getDoctrine()->getRepository(Lugar::class)->getCantLugares();
        $cantLugaresDeshabilitados = $this->getDoctrine()->getRepository(Lugar::class)->getCantDeshabilitados();

        $cantLugaresExportadores = $this->getDoctrine()->getRepository(Lugar::class)->getCantExportadores(true);
        $cantLugaresNoExportadores = $this->getDoctrine()->getRepository(Lugar::class)->getCantExportadores(false);

        $cantHabilitacionDefinitiva = $this->getDoctrine()->getRepository(Lugar::class)->getCantTipoHabilitacion(35074);
        $cantHabilitacionProvisoria = $this->getDoctrine()->getRepository(Lugar::class)->getCantTipoHabilitacion(35073);
        $cantHabilitacionInicio = $this->getDoctrine()->getRepository(Lugar::class)->getCantTipoHabilitacion(35075);

        $cantCat1 = $this->getDoctrine()->getRepository(Lugar::class)->getCantPorCategoria(35496);
        $cantCat2 = $this->getDoctrine()->getRepository(Lugar::class)->getCantPorCategoria(35497);
        $cantCat3 = $this->getDoctrine()->getRepository(Lugar::class)->getCantPorCategoria(35498);
        $cantSinCat = $this->getDoctrine()->getRepository(Lugar::class)->getCantSinCategoria();
        return $this->render('tablero/dashboard/dashboard.html.twig', [
                    'cantEmpadronadas' => $cantEmpadronadas,
                    'porcExportadoras' => $porcExportadoras,
                    'porcHabDefinitiva' => $porcHabDefinitiva,
                    'cantLugares' => $cantLugares,
                    'cantLugaresDeshabilitados' => $cantLugaresDeshabilitados,
                    'cantLugaresExportadores' => $cantLugaresExportadores,
                    'cantLugaresNoExportadores' => $cantLugaresNoExportadores,
                    'cantHabilitacionDefinitiva' => $cantHabilitacionDefinitiva,
                    'cantHabilitacionProvisoria' => $cantHabilitacionProvisoria,
                    'cantHabilitacionInicio' => $cantHabilitacionInicio,
                    'cantCat1' => $cantCat1,
                    'cantCat2' => $cantCat2,
                    'cantCat3' => $cantCat3,
                    'cantSinCat' => $cantSinCat
        ]);
    }

}
