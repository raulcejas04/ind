<?php

namespace App\Form\Session;

use App\Entity\Admin\Usuario;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class FotoPerfilType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('imagen', FileType::class, [
                    
                    'label' => 'Imagen',
                    // unmapped means that this field is not associated to any entity property
                    'mapped' => false,
                    // make it optional so you don't have to re-upload the PDF file
                    // every time you edit the Product details
                    'required' => false,
                    // unmapped fields can't define their validation using annotations
                    // in the associated entity, so you can use the PHP constraint classes
                    'constraints' => [
                        new Image([
                            'minWidth' => '100',
                            'maxWidth' => '2500',
                            'minHeight' => '100',
                            'maxHeight' => '2500',
                            'mimeTypes' => [
                                'image/png','image/jpeg'
                            ]
                                ])
                    ]
                ])              
                ->add('x', HiddenType::class, ['mapped' => false,  'attr' => ['value' => '0']])
                ->add('y', HiddenType::class, ['mapped' => false,  'attr' => ['value' => '0']])
                ->add('alto', HiddenType::class, ['mapped' => false,  'attr' => ['value' => '100']])
                ->add('ancho', HiddenType::class, ['mapped' => false,  'attr' => ['value' => '100']]);
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Usuario::class,
        ]);
    }

}
