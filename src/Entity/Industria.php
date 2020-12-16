<?php

namespace App\Entity;

use App\Repository\IndustriaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\AuditTrait;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=IndustriaRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Industria {
    use AuditTrait;

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
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Campo requerido")
     */
    private $razonSocial;

    /**
     * @ORM\ManyToOne(targetEntity=Domicilio::class, inversedBy="industrias",cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     * @Assert\Valid
     */
    private $domicilio;

    /**
     * @ORM\ManyToOne(targetEntity=Persona::class, inversedBy="industriasEsTitular",cascade={"persist"})
     * @ORM\JoinColumn(nullable=false)
     * @Assert\Valid
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

    public function getDomicilio(): ?domicilio {
        return $this->domicilio;
    }

    public function setDomicilio(?domicilio $domicilio): self {
        $this->domicilio = $domicilio;

        return $this;
    }

    public function getTitular(): ?persona {
        return $this->titular;
    }

    public function setTitular(?persona $titular): self {
        $this->titular = $titular;

        return $this;
    }

    /**
     * @return Collection|Lugar[]
     */
    public function getLugares(): Collection {
        return $this->lugares;
    }

    public function addLugare(Lugar $lugare): self {
        if (!$this->lugares->contains($lugare)) {
            $this->lugares[] = $lugare;
            $lugare->setIndustria($this);
        }

        return $this;
    }

    public function removeLugare(Lugar $lugare): self {
        if ($this->lugares->removeElement($lugare)) {
            // set the owning side to null (unless already changed)
            if ($lugare->getIndustria() === $this) {
                $lugare->setIndustria(null);
            }
        }

        return $this;
    }

}
