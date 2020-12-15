<?php

namespace App\Form;

use App\Entity\Lugar;
use App\Entity\General;
use App\Form\DomicilioCortoType;
use App\Form\PersonaType;
use App\Form\HabilitacionType;
use App\Form\CertAptitudAmbientalType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class LugarType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('esDeposito', CheckboxType::class, ['label' => '¿Es un depósito?'])
                ->add('esProduccion', CheckboxType::class, ['label' => '¿Es un lugar de producción?'])
                ->add('domicilio', DomicilioCortoType::class)
                ->add('qPersonal', TextType::class, ['label' => 'Cant. de personal total'])
                ->add('qPersonalFemenino', TextType::class, ['label' => 'Cant. de personal femenino'])
                ->add('qPersonalTrans', TextType::class, ['label' => 'Cant. de personal trans'])
                ->add('qPersonalDiscapacidad', TextType::class, ['label' => 'Cant. de personal con discapacidad'])
                ->add('qPersonalResidenteAvellaneda', TextType::class, ['label' => 'Cant. de personal residente de Avellaneda'])
                ->add('superficieTotal', TextType::class, ['label' => 'Superficie total'])
                ->add('siperficieCubierta', TextType::class, ['label' => 'Superficie cubierta'])
                ->add('superficieLibre', TextType::class, ['label' => 'Superficie libre'])
                ->add('apoderado', PersonaType::class)
                ->add('esExportador', CheckboxType::class, ['label' => '¿Exporta?'])
                ->add('paises', EntityType::class, [
                    'class' => General::class,
                    'multiple' => true,
                   'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "pais")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                ])
                ->add('habilitacion', HabilitacionType::class)
                ->add('certAptitudAmb', CertAptitudAmbientalType::class)
                ->add('tieneResiduosIndustriales', CheckboxType::class, ['label' => '¿Produce residuos industriales?'])
                ->add('tipoResiduoIndustrial', EntityType::class, [
                    'class' => General::class,
                   'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "residuoIndustrial")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Tipo de residuos'
                ])
                ->add('residuoIndustrial', TextType::class, ['label' => '¿Cuales?'])
                ->add('tieneEfluentesLiquidos', CheckboxType::class, ['label' => '¿Efluentes líquidos?'])
                ->add('tieneTratamientoPrevioVuelco', CheckboxType::class, ['label' => '¿Tratamiento previo al vuelco?'])
                ->add('destinoVuelcoTipo', EntityType::class, [
                    'class' => General::class,
                   'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "destinoVuelcoTipo")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Destino del vuelco'
                ])
                ->add('tieneResiduosEspeciales', CheckboxType::class, ['label' => '¿Residuos especiales?'])
                ->add('tipoResiduoEspecial', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "tipoResiduoEspecial")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Tipo de residuos'
                ])
                ->add('corrientes', EntityType::class, [
                    'class' => General::class,
                   'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "corrientes")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Corrientes'
                ])
                ->add('tieneEmisionesGaseosas', CheckboxType::class, ['label' => '¿Emisiones gaseosas?'])
                ->add('tipoEmisionGaseosa', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "tipoEmisionGaseosa")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'choice_label' => 'descripcion',
                    'label' => 'Tipo de emisiones gaseosas'
                ])
                ->add('potenciaUtilizada', TextType::class, ['label' => 'Potencia total utilizada (HP/KW):'])
                ->add('CURT', TextType::class, ['label' => 'CURT:'])
                ->add('fechaUltimaInpeccion', DateType::class, [
                    'widget' => 'single_text',
                    'html5' => false,
                    'format' => 'dd-MM-yyyy',
                    'attr' => ['class' => 'js-datepicker'],
                    'label' => 'Fecha última inspección'
                ])
                ->add('tieneDenuncia', CheckboxType::class, ['label' => '¿Tiene antecedente de reclamo de vecinos o denuncias?'])
                ->add('denunciasEspecificaciones', TextareaType::class, ['label' => 'Especifique los motivos'])
                ->add('horariosTrabajo', CollectionType::class, [
                    'entry_type' => HorarioTrabajoType::class,
                ])
                ->add('horarioRotativo', CheckboxType::class, ['label' => 'Horarios rotativos'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Lugar::class,
        ]);
    }

}
