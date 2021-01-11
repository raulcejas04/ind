<?php

namespace App\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Admin\Usuario;
use App\Form\Admin\UsuarioType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UsuarioController extends AbstractController {

    /**
     * @Route("/admin/usuarios",name="admin_usuarios")
     */
    public function index(Request $request): Response {
        $formulario = $this->getFormulario();
        $formulario->handleRequest($request);

        $defaultSortColumn = "username";
        $busqueda = "";
        $sortOrder = "DESC";
        $sortColumn = "username";
        $pageNum = "1";
        $pageSize = "10";

        //si se hace una busqueda, trae los usuarios que coincidan
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            if ($request->request->has('btnModificar')) {
                $idUsuario = $request->request->get('btnModificar');
                return $this->redirectToRoute('admin_usuarios_editar', array('id' => $idUsuario));
            } else if ($request->request->has('btnEliminar')) {
                $idUsuario = $request->request->get('_id');
                return $this->redirectToRoute('admin_usuarios_eliminar', array('id' => $idUsuario));
            }
            $busqueda = $formulario->getData()['busqueda'];
            $sortOrder = $formulario->getData()['sortOrder'];
            $sortColumn = $formulario->getData()['sortColumn'];
            $pageNum = $formulario->getData()['pageNum'];
            $pageSize = $formulario->getData()['pageSize'];
            $defaultSortColumn = "";
        }
        $usuarios = $this->getDoctrine()->getRepository(Usuario::class)->getUsuarios($busqueda, $sortOrder, $sortColumn, $pageNum - 1, $pageSize);
        $cantRegistros = $this->getDoctrine()->getRepository(Usuario::class)->getCantRegistros($busqueda);
        return $this->render('admin/usuarios/usuarios.html.twig',
                        [
                            'usuarios' => $usuarios,
                            'formBusqueda' => $formulario->createView(),
                            'defaultSortColumn' => $defaultSortColumn,
                            'totalRecords' => $cantRegistros,
                            'pageSize' => $pageSize,
                            'pageNum' => $pageNum,
                            'busqueda' => $busqueda
        ]);
    }

    /**
     * @Route("/admin/usuarios/editar/{id}",name="admin_usuarios_editar")
     */
    public function editar(Request $request, $id): Response {
        //el manager de Doctrine facilita interactuar con la base
        $entityManager = $this->getDoctrine()->getManager();
        //trae usuario por id
        $usuario = $entityManager->getRepository(Usuario::class)->find($id);
        if (!$usuario) {
            throw $this->createNotFoundException(
                    'No existe un usuario con este id: ' . $id
            );
        }
        //crea un form a partir de src/Form/UserType
        $formulario = $this->createForm(UsuarioType::class, $usuario);

        //handleRequest() carga los datos del request al objeto form
        $formulario->handleRequest($request);
        /* a partir de eso se puede chequear si ya se toco el boton de submit, 
         * y si los datos ingresados son validos (toma constraints de src/Entity/User.php)
         */
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            /* cambia los datos del usuario con los datos que corresponden del form y 
             * actualiza la base.
             */
            $usuario = $formulario->getData();
            $entityManager->persist($usuario);
            $entityManager->flush();
            return $this->redirectToRoute('admin_usuarios');
        }

        /* como la primera vez que carga no se ha hecho un submit del form,
         *  hace un render de la plantilla con el form creado y los datos actuales del usuario 
         */
        return $this->render('admin/usuarios/editar.html.twig', [
                    'usuario' => $usuario,
                    'formulario' => $formulario->createView(),
        ]);
    }

    /**
     * @Route("/admin/usuarios/eliminar/{id}",name="admin_usuarios_eliminar")
     */
    public function eliminar(Request $request, $id): Response {
        $entityManager = $this->getDoctrine()->getManager();
        $god = $this->getUser();
        //trae usuario por id
        $usuario = $entityManager->getRepository(Usuario::class)->find($id);
        if (in_array("ROLE_GOD", $god->getRoles())) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($usuario);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_usuarios');
    }

    /**
     * @Route("/admin/usuarios/nuevo",name="admin_usuarios_nuevo")
     */
    public function nuevo(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response {
        $usuario = new Usuario();

        $formulario = $this->createForm(UsuarioType::class, $usuario);

        $formulario->handleRequest($request);
        if ($formulario->isSubmitted() && $formulario->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $usuario = $formulario->getData();
            $usuario->setPassword($passwordEncoder->encodePassword($usuario, "abc123"));
            $entityManager->persist($usuario);
            $entityManager->flush();
            return $this->redirectToRoute('admin_usuarios');
        }


        return $this->render('admin/usuarios/nuevo.html.twig', [
                    'formulario' => $formulario->createView(),
        ]);
    }

    private function getFormulario() {
        $defaultData = [];
        return $this->createFormBuilder($defaultData)
                        ->add('busqueda', TextType::class, ['required' => false])
                        ->add('sortOrder', HiddenType::class, ['empty_data' => 'DESC'])
                        ->add('sortColumn', HiddenType::class, ['empty_data' => 'username'])
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
