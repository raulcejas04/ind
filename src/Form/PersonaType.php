<?php

namespace App\Form;

use App\Entity\Persona;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class PersonaType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('nombre', TextType::class, ['label' => 'Nombre', 'empty_data' => ''])
                ->add('apellido', TextType::class, ['label' => 'Apellido', 'empty_data' => ''])
                ->add('CUIL', TextType::class, ['label' => 'CUIL', 'empty_data' => ''])
                ->add('telefonoFijo', TextType::class, ['label' => 'Tel. Fijo', 'empty_data' => ''])
                ->add('telefonoMovil', TextType::class, ['label' => 'Tel. Movil', 'empty_data' => ''])
                ->add('email', TextType::class, ['label' => 'E-Mail', 'empty_data' => ''])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Persona::class,
        ]);
    }

}
