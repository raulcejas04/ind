<?php

namespace App\Entity;

use App\Repository\PersonaRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PersonaRepository::class)
 */
class Persona
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $CUIL;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $telefonoFijo;

    /**
     * @ORM\Column(type="string", length=255)
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

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCUIL(): ?string
    {
        return $this->CUIL;
    }

    public function setCUIL(string $CUIL): self
    {
        $this->CUIL = $CUIL;

        return $this;
    }

    public function getTelefonoFijo(): ?string
    {
        return $this->telefonoFijo;
    }

    public function setTelefonoFijo(string $telefonoFijo): self
    {
        $this->telefonoFijo = $telefonoFijo;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getIndustria(): ?Industria
    {
        return $this->industria;
    }

    public function setIndustria(?Industria $industria): self
    {
        $this->industria = $industria;

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
}
