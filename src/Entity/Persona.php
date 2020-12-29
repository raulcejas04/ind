<?php

namespace App\Entity;

use App\Repository\PersonaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\AuditTrait;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=PersonaRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Persona {

    use AuditTrait;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     * @Assert\Regex(
     *     pattern="/^\d{11}$/",
     *     match=true,
     *     message="CUIL inválido.",
     *     groups={"principal","industria"}
     * )
     * @Assert\NotBlank(message="Campo requerido",groups={"principal","industria"})
     */
    private $CUIL;

    /**
     * @ORM\Column(type="string", length=50)
     *  @Assert\Regex(
     *     pattern="/^\d+\-?\s?\d+\-?\s?\d+$/",
     *     match=true,
     *     message="Teléfono inválido.",
     *     groups={"principal","industria"}
     * )
     * @Assert\NotBlank(message="Campo requerido",groups={"principal","industria"})
     */
    private $telefonoFijo;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Email(
     *     message = "El e-mail '{{ value }}' no es válido.",
     *     groups={"principal","industria"}
     * )
     * @Assert\NotBlank(message="Campo requerido",groups={"principal","industria"})
     */
    private $email;

    /**
     * @ORM\ManyToOne(targetEntity=Industria::class, inversedBy="titular")
     */
    private $industria;

    /**
     * @ORM\ManyToOne(targetEntity=Lugar::class, inversedBy="apoderado")
     */
    private $lugar;

    /**
     * @ORM\OneToMany(targetEntity=Industria::class, mappedBy="titular")
     */
    private $industriasEsTitular;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Campo requerido",groups={"principal","industria"})
     */
    private $nombre;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Campo requerido",groups={"principal","industria"})
     */
    private $apellido;

    /**
     * @ORM\Column(type="string", length=50)
     *  @Assert\Regex(
     *     pattern="/^\d+\-?\s?\d+\-?\s?\d+$/",
     *     match=true,
     *     message="Teléfono inválido.",
     *     groups={"principal","industria"}
     * )
     * @Assert\NotBlank(message="Campo requerido",groups={"principal","industria"})
     */
    private $telefonoMovil;

    /**
     * @ORM\OneToMany(targetEntity=Lugar::class, mappedBy="apoderado")
     */
    private $lugaresEsApoderado;

    public function __construct() {
        $this->industriasEsTitular = new ArrayCollection();
        $this->lugaresEsApoderado = new ArrayCollection();
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getCUIL(): ?string {
        return $this->CUIL;
    }

    public function setCUIL(string $CUIL): self {
        $this->CUIL = $CUIL;

        return $this;
    }

    public function getTelefonoFijo(): ?string {
        return $this->telefonoFijo;
    }

    public function setTelefonoFijo(string $telefonoFijo): self {
        $this->telefonoFijo = $telefonoFijo;

        return $this;
    }

    public function getEmail(): ?string {
        return $this->email;
    }

    public function setEmail(string $email): self {
        $this->email = $email;

        return $this;
    }

    public function getIndustria(): ?Industria {
        return $this->industria;
    }

    public function setIndustria(?Industria $industria): self {
        $this->industria = $industria;

        return $this;
    }

    public function getLugar(): ?Lugar {
        return $this->lugar;
    }

    public function setLugar(?Lugar $lugar): self {
        $this->lugar = $lugar;

        return $this;
    }

    /**
     * @return Collection|Industria[]
     */
    public function getIndustriasEsTitular(): Collection {
        return $this->industriasEsTitular;
    }

    public function addIndustriasEsTitular(Industria $industriasEsTitular): self {
        if (!$this->industriasEsTitular->contains($industriasEsTitular)) {
            $this->industriasEsTitular[] = $industriasEsTitular;
            $industriasEsTitular->setTitular($this);
        }

        return $this;
    }

    public function removeIndustriasEsTitular(Industria $industriasEsTitular): self {
        if ($this->industriasEsTitular->removeElement($industriasEsTitular)) {
            // set the owning side to null (unless already changed)
            if ($industriasEsTitular->getTitular() === $this) {
                $industriasEsTitular->setTitular(null);
            }
        }

        return $this;
    }

    public function getNombre(): ?string {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self {
        $this->nombre = $nombre;

        return $this;
    }

    public function getApellido(): ?string {
        return $this->apellido;
    }

    public function setApellido(string $apellido): self {
        $this->apellido = $apellido;

        return $this;
    }

    public function getTelefonoMovil(): ?string {
        return $this->telefonoMovil;
    }

    public function setTelefonoMovil(string $telefono_movil): self {
        $this->telefonoMovil = $telefono_movil;

        return $this;
    }

    /**
     * @return Collection|Lugar[]
     */
    public function getLugaresEsApoderado(): Collection {
        return $this->lugaresEsApoderado;
    }

    public function addLugaresEsApoderado(Lugar $lugaresEsApoderado): self {
        if (!$this->lugaresEsApoderado->contains($lugaresEsApoderado)) {
            $this->lugaresEsApoderado[] = $lugaresEsApoderado;
            $lugaresEsApoderado->setApoderado($this);
        }

        return $this;
    }

    public function removeLugaresEsApoderado(Lugar $lugaresEsApoderado): self {
        if ($this->lugaresEsApoderado->removeElement($lugaresEsApoderado)) {
            // set the owning side to null (unless already changed)
            if ($lugaresEsApoderado->getApoderado() === $this) {
                $lugaresEsApoderado->setApoderado(null);
            }
        }

        return $this;
    }

}
