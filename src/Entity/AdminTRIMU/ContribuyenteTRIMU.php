<?php

namespace App\Entity\AdminTRIMU;

use App\Entity\AdminTRIMU\UsuarioTRIMU;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;


/**
 * @ORM\Entity(repositoryClass=ContribuyenteTRIMURepository::class)
 * @ORM\Table(name="CONTRIBUYENTES",
 *      schema="MUNI"
 * )    
 * 
 * @UniqueEntity("N_CUIT",
 * message = "El usuario {{ value }} ya esta registrado"
 * )
 */
class ContribuyenteTRIMU {

    /**
     * @ORM\Id()     
     * @ORM\Column(name="N_CUIT", type="string")
     */
    private $id;
    
    /**
     * @ORM\Column(name="D_DENOMINACION", type="string", length=100)
     */
    private $denominacion = "";
    

    public function __construct()
    {
    }

    public function getId(){
        return $this->id;
    }
    
    
    public function getDenominacion(): ?string {
        return $this->denominacion;
    }
    

}
