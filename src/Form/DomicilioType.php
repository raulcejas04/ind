<?php

namespace App\Form;

use App\Entity\Domicilio;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class DomicilioType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('provincia', ChoiceType::class, ['label' => 'Provincia: '])
                ->add('localidad', ChoiceType::class, ['label' => 'Localidad: '])
                ->add('cp', TextType::class, ['label' => 'CP: '])
                ->add('calle', TextType::class, ['label' => 'Calle: '])
                ->add('puerta', TextType::class, ['label' => 'Número: '])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Domicilio::class,
        ]);
    }

}
