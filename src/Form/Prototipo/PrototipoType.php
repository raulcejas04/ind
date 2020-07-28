<?php
namespace App\Form\Prototipo;
use App\Entity\Prototipo\Prototipo;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType; 
use Symfony\Component\Form\Extension\Core\Type\MoneyType; 
use Symfony\Component\Form\Extension\Core\Type\LanguageType; 
use Symfony\Component\Form\Extension\Core\Type\TimeType; 

class PrototipoType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('Nombre', TextType::class, ['label' => 'Nombre'])
                ->add('Edad', IntegerType::class, ['label' => 'Edad'])
                ->add('FechaNacimiento', DateType::class, ['label' => 'Fecha de nacimiento'])                
                ->add("HoraNacimiento", TimeType::class, ['label' => 'Hora de nacimiento'])
                ->add("FechaActualizacion", DateTimeType::class, ['label' => 'Fecha de actualizacion'])
                ->add("Lenguaje", IntegerType::class, ['label' => 'Lenguaje'])
                ->add("TieneCOVID", CheckboxType::class, ['label' => 'COVIDDDDDD'])
                ->add("Sueldo", MoneyType::class, ['label' => 'Sueldo']);        
    }
    
    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Prototipo::class,
        ]);
    }

}
