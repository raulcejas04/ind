<?php

namespace App\Controller\Industria;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Lugar;
use App\Entity\General;
use App\Entity\HorariosTrabajo;
use App\Form\LugarType;
use Symfony\Component\HttpFoundation\Request;

class LugarController extends AbstractController {

    /**
     * @Route("/industria/lugar/nuevo",name="lugar_nuevo")
     */
    public function nuevo(Request $request): Response {
        $lugar = new Lugar();
        $this->CrearHorariosTrabajo($lugar);
        $formulario = $this->createForm(LugarType::class, $lugar);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $lugar = $formulario->getData();
            $entityManager->persist($lugar);
            $entityManager->flush();
            return $this->redirectToRoute('industria_nuevo');
        }
        return $this->render('lugar/nuevo.html.twig', [
                    'formulario' => $formulario->createView(), 'lugar'=>$lugar
        ]);
    }

    public function CrearHorariosTrabajo(Lugar $lugar) {
        if ($lugar->getHorariosTrabajo()->count() == 0) {
            $dias = $this->getDoctrine()->getRepository(General::class)->traerDias();
            foreach ($dias as $dia) {
                $horario = new HorariosTrabajo();
                $horario->setDia($dia);
                $horario->setHabilitado(false);
                $lugar->addHorariosTrabajo($horario);
            }
        }
    }

}
