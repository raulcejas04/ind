<?php

namespace App\Form;

use App\Entity\Habilitacion;
use App\Entity\General;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;

class HabilitacionType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('tieneHabilitacion',HiddenType::class,[
                    'mapped'=>false
                ])
                ->add('tipo', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "6")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'placeholder' => 'Seleccione',
                    'empty_data' => '',
                ])
                ->add('expediente', TextType::class, [
                    'label' => 'Número de expediente',
                    'empty_data' => '',
                ])
                ->add('fechaInicio', DateType::class, [
                    'widget' => 'single_text',
                    'html5' => false,
                    'format' => 'dd-MM-yyyy',
                    'attr' => ['class' => 'js-datepicker']
                ])
                ->add('legajo_se_h', TextType::class, [
                    'label' => 'Legajo',
                    'empty_data' => '',
                ])
                ->add('rubroHabilitado', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "7")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                    'label' => 'Rubro general'
                ])
                ->add('rubroPrimario', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "8")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                    'label' => 'Rubro primario'
                ])
                ->add('rubroSecundario', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "9")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                    'label' => 'Rubro secundario'
                ])
                ->add('rubroEspecifico', TextType::class, [
                    'label' => 'Rubro por habilitación municipal (rubro específico)',
                    'empty_data' => '',
                ])
                ->add('materiaPrima', TextType::class, [
                    'label' => 'Materia prima',
                    'empty_data' => '',
                ])
                ->add('insumos', TextType::class, [
                    'label' => 'Insumos',
                    'empty_data' => '',
                ])
                ->add('productoFinal', TextType::class, [
                    'label' => 'Producto final elaborado',
                    'empty_data' => '',
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Habilitacion::class,
        ]);
    }

}
