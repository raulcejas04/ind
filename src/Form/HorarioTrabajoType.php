<?php

namespace App\Form;

use App\Entity\HorariosTrabajo;
use App\Entity\General;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class HorarioTrabajoType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('dia', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'disabled' => true
                ])
                ->add('habilitado', CheckboxType::class, ['label' => false])
                ->add('horaInicio', TimeType::class, [
                    'input' => 'datetime',
                    'widget' => 'choice'
                ])
                ->add('horaFin', TimeType::class, [
                    'input' => 'datetime',
                    'widget' => 'choice',
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => HorariosTrabajo::class,
        ]);
    }

}