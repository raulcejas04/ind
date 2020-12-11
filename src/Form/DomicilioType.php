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

class DomicilioType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('provincia', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "provincia")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Provincia:'
                ])
                ->add('localidad', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "localidad")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Localidad:'
                ])
                ->add('cp', TextType::class, ['label' => 'CP: '])
                ->add('calle', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "calle")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Calle:'
                ])
                ->add('puerta', TextType::class, ['label' => 'Número: '])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Domicilio::class,
        ]);
    }

}
