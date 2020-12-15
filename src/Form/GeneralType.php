<?php

namespace App\Form;

use App\Entity\General;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class GeneralType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder->add('descripcion', TextType::class, ['label' => 'Descripción: '])                
                ->add('descripcionCorta', TextType::class, ['label' => 'Descripción Corta: '])
                ->add('auxiliar1', TextType::class, ['label' => 'Campo Auxiliar1: ','required' => false])
                ->add('auxiliar2', TextType::class, ['label' => 'Campo Auxiliar2: ','required' => false])                
                ;
        
        
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => General::class,
        ]);
    }

}
