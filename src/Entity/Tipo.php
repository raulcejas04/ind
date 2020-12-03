<?php

namespace App\Entity;

use App\Repository\TipoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TipoRepository::class)
 */
class Tipo
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
    private $tipo;

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

    /**
     * @ORM\OneToMany(targetEntity=General::class, mappedBy="tipo")
     */
    private $generales;

    public function __construct()
    {
        $this->generales = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTipo(): ?string
    {
        return $this->tipo;
    }

    public function setTipo(string $tipo): self
    {
        $this->tipo = $tipo;

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

    /**
     * @return Collection|General[]
     */
    public function getGenerales(): Collection
    {
        return $this->generales;
    }

    public function addGenerale(General $generale): self
    {
        if (!$this->generales->contains($generale)) {
            $this->generales[] = $generale;
            $generale->setTipo($this);
        }

        return $this;
    }

    public function removeGenerale(General $generale): self
    {
        if ($this->generales->removeElement($generale)) {
            // set the owning side to null (unless already changed)
            if ($generale->getTipo() === $this) {
                $generale->setTipo(null);
            }
        }

        return $this;
    }
}
