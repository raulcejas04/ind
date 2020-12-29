<?php

namespace App\Form;

use App\Entity\Domicilio;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class DomicilioCortoType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {

        $builder
        ->add('puerta', TextType::class, ['label' => 'Número'])
        ->add('calleAlternativa', TextType::class, ['label' => 'Calle'])
        ->add('nomenclaturaCatastral', TextType::class, ['label' => 'Nomenclatura catastral'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Domicilio::class,
        ]);
    }

}
