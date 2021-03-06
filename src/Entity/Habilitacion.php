<?php

namespace App\Entity;

use App\Repository\HabilitacionRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\AuditTrait;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=HabilitacionRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Habilitacion {

    use AuditTrait;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(
     * groups={"expediente"},
     * message="Campo requerido."
     * )
     * @Assert\Regex(
     *     pattern="/^\d\-4004\-\d+\/\d{4}\(?\d?\)?$/",
     *     match=true,
     *     message="Número de expediente inválido.",
     *     groups={"expediente"}
     * )
     */
    private $expediente;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank(
     * groups={"definitiva"},
     * message="Campo requerido")
     * @Assert\LessThanOrEqual(
     * value="today UTC",
     * message="Fecha inválida",
     * groups={"definitiva"})
     */
    private $fechaInicio;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     * @Assert\Regex(
     *     pattern="/^\d{1,6}$/",
     *     match=true,
     *     message="Número de legajo inválido.",
     *     groups={"habilitacion"})
     * )
     */
    private $legajoSeH;

    /**
     * @ORM\ManyToOne(targetEntity=General::class, inversedBy="habilitaciones")
     * @Assert\NotBlank(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     */
    private $tipo;

    /**
     * @ORM\ManyToOne(targetEntity=General::class, inversedBy="rubrosHabilitados")
     * @ORM\JoinColumn(nullable=false)
     * @Assert\NotNull(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     */
    private $rubroHabilitado;

    /**
     * @ORM\ManyToOne(targetEntity=General::class, inversedBy="rubrosPrimarios")
     * @Assert\NotNull(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     */
    private $rubroPrimario;

    /**
     * @ORM\ManyToOne(targetEntity=General::class, inversedBy="rubrosSecundarios")
     * @Assert\NotNull(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     */
    private $rubroSecundario;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     */
    private $materiaPrima;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     */
    private $productoFinal;

    /**
     * @ORM\OneToOne(targetEntity=Lugar::class, mappedBy="habilitacion")
     */
    private $lugar;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     */
    private $rubroEspecifico;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(
     * groups={"habilitacion"},
     * message="Campo requerido.")
     */
    private $insumos;

    public function getId(): ?int {
        return $this->id;
    }

    public function getExpediente(): ?string {
        return $this->expediente;
    }

    public function setExpediente(string $expediente): self {
        $this->expediente = $expediente;

        return $this;
    }

    public function getFechaInicio(): ?\DateTimeInterface {
        return $this->fechaInicio;
    }

    public function setFechaInicio(?\DateTimeInterface $fechaInicio): self {
        $this->fechaInicio = $fechaInicio;

        return $this;
    }

    public function getLegajoSeH(): ?string {
        return $this->legajoSeH;
    }

    public function setLegajoSeH(string $legajoSeH): self {
        $this->legajoSeH = $legajoSeH;

        return $this;
    }

    public function getTipo(): ?General {
        return $this->tipo;
    }

    public function setTipo(?General $tipo): self {
        $this->tipo = $tipo;

        return $this;
    }

    public function getRubroHabilitado(): ?General {
        return $this->rubroHabilitado;
    }

    public function setRubroHabilitado(?General $rubroHabilitado): self {
        $this->rubroHabilitado = $rubroHabilitado;

        return $this;
    }

    public function getRubroPrimario(): ?General {
        return $this->rubroPrimario;
    }

    public function setRubroPrimario(?General $rubroPrimario): self {
        $this->rubroPrimario = $rubroPrimario;

        return $this;
    }

    public function getRubroSecundario(): ?General {
        return $this->rubroSecundario;
    }

    public function setRubroSecundario(?General $rubroSecundario): self {
        $this->rubroSecundario = $rubroSecundario;

        return $this;
    }

    public function getMateriaPrima(): ?string {
        return $this->materiaPrima;
    }

    public function setMateriaPrima(string $materiaPrima): self {
        $this->materiaPrima = $materiaPrima;

        return $this;
    }

    public function getProductoFinal(): ?string {
        return $this->productoFinal;
    }

    public function setProductoFinal(?string $productoFinal): self {
        $this->productoFinal = $productoFinal;

        return $this;
    }

    public function getLugar(): ?Lugar {
        return $this->lugar;
    }

    public function setLugar(?Lugar $lugar): self {
        $this->lugar = $lugar;

        // set (or unset) the owning side of the relation if necessary
        $newHabilitacion = null === $lugar ? null : $this;
        if ($lugar->getHabilitacion() !== $newHabilitacion) {
            $lugar->setHabilitacion($newHabilitacion);
        }

        return $this;
    }

    public function getRubroEspecifico(): ?string {
        return $this->rubroEspecifico;
    }

    public function setRubroEspecifico(string $rubroEspecifico): self {
        $this->rubroEspecifico = $rubroEspecifico;

        return $this;
    }

    public function getInsumos(): ?string {
        return $this->insumos;
    }

    public function setInsumos(string $insumos): self {
        $this->insumos = $insumos;

        return $this;
    }

}
