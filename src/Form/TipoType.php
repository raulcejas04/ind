<?php

namespace App\Form;

use App\Entity\Tipo;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class TipoType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('tipo', TextType::class, ['label' => 'Tipo: '])                
                ->add('activo', CheckboxType::class, ['label' => 'Activo: '], [ 'data' => false, 'required' => false])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Tipo::class,
        ]);
    }

}
