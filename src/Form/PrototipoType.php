<?php
namespace App\Form;
use App\Entity\Prototipo;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class PrototipoType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('Nombre', TextType::class, ['label' => 'Nombre'])
                ->add('Edad', IntegerType::class, ['label' => 'Edad'])
                ->add('FechaNacimiento', DateType::class, ['label' => 'Fecha de nacimiento']);
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Prototipo::class,
        ]);
    }

}
