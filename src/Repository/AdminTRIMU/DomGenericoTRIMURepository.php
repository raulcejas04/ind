<?php

namespace App\Repository\AdminTRIMU;

use App\Entity\AdminTRIMU\DomGenericoTRIMU;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Contribuyente|null find($id, $lockMode = null, $lockVersion = null)
 * @method Contribuyente|null findOneBy(array $criteria, array $orderBy = null)
 * @method Contribuyente[]    findAll()
 * @method Contribuyente[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DomGenericoTRIMURepository extends ServiceEntityRepository{

    public function __construct(ManagerRegistry $registry) {
        parent::__construct($registry, DomGenericoTRIMU::class);
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
