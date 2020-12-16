<?php

namespace App\Form;

use App\Entity\Industria;
use App\Form\DomicilioType;
use App\Form\PersonaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class IndustriaType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('cuit', TextType::class, ['label' => 'CUIT'])
                ->add('razonSocial', TextType::class, ['label' => 'Razón social'])
                ->add('domicilio', DomicilioType::class)
                ->add('titular', PersonaType::class);
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Industria::class,
        ]);
    }

}
