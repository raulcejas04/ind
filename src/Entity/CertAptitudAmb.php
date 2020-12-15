<?php

namespace App\Entity;

use App\Repository\CertAptitudAmbRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\AuditTrait;

/**
 * @ORM\Entity(repositoryClass=CertAptitudAmbRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class CertAptitudAmb {

    use AuditTrait;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $numero;

    /**
     * @ORM\Column(type="date")
     */
    private $fechaOtorgamiento;

    /**
     * @ORM\ManyToOne(targetEntity=general::class, inversedBy="certAptitudAmbs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $categoria;

    /**
     * @ORM\Column(type="date")
     */
    private $fechaOtorgamientoCategoria;

    /**
     * @ORM\Column(type="date")
     */
    private $fechaVencimiento;

    /**
     * @ORM\OneToOne(targetEntity=Lugar::class, mappedBy="certAptitudAmb", cascade={"persist", "remove"})
     */
    private $lugar;

    public function getId(): ?int {
        return $this->id;
    }

    public function getNumero(): ?int {
        return $this->numero;
    }

    public function setNumero(int $numero): self {
        $this->numero = $numero;

        return $this;
    }

    public function getFechaOtorgamiento(): ?\DateTimeInterface {
        return $this->fechaOtorgamiento;
    }

    public function setFechaOtorgamiento(\DateTimeInterface $fechaOtorgamiento): self {
        $this->fechaOtorgamiento = $fechaOtorgamiento;

        return $this;
    }

    public function getCategoria(): ?general {
        return $this->categoria;
    }

    public function setCategoria(?general $categoria): self {
        $this->categoria = $categoria;

        return $this;
    }

    public function getFechaOtorgamientoCategoria(): ?\DateTimeInterface {
        return $this->fechaOtorgamientoCategoria;
    }

    public function setFechaOtorgamientoCategoria(\DateTimeInterface $fechaOtorgamientoCategoria): self {
        $this->fechaOtorgamientoCategoria = $fechaOtorgamientoCategoria;

        return $this;
    }

    public function getFechaVencimiento(): ?\DateTimeInterface {
        return $this->fechaVencimiento;
    }

    public function setFechaVencimiento(\DateTimeInterface $fechaVencimiento): self {
        $this->fechaVencimiento = $fechaVencimiento;

        return $this;
    }

    public function getLugar(): ?Lugar {
        return $this->lugar;
    }

    public function setLugar(?Lugar $lugar): self {
        $this->lugar = $lugar;

        // set (or unset) the owning side of the relation if necessary
        $newCertAptitudAmb = null === $lugar ? null : $this;
        if ($lugar->getCertAptitudAmb() !== $newCertAptitudAmb) {
            $lugar->setCertAptitudAmb($newCertAptitudAmb);
        }

        return $this;
    }

}
