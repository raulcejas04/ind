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
     * @ORM\ManyToOne(targetEntity=Tipo::class, inversedBy="generales")
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

    /**
     * @ORM\OneToMany(targetEntity=Habilitacion::class, mappedBy="tipo")
     */
    private $habilitaciones;

    /**
     * @ORM\OneToMany(targetEntity=Habilitacion::class, mappedBy="rubroHabilitado")
     */
    private $rubrosHabilitados;

    /**
     * @ORM\OneToMany(targetEntity=Habilitacion::class, mappedBy="rubroPrimario")
     */
    private $rubrosPrimarios;

    /**
     * @ORM\OneToMany(targetEntity=Habilitacion::class, mappedBy="rubroSecundario")
     */
    private $rubrosSecundarios;

    /**
     * @ORM\OneToMany(targetEntity=CertAptitudAmb::class, mappedBy="categoria")
     */
    private $certAptitudAmbs;

    public function __construct()
    {
        $this->Lugares = new ArrayCollection();
        $this->habilitaciones = new ArrayCollection();
        $this->rubrosHabilitados = new ArrayCollection();
        $this->rubrosPrimarios = new ArrayCollection();
        $this->rubrosSecundarios = new ArrayCollection();
        $this->certAptitudAmbs = new ArrayCollection();
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

    /**
     * @return Collection|Habilitacion[]
     */
    public function getHabilitaciones(): Collection
    {
        return $this->habilitaciones;
    }

    public function addHabilitacione(Habilitacion $habilitacione): self
    {
        if (!$this->habilitaciones->contains($habilitacione)) {
            $this->habilitaciones[] = $habilitacione;
            $habilitacione->setTipo($this);
        }

        return $this;
    }

    public function removeHabilitacione(Habilitacion $habilitacione): self
    {
        if ($this->habilitaciones->removeElement($habilitacione)) {
            // set the owning side to null (unless already changed)
            if ($habilitacione->getTipo() === $this) {
                $habilitacione->setTipo(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Habilitacion[]
     */
    public function getRubrosHabilitados(): Collection
    {
        return $this->rubrosHabilitados;
    }

    public function addRubrosHabilitado(Habilitacion $rubrosHabilitado): self
    {
        if (!$this->rubrosHabilitados->contains($rubrosHabilitado)) {
            $this->rubrosHabilitados[] = $rubrosHabilitado;
            $rubrosHabilitado->setRubroHabilitado($this);
        }

        return $this;
    }

    public function removeRubrosHabilitado(Habilitacion $rubrosHabilitado): self
    {
        if ($this->rubrosHabilitados->removeElement($rubrosHabilitado)) {
            // set the owning side to null (unless already changed)
            if ($rubrosHabilitado->getRubroHabilitado() === $this) {
                $rubrosHabilitado->setRubroHabilitado(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Habilitacion[]
     */
    public function getRubrosPrimarios(): Collection
    {
        return $this->rubrosPrimarios;
    }

    public function addRubrosPrimario(Habilitacion $rubrosPrimario): self
    {
        if (!$this->rubrosPrimarios->contains($rubrosPrimario)) {
            $this->rubrosPrimarios[] = $rubrosPrimario;
            $rubrosPrimario->setRubroPrimario($this);
        }

        return $this;
    }

    public function removeRubrosPrimario(Habilitacion $rubrosPrimario): self
    {
        if ($this->rubrosPrimarios->removeElement($rubrosPrimario)) {
            // set the owning side to null (unless already changed)
            if ($rubrosPrimario->getRubroPrimario() === $this) {
                $rubrosPrimario->setRubroPrimario(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Habilitacion[]
     */
    public function getRubrosSecundarios(): Collection
    {
        return $this->rubrosSecundarios;
    }

    public function addRubrosSecundario(Habilitacion $rubrosSecundario): self
    {
        if (!$this->rubrosSecundarios->contains($rubrosSecundario)) {
            $this->rubrosSecundarios[] = $rubrosSecundario;
            $rubrosSecundario->setRubroSecundario($this);
        }

        return $this;
    }

    public function removeRubrosSecundario(Habilitacion $rubrosSecundario): self
    {
        if ($this->rubrosSecundarios->removeElement($rubrosSecundario)) {
            // set the owning side to null (unless already changed)
            if ($rubrosSecundario->getRubroSecundario() === $this) {
                $rubrosSecundario->setRubroSecundario(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CertAptitudAmb[]
     */
    public function getCertAptitudAmbs(): Collection
    {
        return $this->certAptitudAmbs;
    }

    public function addCertAptitudAmb(CertAptitudAmb $certAptitudAmb): self
    {
        if (!$this->certAptitudAmbs->contains($certAptitudAmb)) {
            $this->certAptitudAmbs[] = $certAptitudAmb;
            $certAptitudAmb->setCategoria($this);
        }

        return $this;
    }

    public function removeCertAptitudAmb(CertAptitudAmb $certAptitudAmb): self
    {
        if ($this->certAptitudAmbs->removeElement($certAptitudAmb)) {
            // set the owning side to null (unless already changed)
            if ($certAptitudAmb->getCategoria() === $this) {
                $certAptitudAmb->setCategoria(null);
            }
        }

        return $this;
    }
}
