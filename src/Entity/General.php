<?php

namespace App\Entity;

use App\Repository\GeneralRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GeneralRepository::class)
 */
class General
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=tipo::class, inversedBy="generales")
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
     * @ORM\ManyToOne(targetEntity=Domicilio::class, inversedBy="localidad")
     */
    private $domicilio;

    /**
     * @ORM\ManyToOne(targetEntity=Lugar::class, inversedBy="tipo")
     */
    private $lugar;

    /**
     * @ORM\ManyToMany(targetEntity=Lugar::class, mappedBy="paises")
     */
    private $Lugares;

    public function __construct()
    {
        $this->Lugares = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTipo(): ?tipo
    {
        return $this->tipo;
    }

    public function setTipo(?tipo $tipo): self
    {
        $this->tipo = $tipo;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(string $descripcion): self
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getDescripcionCorta(): ?string
    {
        return $this->descripcionCorta;
    }

    public function setDescripcionCorta(string $descripcionCorta): self
    {
        $this->descripcionCorta = $descripcionCorta;

        return $this;
    }

    public function getAuxiliar1(): ?string
    {
        return $this->auxiliar1;
    }

    public function setAuxiliar1(?string $auxiliar1): self
    {
        $this->auxiliar1 = $auxiliar1;

        return $this;
    }

    public function getAuxiliar2(): ?string
    {
        return $this->auxiliar2;
    }

    public function setAuxiliar2(?string $auxiliar2): self
    {
        $this->auxiliar2 = $auxiliar2;

        return $this;
    }

    public function getDomicilio(): ?Domicilio
    {
        return $this->domicilio;
    }

    public function setDomicilio(?Domicilio $domicilio): self
    {
        $this->domicilio = $domicilio;

        return $this;
    }

    public function getLugar(): ?Lugar
    {
        return $this->lugar;
    }

    public function setLugar(?Lugar $lugar): self
    {
        $this->lugar = $lugar;

        return $this;
    }

    /**
     * @return Collection|Lugar[]
     */
    public function getLugares(): Collection
    {
        return $this->Lugares;
    }

    public function addLugare(Lugar $lugare): self
    {
        if (!$this->Lugares->contains($lugare)) {
            $this->Lugares[] = $lugare;
            $lugare->addPaise($this);
        }

        return $this;
    }

    public function removeLugare(Lugar $lugare): self
    {
        if ($this->Lugares->removeElement($lugare)) {
            $lugare->removePaise($this);
        }

        return $this;
    }
}
