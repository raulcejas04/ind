<?php

namespace App\Entity;

use App\Repository\IndustriaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=IndustriaRepository::class)
 */
class Industria {

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $CUIT;

    /**
     * @ORM\Column(type="time")
     */
    private $hInicio;

    /**
     * @ORM\Column(type="time")
     */
    private $hFin;

    /**
     * @ORM\OneToMany(targetEntity=persona::class, mappedBy="industria")
     */
    private $titular;

    /**
     * @ORM\OneToMany(targetEntity=persona::class, mappedBy="industria")
     */
    private $apoderado;

    /**
     * @ORM\ManyToOne(targetEntity=Lugar::class, inversedBy="industria")
     */
    private $lugar;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $razonSocial;

    /**
     * @ORM\ManyToOne(targetEntity=domicilio::class, inversedBy="industrias")
     * @ORM\JoinColumn(nullable=false)
     */
    private $domicilio;

    public function __construct() {
        $this->titular = new ArrayCollection();
        $this->apoderado = new ArrayCollection();
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getCUIT(): ?string {
        return $this->CUIT;
    }

    public function setCUIT(string $CUIT): self {
        $this->CUIT = $CUIT;

        return $this;
    }

    public function removeDomicilio(domicilio $domicilio): self {
        if ($this->domicilio->removeElement($domicilio)) {
            // set the owning side to null (unless already changed)
            if ($domicilio->getIndustria() === $this) {
                $domicilio->setIndustria(null);
            }
        }

        return $this;
    }

    public function getHInicio(): ?\DateTimeInterface {
        return $this->hInicio;
    }

    public function setHInicio(\DateTimeInterface $hInicio): self {
        $this->hInicio = $hInicio;

        return $this;
    }

    public function getHFin(): ?\DateTimeInterface {
        return $this->hFin;
    }

    public function setHFin(\DateTimeInterface $hFin): self {
        $this->hFin = $hFin;

        return $this;
    }

    /**
     * @return Collection|persona[]
     */
    public function getTitular(): Collection {
        return $this->titular;
    }

    public function addTitular(persona $titular): self {
        if (!$this->titular->contains($titular)) {
            $this->titular[] = $titular;
            $titular->setIndustria($this);
        }

        return $this;
    }

    public function removeTitular(persona $titular): self {
        if ($this->titular->removeElement($titular)) {
            // set the owning side to null (unless already changed)
            if ($titular->getIndustria() === $this) {
                $titular->setIndustria(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|persona[]
     */
    public function getApoderado(): Collection {
        return $this->apoderado;
    }

    public function addApoderado(persona $apoderado): self {
        if (!$this->apoderado->contains($apoderado)) {
            $this->apoderado[] = $apoderado;
            $apoderado->setIndustria($this);
        }

        return $this;
    }

    public function removeApoderado(persona $apoderado): self {
        if ($this->apoderado->removeElement($apoderado)) {
            // set the owning side to null (unless already changed)
            if ($apoderado->getIndustria() === $this) {
                $apoderado->setIndustria(null);
            }
        }

        return $this;
    }

    public function getLugar(): ?Lugar {
        return $this->lugar;
    }

    public function setLugar(?Lugar $lugar): self {
        $this->lugar = $lugar;

        return $this;
    }

    public function getRazonSocial(): ?string {
        return $this->razonSocial;
    }

    public function setRazonSocial(string $razonSocial): self {
        $this->razonSocial = $razonSocial;

        return $this;
    }

    public function getDomicilio(): ?domicilio
    {
        return $this->domicilio;
    }

    public function setDomicilio(?domicilio $domicilio): self
    {
        $this->domicilio = $domicilio;

        return $this;
    }

}
