<?php

namespace App\Form;

use App\Entity\Lugar;
use App\Entity\General;
use App\Form\DomicilioCortoType;
use App\Form\PersonaType;
use App\Form\HabilitacionType;
use App\Form\CertAptitudAmbientalType;
use App\Form\DispCatProvincialType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class LugarType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->setDisabled($options['disabled'])
                ->add('esDeposito', CheckboxType::class, ['label' => '¿Es un depósito?', 'required' => false])
                ->add('esProduccion', CheckboxType::class, ['label' => '¿Es un lugar de producción?', 'required' => false])
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
                ->add('esExportador', CheckboxType::class, ['label' => '¿Exporta?', 'required' => false])
                ->add('paises', EntityType::class, [
                    'class' => General::class,
                    'multiple' => true,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.tipo = :tipo')
                                ->setParameter('tipo', "Paises")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                ])
                ->add('habilitacion', HabilitacionType::class)
                ->add('certAptitudAmb', CertAptitudAmbientalType::class)
                ->add('dispCatProvincial', DispCatProvincialType::class)
                ->add('tieneResiduosIndustriales', CheckboxType::class, ['label' => '¿Produce residuos industriales?', 'required' => false])
                ->add('tipoResiduoIndustrial', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "11")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                    'label' => 'Tipo de residuos'
                ])
                ->add('residuoIndustrial', TextType::class, ['label' => '¿Cuales?'])
                ->add('tieneEfluentesLiquidos', CheckboxType::class, ['label' => '¿Efluentes líquidos?', 'required' => false])
                ->add('tieneTratamientoPrevioVuelco', CheckboxType::class, ['label' => '¿Tratamiento previo al vuelco?', 'required' => false])
                ->add('destinoVuelcoTipo', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "12")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                    'label' => 'Destino del vuelco'
                ])
                ->add('tieneResiduosEspeciales', CheckboxType::class, ['label' => '¿Residuos especiales?', 'required' => false])
                ->add('tipoResiduoEspecial', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "13")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                    'label' => 'Tipo de residuos'
                ])
                ->add('corrientes', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "14")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                    'label' => 'Corrientes'
                ])
                ->add('tieneEmisionesGaseosas', CheckboxType::class, ['label' => '¿Emisiones gaseosas?', 'required' => false])
                ->add('tipoEmisionGaseosa', EntityType::class, [
                    'class' => General::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('g')
                                ->join('g.tipo', 't')
                                ->where('t.id = :tipo')
                                ->setParameter('tipo', "15")
                                ->orderBy('g.descripcion', 'ASC');
                    },
                    'placeholder' => 'Seleccione',
                    'choice_label' => 'descripcion',
                    'label' => 'Tipo de emisiones gaseosas'
                ])
                ->add('potenciaTotalUtilizada', TextType::class, ['label' => 'Potencia total utilizada (HP/KW)'])
                ->add('CURT', TextType::class, ['label' => 'CURT'])
                ->add('fechaUltimaInpeccion', DateType::class, [
                    'widget' => 'single_text',
                    'html5' => false,
                    'format' => 'dd-MM-yyyy',
                    'attr' => ['class' => 'js-datepicker'],
                    'label' => 'Fecha última inspección'
                ])
                ->add('tieneDenuncia', CheckboxType::class, ['label' => '¿Tiene antecedente de reclamo de vecinos o denuncias?', 'required' => false])
                ->add('denunciasEspecificaciones', TextareaType::class, ['label' => 'Especifique los motivos'])
                ->add('horariosTrabajo', CollectionType::class, [
                    'entry_type' => HorarioTrabajoType::class,
                ])
                ->add('horarioRotativo', CheckboxType::class, ['label' => 'Horarios rotativos', 'required' => false])
                ->add('numeroDecreto', TextType::class, [
                    'label' => 'Número de decreto',
                    'empty_data' => '',
                ])
                ->add('guardar', SubmitType::class, ['label' => 'Guardar datos'])
                ->add('confirmar', SubmitType::class, ['label' => 'Confirmar datos'])
                ->add('esConfirmado', HiddenType::class, ['empty_data' => false,])
                ->add('domicilioValido', HiddenType::class, ['empty_data' => false, 'error_bubbling' => false])
                ->add('objeto', TextType::class, ['label' => 'Padron'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Lugar::class,
            'disabled' => false,
        ]);
    }

}
