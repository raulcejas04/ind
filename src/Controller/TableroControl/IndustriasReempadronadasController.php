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
//devolver archivos
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
//exportar a excel
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
//exportar a pdf
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Style\Border;

class IndustriasReempadronadasController extends AbstractController {

    /**
     * @Route("/tablero/industriasReempadronadas",name="industrias_reempadronadas")
     */
    public function index(Request $request): Response {

        $formulario = $this->getFormulario();
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
                    'pageNum' => $pageNum,
                    'busqueda' => $busqueda
        ]);
    }

    /**
     * @Route("/tablero/industriasReempadronadas/exportar_csv/{busqueda}",name="industrias_reempadronadas_exp_csv")
     */
    public function exportarCSV(Request $request, $busqueda): Response {

        $sortOrder = "DESC";
        $sortColumn = "reempadronadoEn";
        $pageNum = "1";
        $pageSize = "10";
        //traer industrias segun busqueda
        $industrias = $this->getDoctrine()->getRepository(Industria::class)->getReempadronadas($busqueda, $sortOrder, $sortColumn, $pageNum - 1, $pageSize);

        //setear nombre de archivo y crear archivo en ruta temporal 
        //(temp_file devuelve ruta absoluta)
        $fileName = "industrias_reempadronadas_" . date('Ymd') . ".csv";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        
        //comienza escritura
        $fh = fopen($temp_file, 'w');
        $is_column = true;
        if (!empty($industrias)) {
            foreach ($industrias as $industria) {
                //generar fila
                $record = [
                    "CUIT" => $industria->getCUIT(),
                    "Razon Social" => $industria->getRazonSocial(),
                    "Fecha de Reempadronamiento" => $industria->getReempadronadoEn()->format('Y-m-d H:i:s')];
                //la primer fila setea los headers
                if ($is_column) {
                    fputcsv($fh, array_keys($record));
                    $is_column = false;
                }
                //escribe datos de fila
                fputcsv($fh, array_values($record));
            }
            //termina escritura
            fclose($fh);
        }
        //devuelve archivo como attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }

    /**
     * @Route("/tablero/industriasReempadronadas/exportar_xslx/{busqueda}",  name="industrias_reempadronadas_exp_xlsx")
     */
    public function exportarExcel(Request $request, $busqueda) {
        //setear nombre de archivo y crear archivo en ruta temporal 
        //(temp_file devuelve ruta absoluta)
        $fileName = "industrias_reempadronadas_" . date('Ymd') . ".xlsx";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        $spreadsheet = new Spreadsheet();

        $sheet = $spreadsheet->getActiveSheet();

        //setear titulo de hoja y headers
        $sheet->setTitle('Industrias Reempadronadas');

        $sheet->getCell('A1')->setValue('CUIT');
        $sheet->getCell('B1')->setValue('Razón Social');
        $sheet->getCell('C1')->setValue('Fecha de Reempadronamiento');

        // cargar datos
        $sheet->fromArray($this->getData($busqueda), null, 'A2', true);

        //Autosize las columnas
        foreach (range('A', 'C') as $col) {
            $sheet->getColumnDimension($col)->setAutoSize(true);
        }
        //setear estilo
        $styleArray = [
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['argb' => '000000'],
                ],
            ],
        ];
        //obtener total de registros para calcular ultima celda
        $rows = $this->getDoctrine()->getRepository(Industria::class)->getCantRegistros($busqueda) + 1;
        //aplicar estilo
        $sheet->getStyle('A1:C' . $rows)->applyFromArray($styleArray);
        //modificar archivo creado en carpeta temporal  
        $writer = new Xlsx($spreadsheet);
        $writer->save($temp_file);

        //devolver archivo como attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }

    /**
     * @Route("/tablero/industriasReempadronadas/exportar_pdf/{busqueda}",  name="industrias_reempadronadas_exp_pdf")
     */
    public function exportarPDF(Request $request, $busqueda) {
        //setear nombre de archivo y crear archivo en ruta temporal 
        //(temp_file devuelve ruta absoluta)
        $fileName = "industrias_reempadronadas1_" . date('Ymd') . ".pdf";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        $spreadsheet = new Spreadsheet();

        $sheet = $spreadsheet->getActiveSheet();

        //setear titulo de hoja y headers
        $sheet->setTitle('Industrias Reempadronadas');

        $sheet->getCell('A1')->setValue('CUIT');
        $sheet->getCell('B1')->setValue('Razón Social');
        $sheet->getCell('C1')->setValue('Fecha de Reempadronamiento');

        //cargar datos
        $sheet->fromArray($this->getData($busqueda), null, 'A2', true);

        //Autosize las columnas
        foreach (range('A', 'C') as $col) {
            $sheet->getColumnDimension($col)->setAutoSize(true);
        }
        //setear estilo
        $styleArray = [
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['argb' => '000000'],
                ],
            ],
            'font' => array(
                'color' => array('rgb' => '000000'),
                'size' => 11,
                'name' => 'Calibri'
            )
        ];

        //obtener total de registros para calcular ultima celda
        $rows = $this->getDoctrine()->getRepository(Industria::class)->getCantRegistros($busqueda) + 1;
        //aplicar estilo
        $sheet->getStyle('A1:C' . $rows)->applyFromArray($styleArray);
        //modificar archivo creado en carpeta temporal
        $writer = IOFactory::createWriter($spreadsheet, 'Mpdf');
        $writer->save($temp_file);

        //devolver archivo como attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }

    private function getData($busqueda): array {
        $sortOrder = "DESC";
        $sortColumn = "reempadronadoEn";
        $pageNum = "1";
        $pageSize = "10";
        /**
         * @var $industria Industria[]
         */
        $list = [];
        $industrias = $industrias = $this->getDoctrine()->getRepository(Industria::class)->getReempadronadas($busqueda, $sortOrder, $sortColumn, $pageNum - 1, $pageSize);

        foreach ($industrias as $industria) {
            $list[] = [
                $industria->getCUIT(),
                $industria->getRazonSocial(),
                $industria->getReempadronadoEn()->format('Y-m-d H:i:s')
            ];
        }
        return $list;
    }

    private function getFormulario() {
        $defaultData = [];
        return $this->createFormBuilder($defaultData)
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
    }

}
