<?php

namespace App\Repository;

use App\Entity\Lugar;
use App\Entity\Industria;
use App\Entity\Domicilio;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Lugar|null find($id, $lockMode = null, $lockVersion = null)
 * @method Lugar|null findOneBy(array $criteria, array $orderBy = null)
 * @method Lugar[]    findAll()
 * @method Lugar[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LugarRepository extends ServiceEntityRepository {

    public function __construct(ManagerRegistry $registry) {
        parent::__construct($registry, Lugar::class);
    }

    public function validarDireccion($fields) {
        return $this->createQueryBuilder('l')
                        ->join('l.domicilio', 'd')
                        ->join('l.industria', 'i')
                        ->where('d.calleAlternativa = :calleAlternativa')
                        ->andWhere('i.id = :idIndustria')
                        ->andWhere('d.puerta = :numero')
                        ->setParameter(":idIndustria", $fields["industria"]->getId())
                        ->setParameter('calleAlternativa', $fields["domicilio"]->getCalleAlternativa())
                        ->setParameter('numero', $fields["domicilio"]->getPuerta())
                        ->getQuery()
                        ->getResult()
        ;
    }

    public function getCantHabilitados(): ?int {

        return $this->createQueryBuilder('l')
                        ->select('count(l.id)')
                        ->join('l.industria', 'i')
                        ->andWhere('i.esConfirmado = :esConfirmado')
                        ->setParameter('esConfirmado', 1)
                        ->andWhere('l.habilitacion IS NOT NULL')
                        ->getQuery()
                        ->getSingleScalarResult();
        ;
    }

    public function getCantDeshabilitados(): ?int {

        return $this->createQueryBuilder('l')
                        ->select('count(l.id)')
                        ->join('l.industria', 'i')
                        ->andWhere('i.esConfirmado = :esConfirmado')
                        ->setParameter('esConfirmado', 1)
                        ->andWhere('l.habilitacion IS NULL')
                        ->getQuery()
                        ->getSingleScalarResult();
        ;
    }

    // /**
    //  * @return Lugar[] Returns an array of Lugar objects
    //  */
    /*
      public function findByExampleField($value)
      {
      return $this->createQueryBuilder('l')
      ->andWhere('l.exampleField = :val')
      ->setParameter('val', $value)
      ->orderBy('l.id', 'ASC')
      ->setMaxResults(10)
      ->getQuery()
      ->getResult()
      ;
      }
     */

    /*
      public function findOneBySomeField($value): ?Lugar
      {
      return $this->createQueryBuilder('l')
      ->andWhere('l.exampleField = :val')
      ->setParameter('val', $value)
      ->getQuery()
      ->getOneOrNullResult()
      ;
      }
     */
}
