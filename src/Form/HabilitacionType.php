<?php

namespace App\Form;

use App\Entity\Habilitacion;
use App\Entity\General;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;

class HabilitacionType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('tipo', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                //add where tipo.id = rubro id??
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion'
                ])
                ->add('expediente', TextType::class, ['label' => 'Número de expediente: '])
                ->add('numeroDecreto', TextType::class, ['label' => 'Número de decreto: '])
                ->add('fechaInicio', DateType::class, [
                    'widget' => 'single_text',
                    'html5' => false,
                    'format' => 'dd-MM-yyyy',
                    'attr' => ['class' => 'js-datepicker'],
                ])
                ->add('legajo_se_h', TextType::class, ['label' => 'Legajo: '])
                ->add('rubroHabilitado', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                //add where tipo.id = rubro id??
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Rubro general:'
                ])
                ->add('rubroPrimario', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                //add where tipo.id = rubro id??
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Rubro primario:'
                ])
                ->add('rubroSecundario', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                //add where tipo.id = rubro id??
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Rubro secundario:'
                ])
                ->add('rubroEspecifico', TextType::class, ['label' => 'Rubro por habilitación municipal (rubro específico): '])
                ->add('materiaPrima', TextType::class, ['label' => 'Materia prima: '])
                ->add('insumos', TextType::class, ['label' => 'Insumos: '])
                ->add('productoFinal', TextType::class, ['label' => 'Producto final elaborado: '])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Habilitacion::class,
        ]);
    }

}
