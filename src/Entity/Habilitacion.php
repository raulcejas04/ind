<?php

namespace App\Entity;

use App\Repository\HabilitacionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=HabilitacionRepository::class)
 */
class Habilitacion
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
    private $expediente;

    /**
     * @ORM\Column(type="date")
     */
    private $fechaInicio;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $legajoSeH;

    /**
     * @ORM\ManyToOne(targetEntity=general::class, inversedBy="habilitaciones")
     */
    private $tipo;

    /**
     * @ORM\ManyToOne(targetEntity=general::class, inversedBy="rubrosHabilitados")
     * @ORM\JoinColumn(nullable=false)
     */
    private $rubroHabilitado;

    /**
     * @ORM\ManyToOne(targetEntity=general::class, inversedBy="rubrosPrimarios")
     */
    private $rubroPrimario;

    /**
     * @ORM\ManyToOne(targetEntity=general::class, inversedBy="rubrosSecundarios")
     */
    private $rubroSecundario;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $materiaPrima;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $productoFinal;

    /**
     * @ORM\OneToOne(targetEntity=Lugar::class, mappedBy="habilitacion", cascade={"persist", "remove"})
     */
    private $lugar;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getExpediente(): ?string
    {
        return $this->expediente;
    }

    public function setExpediente(string $expediente): self
    {
        $this->expediente = $expediente;

        return $this;
    }

    public function getFechaInicio(): ?\DateTimeInterface
    {
        return $this->fechaInicio;
    }

    public function setFechaInicio(\DateTimeInterface $fechaInicio): self
    {
        $this->fechaInicio = $fechaInicio;

        return $this;
    }

    public function getLegajoSeH(): ?string
    {
        return $this->legajoSeH;
    }

    public function setLegajoSeH(string $legajoSeH): self
    {
        $this->legajoSeH = $legajoSeH;

        return $this;
    }

    public function getTipo(): ?general
    {
        return $this->tipo;
    }

    public function setTipo(?general $tipo): self
    {
        $this->tipo = $tipo;

        return $this;
    }

    public function getRubroHabilitado(): ?general
    {
        return $this->rubroHabilitado;
    }

    public function setRubroHabilitado(?general $rubroHabilitado): self
    {
        $this->rubroHabilitado = $rubroHabilitado;

        return $this;
    }

    public function getRubroPrimario(): ?general
    {
        return $this->rubroPrimario;
    }

    public function setRubroPrimario(?general $rubroPrimario): self
    {
        $this->rubroPrimario = $rubroPrimario;

        return $this;
    }

    public function getRubroSecundario(): ?general
    {
        return $this->rubroSecundario;
    }

    public function setRubroSecundario(?general $rubroSecundario): self
    {
        $this->rubroSecundario = $rubroSecundario;

        return $this;
    }

    public function getMateriaPrima(): ?string
    {
        return $this->materiaPrima;
    }

    public function setMateriaPrima(string $materiaPrima): self
    {
        $this->materiaPrima = $materiaPrima;

        return $this;
    }

    public function getProductoFinal(): ?string
    {
        return $this->productoFinal;
    }

    public function setProductoFinal(?string $productoFinal): self
    {
        $this->productoFinal = $productoFinal;

        return $this;
    }

    public function getLugar(): ?Lugar
    {
        return $this->lugar;
    }

    public function setLugar(?Lugar $lugar): self
    {
        $this->lugar = $lugar;

        // set (or unset) the owning side of the relation if necessary
        $newHabilitacion = null === $lugar ? null : $this;
        if ($lugar->getHabilitacion() !== $newHabilitacion) {
            $lugar->setHabilitacion($newHabilitacion);
        }

        return $this;
    }
}
