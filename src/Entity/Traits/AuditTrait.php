<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Admin\Usuario;
use Doctrine\ORM\Event\PreUpdateEventArgs;

/**
 * @ORM\HasLifecycleCallbacks()
 * */
trait AuditTrait {

    /**
     * @ORM\OneToOne(targetEntity=Usuario::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false, name="creadoPor")
     */
    private $creadoPor;

    /**
     * @ORM\Column(type="datetime", name="creadoEn")
     */
    private $creadoEn;

    /**
     * @ORM\OneToOne(targetEntity=Usuario::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true, name="modificadoPor")
     */
    private $modificadoPor;

    /**
     * @ORM\Column(type="datetime", nullable=true, name="modificadoEn")
     */
    private $modificadoEn;

    /**
     * @ORM\OneToOne(targetEntity=Usuario::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true, name="eliminadoPor")
     */
    private $eliminadoPor;

    /**
     * @ORM\Column(type="datetime", nullable=true, name="eliminadoEn")
     */
    private $eliminadoEn;

    public function getCreadoPor(): ?Usuario {
        return $this->creadoPor;
    }

    public function setCreadoPor(Usuario $creadoPor): self {
        $this->creadoPor = $creadoPor;

        return $this;
    }

    public function getCreadoEn(): ?\DateTimeInterface {
        return $this->creadoEn;
    }

    /**
     *  @ORM\PrePersist
     */
    public function setCreadoEn() {
        $this->creadoEn = new \DateTime();
    }

    public function getModificadoPor(): ?Usuario {
        return $this->modificadoPor;
    }

    public function setModificadoPor(?Usuario $modificadoPor): self {
        $this->modificadoPor = $modificadoPor;

        return $this;
    }

    public function getModificadoEn(): ?\DateTimeInterface {
        return $this->modificadoEn;
    }

    /**
     *  @ORM\PreUpdate
     */
    public function setModificadoEn(PreUpdateEventArgs $event) {

        $this->modificadoEn = new \DateTime();
    }

    public function getEliminadoPor(): ?Usuario {
        return $this->eliminadoPor;
    }

    public function setEliminadoPor(?Usuario $eliminadoPor): self {
        $this->eliminadoPor = $eliminadoPor;
    }

    public function getEliminadoEn(): ?\DateTimeInterface {
        return $this->eliminadoEn;
    }

    /**
     *  @ORM\PreRemove
     */
    public function setEliminadoEn() {
        $this->eliminadoEn = new \DateTime();
    }

}
