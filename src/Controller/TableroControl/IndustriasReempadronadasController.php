<?php

namespace App\Controller\TableroControl;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use App\Entity\Industria;

class IndustriasReempadronadasController extends AbstractController {

    /**
     * @Route("/tablero/industriasReempadronadas",name="industrias_reempadronadas")
     */
    public function index(Request $request): Response {
        $defaultData = [];
        $formulario = $this->createFormBuilder($defaultData)
                ->add('busqueda', TextType::class, ['required' => false])
                ->add('sortOrder', HiddenType::class, ['empty_data' => 'DESC'])
                ->add('sortColumn', HiddenType::class, ['empty_data' => 'reempadronadoEn'])
                ->add('pageNum', HiddenType::class, ['empty_data' => '1'])
                ->add('pageSize', ChoiceType::class, [
                    'choices' => [
                        '10' => 10,
                        '20' => 20,
                        '50' => 50,
                    ],
                    'label' => 'Mostrar: ',
                    'required' => false,
                     'placeholder' => false,
                ])
                ->add('buscar', SubmitType::class)
                ->getForm();

        $formulario->handleRequest($request);
        $defaultSortColumn = "reempadronadoEn";
        $busqueda = "";
        $sortOrder = "DESC";
        $sortColumn = "reempadronadoEn";
        $pageNum = "1";
        $pageSize = "10";

        //si se hace una busqueda, trae los usuarios que coincidan
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $busqueda = $formulario->getData()['busqueda'];
            $sortOrder = $formulario->getData()['sortOrder'];
            $sortColumn = $formulario->getData()['sortColumn'];
            $pageNum = $formulario->getData()['pageNum'];
            $pageSize = $formulario->getData()['pageSize'];
            $defaultSortColumn = "";
        }
        $industrias = $this->getDoctrine()->getRepository(Industria::class)->getReempadronadas($busqueda, $sortOrder, $sortColumn, $pageNum - 1, $pageSize);
        $cantRegistros = $this->getDoctrine()->getRepository(Industria::class)->getCantRegistros($busqueda);

        return $this->render('tablero/industrias_reempadronadas.html.twig', [
                    'industrias' => $industrias,
                    'formBusqueda' => $formulario->createView(),
                    'defaultSortColumn' => $defaultSortColumn,
                    'totalRecords' => $cantRegistros,
                    'pageSize' => $pageSize,
                    'pageNum' => $pageNum
        ]);
    }

}
