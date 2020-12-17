<?php

namespace App\Form;

use App\Entity\CertAptitudAmb;
use App\Entity\General;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;

class CertAptitudAmbientalType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('categoria', EntityType::class, [
                    'class' => General::class,
                    'placeholder' => 'Seleccione',
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "10")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Categoria industrial'
                ])
                ->add('numero', TextType::class, ['label' => 'Número'])
                ->add('fechaOtorgamiento', DateType::class, [
                    'widget' => 'single_text',
                    'html5' => false,
                    'format' => 'dd-MM-yyyy',
                    'attr' => ['class' => 'js-datepicker'],
                    'label' => 'Fecha de otorgamiento']
                )
                ->add('fechaVencimiento', DateType::class, [
                    'widget' => 'single_text',
                    'html5' => false,
                    'format' => 'dd-MM-yyyy',
                    'attr' => ['class' => 'js-datepicker'],
                    'label' => 'Fecha de vencimiento']
                )
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => CertAptitudAmb::class,
        ]);
    }

}
