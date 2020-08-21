<?php

namespace App\Entity\Admin;

use App\Repository\Admin\UsuarioRepository;
use App\Entity\Admin\Compania;
use App\Entity\Admin\Grupo;
use App\Entity\Admin\Permiso;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=UsuarioRepository::class)
 * @UniqueEntity("email",
 * message = "El e-mail {{ value }} ya esta registrado")
 * @UniqueEntity("username",
 * message = "El usuario {{ value }} ya esta registrado")
 */
class Usuario implements UserInterface {

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)     
     * @Assert\Email(
     *     message = "E-mail inválido",
     *     mode = "html5"
     * )
     *
     * @Assert\Length(
     *      min = 1,
     *      max = 180,
     *      minMessage = "Campo requerido",
     *      maxMessage = "E-mail no puede sobrepasar {{ limit }} caracteres",
     *      allowEmptyString = false
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=180)
     * @Assert\Length(
     *      min = 1,
     *      max = 180,
     *      minMessage = "Campo requerido",
     *      maxMessage = "Nombre no puede sobrepasar {{ limit }} caracteres",
     *      allowEmptyString = false
     * )
     */
    private $nombre;

    /**
     * @ORM\Column(type="string", length=180)
     * @Assert\Length(
     *      min = 1,
     *      max = 180,
     *      minMessage = "Campo requerido",
     *      maxMessage = "Apellido no puede sobrepasar {{ limit }} caracteres",
     *      allowEmptyString = false
     * )
     */
    private $apellido;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\Length(
     *      min = 1,
     *      max = 180,
     *      minMessage = "Campo requerido",
     *      maxMessage = "Nombre de usuario no puede sobrepasar {{ limit }} caracteres",
     *      allowEmptyString = false
     * )
     */
    private $username;

    /**
     * @ORM\ManyToOne(targetEntity="Compania", inversedBy="usuarios")
     */
    private $compania;

    /**
     * @ORM\ManyToMany(targetEntity="Grupo", mappedBy="usuarios")
     */
    private $grupos;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $NombreImgPerfil;

    public function __construct()
    {
        $this->grupos = new ArrayCollection();
    }
    
    

    public function getId(): ?int {
        return $this->id;
    }

    public function getEmail(): ?string {
        return $this->email;
    }

    public function setEmail(string $email): self {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string {
        return (string) $this->username;
    }

    public function setUsername(string $username): self {
        $this->username = $username;
        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array {
        $roles = $this->roles;
// guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string {
        return (string) $this->password;
    }

    public function setPassword(string $password): self {
        $this->password = $password;

        return $this;
    }

    public function getNombre(): string {
        return (string) $this->nombre;
    }

    public function setNombre(string $nombre): self {
        $this->nombre = $nombre;
        return $this;
    }

    public function getApellido(): string {
        return (string) $this->apellido;
    }

    public function setApellido(string $apellido): self {
        $this->apellido = $apellido;
        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt() {
// not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials() {
// If you store any temporary, sensitive data on the user, clear it here
// $this->plainPassword = null;
    }

    public function getCompania(): ?Compania
    {
        return $this->compania;
    }

    public function setCompania(?Compania $compania): self
    {
        $this->compania = $compania;

        return $this;
    }

    /**
     * @return Collection|Grupo[]
     */
    public function getGrupos(): Collection
    {
        return $this->grupos;
    }

    public function addGrupo(Grupo $grupo): self
    {        
        if (!$this->grupos->contains($grupo)) {
            $this->grupos[] = $grupo;
            $grupo->addUsuario($this);
        }

        return $this;
    }

    public function removeGrupo(Grupo $grupo): self
    {
        if ($this->grupos->contains($grupo)) {
            $this->grupos->removeElement($grupo);
            $grupo->removeUsuario($this);
        }

        return $this;
    }

    public function getNombreImgPerfil(): ?string
    {
        return $this->NombreImgPerfil;
    }

    public function setNombreImgPerfil(?string $NombreImgPerfil): self
    {
        $this->NombreImgPerfil = $NombreImgPerfil;

        return $this;
    }
}
