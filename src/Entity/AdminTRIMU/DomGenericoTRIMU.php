<?php

namespace App\Entity\AdminTRIMU;

use App\Entity\AdminTRIMU\DomGenericoTRIMU;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=DomGenericoTRIMURepository::class)
 * @ORM\Table(name="DOM_GENERICOS",
 *      schema="MUNI"
 * )    
 */
class DomGenericoTRIMU {

    /**
     * @ORM\Id()     
     * @ORM\Column(name="ID_DOMICILIO", type="integer")
     */
    private $id;

    /**
     * @ORM\Column(name="N_CIRCUNS", type="string")
     */
    private $nCircuns;

    /**
     * @ORM\Column(name="D_SECCION", type="string")
     */
    private $dSeccion;

    /**
     * @ORM\Column(name="N_FRACCION", type="string")
     */
    private $nFraccion;

    /**
     * @ORM\Column(name="L_FRACCION", type="string")
     */
    private $lFraccion;

    /**
     * @ORM\Column(name="N_MANZANA", type="string")
     */
    private $nManzana;

    /**
     * @ORM\Column(name="L_MANZANA", type="string")
     */
    private $lManzana;

    /**
     * @ORM\Column(name="N_PARCELA", type="integer")
     */
    private $nParcela;

    /**
     * @ORM\Column(name="L_PARCELA", type="string")
     */
    private $lParcela;

    /**
     * @ORM\Column(name="D_SUBPARCELA", type="string")
     */
    private $dSubparcela;

    /**
     * @ORM\Column(name="D_UNI_FUN", type="string")
     */
    private $dUniFun;

    public function getNCircuns(): ?string {
        return $this->nCircuns;
    }

    public function getDSeccion(): ?string {
        return $this->dSeccion;
    }

    public function getNFraccion(): ?string {
        return $this->nFraccion;
    }

    public function getLFraccion(): ?string {
        return $this->lFraccion;
    }

    public function getNManzana(): ?string {
        return $this->nManzana;
    }

    public function getLManzana(): ?string {
        return $this->lManzana;
    }

    public function getNParcela(): ?int {
        return $this->nParcela;
    }

    public function getLParcela(): ?string {
        return $this->lParcela;
    }

    public function getDSubparcela(): ?string {
        return $this->dSubparcela;
    }

    public function getDUniFun(): ?string {
        return $this->dUniFun;
    }

}
