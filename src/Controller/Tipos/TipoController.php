<?php

namespace App\Controller\Tipos;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Tipo;
use App\Entity\Admin\Usuario;
use App\Form\TipoType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;

class TipoController extends AbstractController {

    /**
     * @Route("/tipos",name="tipos")
     */
    public function index(Request $request): Response {
        $defaultData = [];
        $formularioFiltro = $this->createFormBuilder($defaultData)
                ->add('busqueda', TextType::class, [ 'required' => false])
                ->add('buscar', SubmitType::class)
                ->getForm();
        $formularioFiltro->handleRequest($request);
        $tipos = array();
        //si se hace una busqueda, trae los registros que coincidan
        if ($formularioFiltro->isSubmitted() && $formularioFiltro->isValid()) {
            $busqueda = $formularioFiltro->getData()['busqueda'];
            $tipos = $this->getDoctrine()->getRepository(Tipo::class)->buscarTipo($busqueda);
        } else {
            //si no hay busqueda trae y muestra todos los registros
            $tipos = $this->getDoctrine()->getRepository(Tipo::class)->findAll();
        }
        return $this->render('tipos/tipos.html.twig', ['tipos' => $tipos, 'formBusqueda' => $formularioFiltro->createView()]);
    }
    
    /**
     * @Route("/tipos/nuevo",name="tipos_nuevo")
     */
    public function nuevo(Request $request): Response {
        $tipo = new Tipo();
        $formulario = $this->createForm(TipoType::class, $tipo);
        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $tipo = $formulario->getData();
            $user = $entityManager->getRepository(Usuario::class)->find(['id' => -1]);
            $tipo->setCreadoPor($user);
            $tipo->setCreadoEn(new \DateTime());
            $entityManager->persist($tipo);
            $entityManager->flush();
            return $this->redirectToRoute('tipos');
        }


        return $this->render('tipos/nuevo.html.twig', [
                    'formulario' => $formulario->createView(),
        ]);      
    }
    
    
    /**
     * @Route("/tipos/editar/{id}",name="tipos_editar")
     */
    public function editar(Request $request): Response {
        $entityManager = $this->getDoctrine()->getManager();
        $id = $request->get("id");
        $tipo = $entityManager->getRepository(Tipo::class)->find($id);
        if (!$tipo) {
            throw $this->createNotFoundException(
                    'No existe un tipo con este id: ' . $id
            );
        }        
        $formulario = $this->createForm(TipoType::class, $tipo);
        $formulario->handleRequest($request);        
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $tipo = $formulario->getData();
            $entityManager->persist($tipo);
            $entityManager->flush();
            return $this->redirectToRoute('tipos');
        }
        return $this->render('tipos/editar.html.twig', [
                    'tipo' => $tipo,
                    'formulario' => $formulario->createView(),
        ]);
    }
    
    /**
     * @Route("/tipos/eliminar/{id}",name="tipos_eliminar", methods={"DELETE"})
     */
    public function eliminar(Request $request , User $user): Response {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $tipo = $entityManager->getRepository(Tipo::class)->find($id);
            $entityManager->remove($tipo);
            $entityManager->flush();
        }

        return $this->redirectToRoute('tipos');
    }

}
