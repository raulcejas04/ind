<?php

namespace App\Entity\Prototipo;

use App\Repository\Prototipo\PrototipoRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PrototipoRepository::class)
 */
class Prototipo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Nombre;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $Edad;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $FechaNacimiento;

    /**
     * @ORM\Column(type="time", nullable=true)
     */
    private $horaNacimiento;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $fechaActualizacion;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $lenguaje;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tieneCovid;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $sueldo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->Nombre;
    }

    public function setNombre(?string $Nombre): self
    {
        $this->Nombre = $Nombre;

        return $this;
    }

    public function getEdad(): ?int
    {
        return $this->Edad;
    }

    public function setEdad(?int $Edad): self
    {
        $this->Edad = $Edad;

        return $this;
    }

    public function getFechaNacimiento(): ?\DateTimeInterface
    {
        return $this->FechaNacimiento;
    }

    public function setFechaNacimiento(?\DateTimeInterface $FechaNacimiento): self
    {
        $this->FechaNacimiento = $FechaNacimiento;

        return $this;
    }

    public function getHoraNacimiento(): ?\DateTimeInterface
    {
        return $this->horaNacimiento;
    }

    public function setHoraNacimiento(?\DateTimeInterface $horaNacimiento): self
    {
        $this->horaNacimiento = $horaNacimiento;

        return $this;
    }

    public function getFechaActualizacion(): ?\DateTimeInterface
    {
        return $this->fechaActualizacion;
    }

    public function setFechaActualizacion(?\DateTimeInterface $fechaActualizacion): self
    {
        $this->fechaActualizacion = $fechaActualizacion;

        return $this;
    }

    public function getLenguaje(): ?int
    {
        return $this->lenguaje;
    }

    public function setLenguaje(?int $lenguaje): self
    {
        $this->lenguaje = $lenguaje;

        return $this;
    }

    public function getTieneCovid(): ?bool
    {
        return $this->tieneCovid;
    }

    public function setTieneCovid(bool $tieneCovid): self
    {
        $this->tieneCovid = $tieneCovid;

        return $this;
    }

    public function getSueldo(): ?float
    {
        return $this->sueldo;
    }

    public function setSueldo(?float $sueldo): self
    {
        $this->sueldo = $sueldo;

        return $this;
    }
}
