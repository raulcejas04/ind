<?php

namespace App\Form;

use App\Entity\Lugar;
use App\Entity\General;
use App\Form\DomicilioType;
use App\Form\PersonaType;
use App\Form\HabilitacionType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Doctrine\ORM\EntityRepository;

class LugarType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('esDeposito', CheckboxType::class, ['label' => '¿Es un depósito?'])
                ->add('esProduccion', CheckboxType::class, ['label' => '¿Es un lugar de producción?'])
                ->add('domicilio', DomicilioType::class)
                ->add('qPersonal', TextType::class, ['label' => 'Cant. de personal total: '])
                ->add('qPersonalFemenino', TextType::class, ['label' => 'Cant. de personal femenino: '])
                ->add('qPersonalTrans', TextType::class, ['label' => 'Cant. de personal trans: '])
                ->add('qPersonalDiscapacidad', TextType::class, ['label' => 'Cant. de personal con discapacidad: '])
                ->add('qPersonalResidenteAvellaneda', TextType::class, ['label' => 'Cant. de personal residente de Avellaneda: '])
                ->add('superficieTotal', TextType::class, ['label' => 'Superficie total: '])
                ->add('siperficieCubierta', TextType::class, ['label' => 'Superficie cubierta: '])
                ->add('superficieLibre', TextType::class, ['label' => 'Superficie libre: '])
                ->add('apoderado', PersonaType::class)
                ->add('esExportador', CheckboxType::class, ['label' => '¿Exporta?'])
                ->add('paises', EntityType::class, [
                    'class' => General::class,
                    'multiple' => true,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                //add where tipo.id = pais or whatever
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                ])
                ->add('habilitacion', HabilitacionType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Lugar::class,
        ]);
    }

}
