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
     * @ORM\Column(type="string", length=255)
     */
    private $razonSocial;

    /**
     * @ORM\ManyToOne(targetEntity=domicilio::class, inversedBy="industrias")
     * @ORM\JoinColumn(nullable=false)
     */
    private $domicilio;

    /**
     * @ORM\ManyToOne(targetEntity=persona::class, inversedBy="industriasEsTitular")
     * @ORM\JoinColumn(nullable=false)
     */
    private $titular;

    /**
     * @ORM\OneToMany(targetEntity=Lugar::class, mappedBy="industria")
     */
    private $lugares;

    public function __construct() {
        $this->lugares = new ArrayCollection();
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

    public function removeApoderado(persona $apoderado): self {
        if ($this->apoderado->removeElement($apoderado)) {
            // set the owning side to null (unless already changed)
            if ($apoderado->getIndustria() === $this) {
                $apoderado->setIndustria(null);
            }
        }

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

    public function getTitular(): ?persona
    {
        return $this->titular;
    }

    public function setTitular(?persona $titular): self
    {
        $this->titular = $titular;

        return $this;
    }

    /**
     * @return Collection|Lugar[]
     */
    public function getLugares(): Collection
    {
        return $this->lugares;
    }

    public function addLugare(Lugar $lugare): self
    {
        if (!$this->lugares->contains($lugare)) {
            $this->lugares[] = $lugare;
            $lugare->setIndustria($this);
        }

        return $this;
    }

    public function removeLugare(Lugar $lugare): self
    {
        if ($this->lugares->removeElement($lugare)) {
            // set the owning side to null (unless already changed)
            if ($lugare->getIndustria() === $this) {
                $lugare->setIndustria(null);
            }
        }

        return $this;
    }

}
