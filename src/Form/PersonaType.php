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
                ->add('nombre', TextType::class, ['label' => 'Nombre'])
                ->add('apellido', TextType::class, ['label' => 'Apellido'])
                ->add('telefonoFijo', TextType::class, ['label' => 'Tel. Fijo'])
                ->add('telefonoMovil', TextType::class, ['label' => 'Tel. Movil'])
                ->add('email', TextType::class, ['label' => 'E-Mail'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Persona::class,
        ]);
    }

}
