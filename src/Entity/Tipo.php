<?php

namespace App\Entity;

use App\Repository\TipoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\General;
use App\Entity\Traits\AuditTrait;

/**
 * @ORM\Entity(repositoryClass=TipoRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Tipo {

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
    private $tipo;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $activo;

    /**
     * @ORM\OneToMany(targetEntity=General::class, mappedBy="tipo")
     */
    private $generales;

    public function __construct() {
        $this->generales = new ArrayCollection();
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getTipo(): ?string {
        return $this->tipo;
    }

    public function setTipo(string $tipo): self {
        $this->tipo = $tipo;

        return $this;
    }

    public function getActivo(): ?bool {
        return $this->activo;
    }

    public function setActivo(?bool $activo): self {
        $this->activo = $activo;

        return $this;
    }

    /**
     * @return Collection|General[]
     */
    public function getGenerales(): Collection {
        return $this->generales;
    }

    public function addGenerale(General $generale): self {
        if (!$this->generales->contains($generale)) {
            $this->generales[] = $generale;
            $generale->setTipo($this);
        }

        return $this;
    }

    public function removeGenerale(General $generale): self {
        if ($this->generales->removeElement($generale)) {
            // set the owning side to null (unless already changed)
            if ($generale->getTipo() === $this) {
                $generale->setTipo(null);
            }
        }

        return $this;
    }

}
