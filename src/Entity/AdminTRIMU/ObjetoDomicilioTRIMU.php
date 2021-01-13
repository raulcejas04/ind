<?php

namespace App\Entity\AdminTRIMU;

use App\Entity\AdminTRIMU\ObjetoDomicilioTRIMU;
use App\Entity\AdminTRIMU\DomGenericoTRIMU;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=App\Repository\AdminTRIMU\ObjetoDomicilioTRIMURepository::class)
 * @ORM\Table(name="OBJETOS_DOMICILIOS",
 *      schema="MUNI"
 * )    
 */
class ObjetoDomicilioTRIMU {

    /**
     * @ORM\Id()     
     * @ORM\Column(name="C_TIPO_OBJETO", type="string")
     */
    private $tipoObjeto;

    /**
     * @ORM\Id()     
     * @ORM\Column(name="D_OBJETO", type="string")
     */
    private $numObjeto;

    /**
     * @ORM\OneToOne(targetEntity=DomGenericoTRIMU::class)    
     * @ORM\JoinColumn(name="ID_DOMICILIO", referencedColumnName="ID_DOMICILIO")
     */
    private $domGenerico;

    public function getTipoObjeto(): ?string {
        return $this->tipoObjeto;
    }

    public function getNumObjeto(): ?string {
        return $this->numObjeto;
    }

    public function getDomGenerico(): DomGenericoTRIMU {
        return $this->domGenerico;
    }

}
