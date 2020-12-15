<?php

namespace App\Entity;

use App\Repository\LugarRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\AuditTrait;

/**
 * @ORM\Entity(repositoryClass=LugarRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Lugar {

    use AuditTrait;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity=general::class, mappedBy="lugar")
     */
    private $tipo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nombre;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $qPersonal;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $qPersonalFemenino;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $superficieTotal;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $siperficieCubierta;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $superficieLibre;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $esExportador;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $ceritifionAptitud;
    private $potenciaUtilizada;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $CURT;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $fechaUltimaInpeccion;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $tieneDenuncia;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $denunciasEspecificaciones;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $dispocisionProvincial;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nroDispProv;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $fechaOtorgDispProv;

    /**
     * @ORM\OneToOne(targetEntity=Habilitacion::class, inversedBy="lugar", cascade={"persist", "remove"})
     */
    private $habilitacion;

    /**
     * @ORM\OneToOne(targetEntity=CertAptitudAmb::class, inversedBy="lugar", cascade={"persist", "remove"})
     */
    private $certAptitudAmb;

    /**
     * @ORM\ManyToOne(targetEntity=Industria::class, inversedBy="lugares")
     * @ORM\JoinColumn(nullable=false)
     */
    private $industria;

    /**
     * @ORM\ManyToMany(targetEntity=General::class)
     * @ORM\JoinTable(name="lugares_paises")
     */
    private $paises;

    /**
     * @ORM\Column(type="boolean")
     */
    private $esDeposito;

    /**
     * @ORM\Column(type="boolean")
     */
    private $esProduccion;

    /**
     * @ORM\Column(type="integer")
     */
    private $qPersonalTrans;

    /**
     * @ORM\Column(type="integer")
     */
    private $qPersonalDiscapacidad;

    /**
     * @ORM\Column(type="integer")
     */
    private $qPersonalResidenteAvellaneda;

    /**
     * @ORM\ManyToOne(targetEntity=domicilio::class, inversedBy="lugares")
     * @ORM\JoinColumn(nullable=false)
     */
    private $domicilio;

    /**
     * @ORM\ManyToOne(targetEntity=Persona::class, inversedBy="lugaresEsApoderado")
     * @ORM\JoinColumn(nullable=false)
     */
    private $apoderado;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $numeroDecreto;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tieneResiduosIndustriales;

    /**
     * @ORM\ManyToOne(targetEntity=general::class, inversedBy="lugaresResiduoIndustrial")
     */
    private $tipoResiduoIndustrial;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tieneEfluentesLiquidos;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tieneTratamientoPrevioVuelco;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tieneResiduosEspeciales;

    /**
     * @ORM\ManyToOne(targetEntity=general::class, inversedBy="lugaresResiduosEspeciales")
     */
    private $tipoResiduoEspecial;

    /**
     * @ORM\ManyToOne(targetEntity=general::class)
     */
    private $corrientes;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tieneEmisionesGaseosas;

    /**
     * @ORM\ManyToOne(targetEntity=general::class)
     */
    private $tipoEmisionGaseosa;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $potenciaTotalUtilizada;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $residuoIndustrial;

    /**
     * @ORM\ManyToOne(targetEntity=general::class)
     */
    private $destinoVuelcoTipo;

    /**
     * @ORM\OneToMany(targetEntity=HorariosTrabajo::class, mappedBy="lugar", orphanRemoval=true)
     */
    private $horariosTrabajo;

    /**
     * @ORM\Column(type="boolean")
     */
    private $horarioRotativo;

    public function __construct() {
        $this->industria = new ArrayCollection();
        $this->tipo = new ArrayCollection();
        $this->paises = new ArrayCollection();
        $this->horariosTrabajo = new ArrayCollection();
    }

    public function getId(): ?int {
        return $this->id;
    }

    /**
     * @return Collection|general[]
     */
    public function getTipo(): Collection {
        return $this->tipo;
    }

    public function addTipo(general $tipo): self {
        if (!$this->tipo->contains($tipo)) {
            $this->tipo[] = $tipo;
            $tipo->setLugar($this);
        }

        return $this;
    }

    public function removeTipo(general $tipo): self {
        if ($this->tipo->removeElement($tipo)) {
            // set the owning side to null (unless already changed)
            if ($tipo->getLugar() === $this) {
                $tipo->setLugar(null);
            }
        }

        return $this;
    }

    public function getNobre(): ?string {
        return $this->nobre;
    }

    public function setNobre(string $nobre): self {
        $this->nobre = $nobre;

        return $this;
    }

    public function getQPersonal(): ?int {
        return $this->qPersonal;
    }

    public function setQPersonal(?int $qPersonal): self {
        $this->qPersonal = $qPersonal;

        return $this;
    }

    public function getQPersonalFemenino(): ?int {
        return $this->qPersonalFemenino;
    }

    public function setQPersonalFemenino(?int $qPersonalFemenino): self {
        $this->qPersonalFemenino = $qPersonalFemenino;

        return $this;
    }

    public function getSuperficieTotal(): ?int {
        return $this->superficieTotal;
    }

    public function setSuperficieTotal(?int $superficieTotal): self {
        $this->superficieTotal = $superficieTotal;

        return $this;
    }

    public function getSiperficieCubierta(): ?int {
        return $this->siperficieCubierta;
    }

    public function setSiperficieCubierta(?int $siperficieCubierta): self {
        $this->siperficieCubierta = $siperficieCubierta;

        return $this;
    }

    public function getSuperficieLibre(): ?int {
        return $this->superficieLibre;
    }

    public function setSuperficieLibre(?int $superficieLibre): self {
        $this->superficieLibre = $superficieLibre;

        return $this;
    }

    public function getEsExportador(): ?bool {
        return $this->esExportador;
    }

    public function setEsExportador(?bool $esExportador): self {
        $this->esExportador = $esExportador;

        return $this;
    }

    public function getCeritifionAptitud(): ?int {
        return $this->ceritifionAptitud;
    }

    public function setCeritifionAptitud(?int $ceritifionAptitud): self {
        $this->ceritifionAptitud = $ceritifionAptitud;

        return $this;
    }

    public function getPotenciaUtilizada(): ?int {
        return $this->potenciaUtilizada;
    }

    public function setPotenciaUtilizada(?int $potenciaUtilizada): self {
        $this->potenciaUtilizada = $potenciaUtilizada;

        return $this;
    }

    public function getCURT(): ?string {
        return $this->CURT;
    }

    public function setCURT(?string $CURT): self {
        $this->CURT = $CURT;

        return $this;
    }

    public function getFechaUltimaInpeccion(): ?\DateTimeInterface {
        return $this->fechaUltimaInpeccion;
    }

    public function setFechaUltimaInpeccion(?\DateTimeInterface $fechaUltimaInpeccion): self {
        $this->fechaUltimaInpeccion = $fechaUltimaInpeccion;

        return $this;
    }

    public function getTieneDenuncia(): ?bool {
        return $this->tieneDenuncia;
    }

    public function setTieneDenuncia(?bool $tieneDenuncia): self {
        $this->tieneDenuncia = $tieneDenuncia;

        return $this;
    }

    public function getDenunciasEspecificaciones(): ?string {
        return $this->denunciasEspecificaciones;
    }

    public function setDenunciasEspecificaciones(?string $denunciasEspecificaciones): self {
        $this->denunciasEspecificaciones = $denunciasEspecificaciones;

        return $this;
    }

    public function getDispocisionProvincial(): ?bool {
        return $this->dispocisionProvincial;
    }

    public function setDispocisionProvincial(?bool $dispocisionProvincial): self {
        $this->dispocisionProvincial = $dispocisionProvincial;

        return $this;
    }

    public function getNroDispProv(): ?int {
        return $this->nroDispProv;
    }

    public function setNroDispProv(?int $nroDispProv): self {
        $this->nroDispProv = $nroDispProv;

        return $this;
    }

    public function getFechaOtorgDispProv(): ?\DateTimeInterface {
        return $this->fechaOtorgDispProv;
    }

    public function setFechaOtorgDispProv(?\DateTimeInterface $fechaOtorgDispProv): self {
        $this->fechaOtorgDispProv = $fechaOtorgDispProv;

        return $this;
    }

    public function getHabilitacion(): ?habilitacion {
        return $this->habilitacion;
    }

    public function setHabilitacion(?habilitacion $habilitacion): self {
        $this->habilitacion = $habilitacion;

        return $this;
    }

    public function getCertAptitudAmb(): ?certAptitudAmb {
        return $this->certAptitudAmb;
    }

    public function setCertAptitudAmb(?certAptitudAmb $certAptitudAmb): self {
        $this->certAptitudAmb = $certAptitudAmb;

        return $this;
    }

    public function getIndustria(): ?industria {
        return $this->industria;
    }

    public function setIndustria(?industria $industria): self {
        $this->industria = $industria;

        return $this;
    }

    /**
     * @return Collection|general[]
     */
    public function getPaises(): Collection {
        return $this->paises;
    }

    public function addPaise(general $paise): self {
        if (!$this->paises->contains($paise)) {
            $this->paises[] = $paise;
        }

        return $this;
    }

    public function removePaise(general $paise): self {
        $this->paises->removeElement($paise);

        return $this;
    }

    public function removeResiduo(general $residuo): self {
        if ($this->residuos->removeElement($residuo)) {
            // set the owning side to null (unless already changed)
            if ($residuo->getLugar() === $this) {
                $residuo->setLugar(null);
            }
        }

        return $this;
    }

    public function getEsDeposito(): ?bool {
        return $this->esDeposito;
    }

    public function setEsDeposito(bool $esDeposito): self {
        $this->esDeposito = $esDeposito;

        return $this;
    }

    public function getEsProduccion(): ?bool {
        return $this->esProduccion;
    }

    public function setEsProduccion(bool $esProduccion): self {
        $this->esProduccion = $esProduccion;

        return $this;
    }

    public function getQPersonalTrans(): ?int {
        return $this->qPersonalTrans;
    }

    public function setQPersonalTrans(int $qPersonalTrans): self {
        $this->qPersonalTrans = $qPersonalTrans;

        return $this;
    }

    public function getQPersonalDiscapacidad(): ?int {
        return $this->qPersonalDiscapacidad;
    }

    public function setQPersonalDiscapacidad(int $qPersonalDiscapacidad): self {
        $this->qPersonalDiscapacidad = $qPersonalDiscapacidad;

        return $this;
    }

    public function getQPersonalResidenteAvellaneda(): ?int {
        return $this->qPersonalResidenteAvellaneda;
    }

    public function setQPersonalResidenteAvellaneda(int $qPersonalResidenteAvellaneda): self {
        $this->qPersonalResidenteAvellaneda = $qPersonalResidenteAvellaneda;

        return $this;
    }

    public function getDomicilio(): ?domicilio {
        return $this->domicilio;
    }

    public function setDomicilio(?domicilio $domicilio): self {
        $this->domicilio = $domicilio;

        return $this;
    }

    public function getApoderado(): ?persona {
        return $this->apoderado;
    }

    public function setApoderado(?persona $apoderado): self {
        $this->apoderado = $apoderado;

        return $this;
    }

    public function getNumeroDecreto(): ?string {
        return $this->numeroDecreto;
    }

    public function setNumeroDecreto(string $numeroDecreto): self {
        $this->numeroDecreto = $numeroDecreto;

        return $this;
    }

    public function getTieneResiduosIndustriales(): ?bool {
        return $this->tieneResiduosIndustriales;
    }

    public function setTieneResiduosIndustriales(bool $tieneResiduosIndustriales): self {
        $this->tieneResiduosIndustriales = $tieneResiduosIndustriales;

        return $this;
    }

    public function getTipoResiduoIndustrial(): ?general {
        return $this->tipoResiduoIndustrial;
    }

    public function setTipoResiduoIndustrial(?general $tipoResiduoIndustrial): self {
        $this->tipoResiduoIndustrial = $tipoResiduoIndustrial;

        return $this;
    }

    public function getTieneEfluentesLiquidos(): ?bool {
        return $this->tieneEfluentesLiquidos;
    }

    public function setTieneEfluentesLiquidos(bool $tieneEfluentesLiquidos): self {
        $this->tieneEfluentesLiquidos = $tieneEfluentesLiquidos;

        return $this;
    }

    public function getTieneTratamientoPrevioVuelco(): ?bool {
        return $this->tieneTratamientoPrevioVuelco;
    }

    public function setTieneTratamientoPrevioVuelco(bool $tieneTratamientoPrevioVuelco): self {
        $this->tieneTratamientoPrevioVuelco = $tieneTratamientoPrevioVuelco;

        return $this;
    }

    public function getTieneResiduosEspeciales(): ?bool {
        return $this->tieneResiduosEspeciales;
    }

    public function setTieneResiduosEspeciales(bool $tieneResiduosEspeciales): self {
        $this->tieneResiduosEspeciales = $tieneResiduosEspeciales;

        return $this;
    }

    public function getTipoResiduoEspecial(): ?general {
        return $this->tipoResiduoEspecial;
    }

    public function setTipoResiduoEspecial(?general $tipoResiduoEspecial): self {
        $this->tipoResiduoEspecial = $tipoResiduoEspecial;

        return $this;
    }

    public function getCorrientes(): ?general {
        return $this->corrientes;
    }

    public function setCorrientes(?general $corrientes): self {
        $this->corrientes = $corrientes;

        return $this;
    }

    public function getTieneEmisionesGaseosas(): ?bool {
        return $this->tieneEmisionesGaseosas;
    }

    public function setTieneEmisionesGaseosas(bool $tieneEmisionesGaseosas): self {
        $this->tieneEmisionesGaseosas = $tieneEmisionesGaseosas;

        return $this;
    }

    public function getTipoEmisionGaseosa(): ?general {
        return $this->tipoEmisionGaseosa;
    }

    public function setTipoEmisionGaseosa(?general $tipoEmisionGaseosa): self {
        $this->tipoEmisionGaseosa = $tipoEmisionGaseosa;

        return $this;
    }

    public function getPotenciaTotalUtilizada(): ?int {
        return $this->potenciaTotalUtilizada;
    }

    public function setPotenciaTotalUtilizada(?int $potenciaTotalUtilizada): self {
        $this->potenciaTotalUtilizada = $potenciaTotalUtilizada;

        return $this;
    }

    public function getResiduoIndustrial(): ?string {
        return $this->residuoIndustrial;
    }

    public function setResiduoIndustrial(?string $residuoIndustrial): self {
        $this->residuoIndustrial = $residuoIndustrial;

        return $this;
    }

    public function getDestinoVuelcoTipo(): ?general {
        return $this->destinoVuelcoTipo;
    }

    public function setDestinoVuelcoTipo(?general $destinoVuelcoTipo): self {
        $this->destinoVuelcoTipo = $destinoVuelcoTipo;

        return $this;
    }

    /**
     * @return Collection|HorariosTrabajo[]
     */
    public function getHorariosTrabajo(): Collection {
        return $this->horariosTrabajo;
    }

    public function addHorariosTrabajo(HorariosTrabajo $horariosTrabajo): self {
        if (!$this->horariosTrabajo->contains($horariosTrabajo)) {
            $this->horariosTrabajo[] = $horariosTrabajo;
            $horariosTrabajo->setLugar($this);
        }

        return $this;
    }

    public function removeHorariosTrabajo(HorariosTrabajo $horariosTrabajo): self {
        if ($this->horariosTrabajo->removeElement($horariosTrabajo)) {
            // set the owning side to null (unless already changed)
            if ($horariosTrabajo->getLugar() === $this) {
                $horariosTrabajo->setLugar(null);
            }
        }

        return $this;
    }

    public function getHorarioRotativo(): ?bool {
        return $this->horarioRotativo;
    }

    public function setHorarioRotativo(bool $horarioRotativo): self {
        $this->horarioRotativo = $horarioRotativo;

        return $this;
    }

}
