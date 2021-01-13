<?php

namespace App\Repository\AdminTRIMU;

use App\Entity\AdminTRIMU\ObjetoDomicilioTRIMU;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ObjetoDomicilioTRIMU|null find($id, $lockMode = null, $lockVersion = null)
 * @method ObjetoDomicilioTRIMU|null findOneBy(array $criteria, array $orderBy = null)
 * @method ObjetoDomicilioTRIMU[]    findAll()
 * @method ObjetoDomicilioTRIMU[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ObjetoDomicilioTRIMURepository extends ServiceEntityRepository {

    public function __construct(ManagerRegistry $registry) {
        parent::__construct($registry, ObjetoDomicilioTRIMU::class);
    }

    public function buscarUnoForTipoNumObjeto($tipoObjeto, $numObjeto) {
        return $this->createQueryBuilder('o')
                        ->andWhere('o.tipoObjeto = :tipo')
                        ->setParameter('tipo', $tipoObjeto)
                        ->andWhere('o.numObjeto = :numObjeto')
                        ->setParameter('numObjeto', $numObjeto)
                        ->getQuery()
                        ->getOneOrNullResult()
        ;
    }

    // /**
    //  * @return Contribuyente[] Returns an array of User objects
    //  */
    /*
      public function findByExampleField($value)
      {
      return $this->createQueryBuilder('u')
      ->andWhere('u.exampleField = :val')
      ->setParameter('val', $value)
      ->orderBy('u.id', 'ASC')
      ->setMaxResults(10)
      ->getQuery()
      ->getResult()
      ;
      }
     */

    /*
      public function findOneBySomeField($value): ?User
      {
      return $this->createQueryBuilder('u')
      ->andWhere('u.exampleField = :val')
      ->setParameter('val', $value)
      ->getQuery()
      ->getOneOrNullResult()
      ;
      }
     */
}
