<?php

namespace App\Entity\Admin;

use App\Repository\Admin\UsuarioTRIMURepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=UsuarioTRIMURepository::class)
 * @ORM\Table(name="USUARIOS",
 *      schema="MUNI"
 * )
 * 
 * @UniqueEntity("C_USUARIO",
 * message = "El usuario {{ value }} ya esta registrado"
 * )
 */
class UsuarioTRIMU {

    /**
     * @ORM\Id()     
     * @ORM\Column(name="C_USUARIO", type="string")
     */
    private $id;
       
    /**
     * @ORM\Column(name="D_DENOMINACION", type="string", length=100)
     */
    private $denominacion = "";
    
    /**
     * @ORM\Column(name="C_TOKEN", type="string", length=100)
     */
    private $token = "";

    public function __construct()
    {
    }

    public function getId(): ?string {
        return $this->id;
    }

    public function getDenominacion(): ?string {
        return $this->denominacion;
    }
    
    public function getToken(): ?string {
        return $this->token;
    }

}
