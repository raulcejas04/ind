<?php

namespace App\Entity;

use App\Repository\HorariosTrabajoRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\AuditTrait;

/**
 * @ORM\Entity(repositoryClass=HorariosTrabajoRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class HorariosTrabajo {

    use AuditTrait;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=lugar::class, inversedBy="horariosTrabajo")
     * @ORM\JoinColumn(nullable=false)
     */
    private $lugar;

    /**
     * @ORM\ManyToOne(targetEntity=general::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $dia;

    /**
     * @ORM\Column(type="time")
     */
    private $horaInicio;

    /**
     * @ORM\Column(type="time")
     */
    private $horaFin;

    public function getId(): ?int {
        return $this->id;
    }

    public function getLugar(): ?lugar {
        return $this->lugar;
    }

    public function setLugar(?lugar $lugar): self {
        $this->lugar = $lugar;

        return $this;
    }

    public function getDia(): ?general {
        return $this->dia;
    }

    public function setDia(?general $dia): self {
        $this->dia = $dia;

        return $this;
    }

    public function getHoraInicio(): ?\DateTimeInterface {
        return $this->horaInicio;
    }

    public function setHoraInicio(\DateTimeInterface $horaInicio): self {
        $this->horaInicio = $horaInicio;

        return $this;
    }

    public function getHoraFin(): ?\DateTimeInterface {
        return $this->horaFin;
    }

    public function setHoraFin(\DateTimeInterface $horaFin): self {
        $this->horaFin = $horaFin;

        return $this;
    }
   
}
