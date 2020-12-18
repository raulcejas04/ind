<?php

namespace App\Entity;

use App\Repository\DispCatProvincialRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Traits\AuditTrait;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=DispCatProvincialRepository::class)
 */
class DispCatProvincial
{
    use AuditTrait;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=general::class)
     * @Assert\NotBlank(
     * message="Campo requerido.",
     * groups={"catProvincial"}
     * )
     */
    private $categoria;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Assert\NotBlank(
     * message="Campo requerido.",
     * groups={"catProvincial"}
     * )
     */
    private $numero;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Assert\LessThanOrEqual(
     * value="today UTC",
     * message="Fecha inválida",
     * groups={"catProvincial"})
     * @Assert\NotBlank(
     * message="Campo requerido.",
     * groups={"catProvincial"}
     * )
     */
    private $fechaOtorgDispProv;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategoria(): ?general
    {
        return $this->categoria;
    }

    public function setCategoria(?general $categoria): self
    {
        $this->categoria = $categoria;

        return $this;
    }

    public function getNumero(): ?string
    {
        return $this->numero;
    }

    public function setNumero(?string $numero): self
    {
        $this->numero = $numero;

        return $this;
    }

    public function getFechaOtorgDispProv(): ?\DateTimeInterface
    {
        return $this->fechaOtorgDispProv;
    }

    public function setFechaOtorgDispProv(?\DateTimeInterface $fechaOtorgDispProv): self
    {
        $this->fechaOtorgDispProv = $fechaOtorgDispProv;

        return $this;
    }
}
