<?php

namespace App\Entity;

use App\Repository\GeneralRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Tipo;
use App\Entity\Traits\AuditTrait;

/**
 * @ORM\Entity(repositoryClass=GeneralRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class General {

    use AuditTrait;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Tipo::class, inversedBy="generales")
     * @ORM\JoinColumn(nullable=false)
     */
    private $tipo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $descripcion;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $descripcionCorta;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $auxiliar1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $auxiliar2;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $auxiliar3_int;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $auxiliar4_int;

    public function __construct() {
        
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getTipo(): ?tipo {
        return $this->tipo;
    }

    public function setTipo(?tipo $tipo): self {
        $this->tipo = $tipo;

        return $this;
    }

    public function getDescripcion(): ?string {
        return $this->descripcion;
    }

    public function setDescripcion(string $descripcion): self {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getDescripcionCorta(): ?string {
        return $this->descripcionCorta;
    }

    public function setDescripcionCorta(string $descripcionCorta): self {
        $this->descripcionCorta = $descripcionCorta;

        return $this;
    }

    public function getAuxiliar1(): ?string {
        return $this->auxiliar1;
    }

    public function setAuxiliar1(?string $auxiliar1): self {
        $this->auxiliar1 = $auxiliar1;

        return $this;
    }

    public function getAuxiliar2(): ?string {
        return $this->auxiliar2;
    }

    public function setAuxiliar2(?string $auxiliar2): self {
        $this->auxiliar2 = $auxiliar2;

        return $this;
    }

    public function getAuxiliar3_int(): ?int {
        return $this->auxiliar3_int;
    }

    public function setAuxiliar3_int(?int $auxiliar3_int): self {
        $this->auxiliar3_int = $auxiliar3_int;

        return $this;
    }

    public function getAuxiliar4_int(): ?int {
        return $this->auxiliar4_int;
    }

    public function setAuxiliar4_int(?int $auxiliar4_int): self {
        $this->auxiliar4_int = $auxiliar4_int;

        return $this;
    }

}
