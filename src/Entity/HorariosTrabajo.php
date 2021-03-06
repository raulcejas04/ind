<?php

namespace App\Entity;

use App\Repository\HorariosTrabajoRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=HorariosTrabajoRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class HorariosTrabajo {


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
     * @ORM\ManyToOne(targetEntity=General::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $dia;

    /**
     * @ORM\Column(type="time")
     */
    private $horaInicio;

    /**
     * @ORM\Column(type="time")     
     * @Assert\GreaterThan(
     * propertyPath="horaInicio",
     * message="Hora fin debe ser mayor a hora de inicio"
     * )
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

    public function getDia(): ?General {
        return $this->dia;
    }

    public function setDia(?General $dia): self {
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
