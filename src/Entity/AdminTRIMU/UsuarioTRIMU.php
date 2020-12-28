<?php

namespace App\Entity\AdminTRIMU;

use App\Repository\AdminTRIMU\UsuarioTRIMURepository;
use App\Entity\AdminTRIMU\ContribuyenteTRIMU;
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
    
    
    
    
    /**
     * @ORM\OneToOne(targetEntity=ContribuyenteTRIMU::class)    
     * @ORM\JoinColumn(name="C_USUARIO", referencedColumnName="N_CUIT")
     */
    private $contribuyente;

    public function __construct()
    {
    }

    public function getId(): ?string {
        return $this->id;
    }

    public function getDenominacion(): ?string {
        return $this->denominacion;
    }
    
    public function getContribuyente(): contribuyenteTRIMU{
        return $this->contribuyente;
    }
    
    public function getToken(): ?string {
        return $this->token;
    }

}
