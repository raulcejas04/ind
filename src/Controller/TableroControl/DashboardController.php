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
     * @Route("/",name="tablero_dashboard")
     */
    public function index(Request $request): Response {
        $this->denyAccessUnlessGranted('ROLE_USER');
        
        $repositoryIndustria = $this->getDoctrine()->getRepository(Industria::class);
        $repositoryLugar = $this->getDoctrine()->getRepository(Lugar::class);

        $cantEmpadronadas = $repositoryIndustria->getCantidadEmpadronadas();
        $cantExportadoras = $repositoryIndustria->getCantidadExportadoras();

        $porcExportadoras = ($cantExportadoras * 100) / $cantEmpadronadas;
        $cantHabDefinitiva = $repositoryIndustria->getCantidadHabilitacionDefinitiva();
        $porcHabDefinitiva = ($cantHabDefinitiva * 100) / $cantEmpadronadas;

        $cantLugares = $repositoryLugar->getCantLugares();
        $cantLugaresDeshabilitados = $repositoryLugar->getCantDeshabilitados();

        $cantLugaresExportadores = $repositoryLugar->getCantExportadores(true);
        $cantLugaresNoExportadores = $repositoryLugar->getCantExportadores(false);

        $cantHabilitacionDefinitiva = $repositoryLugar->getCantTipoHabilitacion(35074);
        $cantHabilitacionProvisoria = $repositoryLugar->getCantTipoHabilitacion(35073);
        $cantHabilitacionInicio = $repositoryLugar->getCantTipoHabilitacion(35075);

        $cantCat1 = $repositoryLugar->getCantPorCategoria(35496);
        $cantCat2 = $repositoryLugar->getCantPorCategoria(35497);
        $cantCat3 = $repositoryLugar->getCantPorCategoria(35498);
        $cantSinCat = $repositoryLugar->getCantSinCategoria();

        $residuosLiquidos = $repositoryLugar->getCantResiduosIndustriales(35501) + $repositoryLugar->getCantResiduosEspeciales(35507);
        $residuosSolidos = $repositoryLugar->getCantResiduosIndustriales(35499) + $repositoryLugar->getCantResiduosEspeciales(35505);
        $residuosSemisolidos = $repositoryLugar->getCantResiduosIndustriales(35500) + $repositoryLugar->getCantResiduosEspeciales(35506);

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
                    'cantSinCat' => $cantSinCat,
                    'residuosLiquidos' => $residuosLiquidos,
                    'residuosSolidos' => $residuosSolidos,
                    'residuosSemisolidos' => $residuosSemisolidos,
        ]);
    }

}
