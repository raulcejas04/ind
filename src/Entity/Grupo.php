<?php

namespace App\Entity;

use App\Repository\GrupoRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GrupoRepository::class)
 */
class Grupo
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $grupo;

    /**
     * @ORM\Column(type="integer")
     */
    private $creadoPor;

    /**
     * @ORM\Column(type="date")
     */
    private $creadoEn;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $modificadoPor;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $modificadoEn;

    /**
     * @ORM\Column(type="integer")
     */
    private $eliminadoPor;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $eliminadoEn;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $activo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGrupo(): ?string
    {
        return $this->grupo;
    }

    public function setGrupo(string $grupo): self
    {
        $this->grupo = $grupo;

        return $this;
    }

    public function getCreadoPor(): ?int
    {
        return $this->creadoPor;
    }

    public function setCreadoPor(int $creadoPor): self
    {
        $this->creadoPor = $creadoPor;

        return $this;
    }

    public function getCreadoEn(): ?\DateTimeInterface
    {
        return $this->creadoEn;
    }

    public function setCreadoEn(\DateTimeInterface $creadoEn): self
    {
        $this->creadoEn = $creadoEn;

        return $this;
    }

    public function getModificadoPor(): ?int
    {
        return $this->modificadoPor;
    }

    public function setModificadoPor(int $modificadoPor): self
    {
        $this->modificadoPor = $modificadoPor;

        return $this;
    }

    public function getElimidadoPor(): ?int
    {
        return $this->elimidadoPor;
    }

    public function setElimidadoPor(?int $elimidadoPor): self
    {
        $this->elimidadoPor = $elimidadoPor;

        return $this;
    }

    public function getEliminadoPor(): ?int
    {
        return $this->eliminadoPor;
    }

    public function setEliminadoPor(int $eliminadoPor): self
    {
        $this->eliminadoPor = $eliminadoPor;

        return $this;
    }

    public function getEliminadoEn(): ?\DateTimeInterface
    {
        return $this->eliminadoEn;
    }

    public function setEliminadoEn(?\DateTimeInterface $eliminadoEn): self
    {
        $this->eliminadoEn = $eliminadoEn;

        return $this;
    }

    public function getActivo(): ?bool
    {
        return $this->activo;
    }

    public function setActivo(?bool $activo): self
    {
        $this->activo = $activo;

        return $this;
    }
}
