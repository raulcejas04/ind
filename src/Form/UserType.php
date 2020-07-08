<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Compania;
use App\Entity\Grupo;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class UserType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('username', TextType::class, ['label' => 'Usuario'])
                ->add('nombre', TextType::class, ['label' => 'Nombre'])
                ->add('apellido', TextType::class, ['label' => 'Apellido'])
                ->add('email', EmailType::class, ['label' => 'E-mail'])
                ->add('compania', EntityType::class, ['class'=>Compania::class,'choice_label' => 'nombre', 'label'=>'Compania'])
                ->add('grupos', EntityType::class, ['class'=>Grupo::class,'choice_label' => 'nombre', 'label'=>'Grupos','multiple'=>true])
                ->add('roles', ChoiceType::class, [
                    'multiple' => true,
                    'choices' => [
                        'Usuarios' => 'ROLE_USER',
                        'Administradores' => 'ROLE_ADMIN',
                        'Administrador de seguridad' => 'ROLE_SEC_ADMIN']
        ]);
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }

}
