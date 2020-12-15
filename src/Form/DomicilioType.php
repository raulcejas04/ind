<?php

namespace App\Form;

use App\Entity\Domicilio;
use App\Entity\General;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;

class DomicilioType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {

        $builder
                ->add('provincia', EntityType::class, [
                    'class' => General::class,
                    'placeholder' => 'Elija una provincia',
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "Provincias")
                                ->groupBy('g.descripcion')
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Provincia:'
                ])
                ->add('cp', TextType::class, ['label' => 'CP: '])
                ->add('puerta', TextType::class, ['label' => 'Número: '])
                ->add('calleAlternativa', TextType::class, ['label' => 'Calle alternativa: '])

        ;

        $builder->addEventListener(
                FormEvents::PRE_SET_DATA,
                function (FormEvent $event) {
            /** @var Domicilio|null $data */
            $data = $event->getData();
            if (!$data) {
                return;
            }
            $this->setupDepartamentoField(
                    $event->getForm(),
                    $data->getProvincia()
            );
            $this->setupLocalidadField(
                    $event->getForm(),
                    $data->getDepartamento()
            );
            $this->setupCalleField(
                    $event->getForm(),
                    $data->getLocalidad()
            );
        });

        $builder->get('provincia')->addEventListener(
                FormEvents::POST_SUBMIT,
                function(FormEvent $event) {
            $form = $event->getForm();
            $parent = $form->getParent();
            $data = $form->getData();
            $this->setupDepartamentoField($parent, $data);
        });

        if ($builder->has('departamento')) {
            $builder->get('departamento')->addEventListener(
                    FormEvents::POST_SUBMIT,
                    function(FormEvent $event) {
                $form = $event->getForm();
                $parent = $form->getParent();
                $data = $form->getData();
                $this->setupLocalidadField($parent, $data);
            });
        }

        if ($builder->has('localidad')) {
            $builder->get('localidad')->addEventListener(
                    FormEvents::POST_SUBMIT,
                    function(FormEvent $event) {
                $form = $event->getForm();
                $parent = $form->getParent();
                $data = $form->getData();
                $this->setupCalleField($parent, $data);
            });
        }
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Domicilio::class,
        ]);
    }

    private function setupDepartamentoField(FormInterface $form, ?General $provincia) {

        if (null === $provincia) {
            $form->remove('departamento');

            return;
        }
        $provinciaId = $provincia->getAuxiliar1();
        $form->add('departamento', EntityType::class, [
            'class' => General::class,
            'placeholder' => 'Elija un departamento',
            'query_builder' => function (EntityRepository $er) use ($provinciaId) {
                return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->andWhere('g.auxiliar1 = :provinciaId')
                                ->setParameter('provinciaId', $provinciaId)
                                ->setParameter('tipo', "Departamentos/Partidos")
                                ->groupBy('g.descripcion')
                                ->orderBy('g.descripcion', 'ASC');
            },
            'choice_label' => 'descripcion',
            'label' => 'Departamento:'
        ]);
    }

    private function setupLocalidadField(FormInterface $form, ?General $departamento) {
        if (null === $departamento) {
            $form->remove('localidad');
            return;
        }
        $departamentoId = $departamento->getAuxiliar2();
        $form->add('localidad', EntityType::class, [
            'class' => General::class,
            'placeholder' => 'Elija una localidad',
            'query_builder' => function (EntityRepository $er) use ($departamentoId) {
                return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->andWhere('g.auxiliar2 = :departamentoId')
                                ->setParameter('departamentoId', $departamentoId)
                                ->setParameter('tipo', "Localidades")
                                ->groupBy('g.descripcion')
                                ->orderBy('g.descripcion', 'ASC');
            },
            'choice_label' => 'descripcion',
            'label' => 'Localidad:'
        ]);
    }

    private function setupCalleField(FormInterface $form, ?General $localidad) {
        if (null === $localidad) {
            $form->remove('calle');
            return;
        }
        $localidadId = $localidad->getAuxiliar1();
        $form->add('calle', EntityType::class, [
            'class' => General::class,
            'placeholder' => 'Elija una calle',
            'query_builder' => function (EntityRepository $er) use($localidadId) {
                return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->andWhere('g.auxiliar2 = :localidadId')
                                ->setParameter('localidadId', $localidadId)
                                ->setParameter('tipo', "Calles")
                                ->groupBy('g.descripcion')
                                ->orderBy('g.descripcion', 'ASC');
            },
            'choice_label' => 'descripcion',
            'label' => 'Calle:'
        ]);
    }

}
