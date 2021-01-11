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

        $rubroRG1 = $repositoryLugar->getCantTipoRubroGeneral("RG1");
        $rubroRG2 = $repositoryLugar->getCantTipoRubroGeneral("RG2");
        $rubroRG3 = $repositoryLugar->getCantTipoRubroGeneral("RG3");
        $rubroRG4 = $repositoryLugar->getCantTipoRubroGeneral("RG4");
        $rubroRG5 = $repositoryLugar->getCantTipoRubroGeneral("RG5");
        $rubroRG6 = $repositoryLugar->getCantTipoRubroGeneral("RG6");
        $rubroRG7 = $repositoryLugar->getCantTipoRubroGeneral("RG7");
        $rubroRG8 = $repositoryLugar->getCantTipoRubroGeneral("RG8");
        $rubroRG9 = $repositoryLugar->getCantTipoRubroGeneral("RG9");
        $rubroRG10 = $repositoryLugar->getCantTipoRubroGeneral("RG10");
        $rubroRG11 = $repositoryLugar->getCantTipoRubroGeneral("RG11");
        $rubroRG12 = $repositoryLugar->getCantTipoRubroGeneral("RG12");
        $rubroRG13 = $repositoryLugar->getCantTipoRubroGeneral("RG13");
        $rubroRG14 = $repositoryLugar->getCantTipoRubroGeneral("RG14");
        $rubroRG15 = $repositoryLugar->getCantTipoRubroGeneral("RG15");
        $rubroRG16 = $repositoryLugar->getCantTipoRubroGeneral("RG16");
        $rubroRG17 = $repositoryLugar->getCantTipoRubroGeneral("RG17");
        $rubroRG18 = $repositoryLugar->getCantTipoRubroGeneral("RG18");
        $rubroRG19 = $repositoryLugar->getCantTipoRubroGeneral("RG19");
        $rubroRG20 = $repositoryLugar->getCantTipoRubroGeneral("RG20");
        $rubroRG21 = $repositoryLugar->getCantTipoRubroGeneral("RG21");

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
                    'rubroRG1' => $rubroRG1,
                    'rubroRG2' => $rubroRG2,
                    'rubroRG3' => $rubroRG3,
                    'rubroRG4' => $rubroRG4,
                    'rubroRG5' => $rubroRG5,
                    'rubroRG6' => $rubroRG6,
                    'rubroRG7' => $rubroRG7,
                    'rubroRG8' => $rubroRG8,
                    'rubroRG9' => $rubroRG9,
                    'rubroRG10' => $rubroRG10,
                    'rubroRG11' => $rubroRG11,
                    'rubroRG12' => $rubroRG12,
                    'rubroRG13' => $rubroRG13,
                    'rubroRG14' => $rubroRG14,
                    'rubroRG15' => $rubroRG15,
                    'rubroRG16' => $rubroRG16,
                    'rubroRG17' => $rubroRG17,
                    'rubroRG18' => $rubroRG18,
                    'rubroRG19' => $rubroRG19,
                    'rubroRG20' => $rubroRG20,
                    'rubroRG21' => $rubroRG21,
        ]);
    }

}
