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

class HorarioTrabajoType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('dia', EntityType::class, [
                    'class' => General::class,
                   'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "dias")
                                ->orderBy('g.id', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'disabled' => true
                ])
                ->add('horaInicio', TimeType::class, [
                    'input' => 'datetime',
                    'widget' => 'choice'
                ])
                ->add('horaFin', TimeType::class, [
                    'input' => 'datetime',
                    'widget' => 'choice',
                    'label'=>''
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => HorariosTrabajo::class,
        ]);
    }

}
