<?php

namespace App\Entity;

use App\Repository\DomicilioRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DomicilioRepository::class)
 */
class Domicilio
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
    private $calle;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $puerta;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $pisoDpto;

    /**
     * @ORM\OneToMany(targetEntity=general::class, mappedBy="domicilio")
     */
    private $localidad;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $CP;

    /**
     * @ORM\ManyToOne(targetEntity=Industria::class, inversedBy="domicilio")
     */
    private $industria;

    /**
     * @ORM\ManyToOne(targetEntity=Lugar::class, inversedBy="domicilio")
     */
    private $lugar;

    /**
     * @ORM\OneToMany(targetEntity=Industria::class, mappedBy="domicilio")
     */
    private $industrias;

    /**
     * @ORM\OneToMany(targetEntity=Lugar::class, mappedBy="domicilio")
     */
    private $lugares;

    public function __construct()
    {
        $this->localidad = new ArrayCollection();
        $this->industrias = new ArrayCollection();
        $this->lugares = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCalle(): ?string
    {
        return $this->calle;
    }

    public function setCalle(string $calle): self
    {
        $this->calle = $calle;

        return $this;
    }

    public function getPuerta(): ?string
    {
        return $this->puerta;
    }

    public function setPuerta(string $puerta): self
    {
        $this->puerta = $puerta;

        return $this;
    }

    public function getPisoDpto(): ?string
    {
        return $this->pisoDpto;
    }

    public function setPisoDpto(?string $pisoDpto): self
    {
        $this->pisoDpto = $pisoDpto;

        return $this;
    }

    /**
     * @return Collection|general[]
     */
    public function getLocalidad(): Collection
    {
        return $this->localidad;
    }

    public function addLocalidad(general $localidad): self
    {
        if (!$this->localidad->contains($localidad)) {
            $this->localidad[] = $localidad;
            $localidad->setDomicilio($this);
        }

        return $this;
    }

    public function removeLocalidad(general $localidad): self
    {
        if ($this->localidad->removeElement($localidad)) {
            // set the owning side to null (unless already changed)
            if ($localidad->getDomicilio() === $this) {
                $localidad->setDomicilio(null);
            }
        }

        return $this;
    }

    public function getCP(): ?string
    {
        return $this->CP;
    }

    public function setCP(string $CP): self
    {
        $this->CP = $CP;

        return $this;
    }

    public function getIndustria(): ?Industria
    {
        return $this->industria;
    }

    public function setIndustria(?Industria $industria): self
    {
        $this->industria = $industria;

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
     * @return Collection|Industria[]
     */
    public function getIndustrias(): Collection
    {
        return $this->industrias;
    }

    public function addIndustria(Industria $industria): self
    {
        if (!$this->industrias->contains($industria)) {
            $this->industrias[] = $industria;
            $industria->setDomicilio($this);
        }

        return $this;
    }

    public function removeIndustria(Industria $industria): self
    {
        if ($this->industrias->removeElement($industria)) {
            // set the owning side to null (unless already changed)
            if ($industria->getDomicilio() === $this) {
                $industria->setDomicilio(null);
            }
        }

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
            $lugare->setDomicilio($this);
        }

        return $this;
    }

    public function removeLugare(Lugar $lugare): self
    {
        if ($this->lugares->removeElement($lugare)) {
            // set the owning side to null (unless already changed)
            if ($lugare->getDomicilio() === $this) {
                $lugare->setDomicilio(null);
            }
        }

        return $this;
    }
}