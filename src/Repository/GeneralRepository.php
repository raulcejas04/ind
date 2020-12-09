<?php

namespace App\Repository;

use App\Entity\General;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method General|null find($id, $lockMode = null, $lockVersion = null)
 * @method General|null findOneBy(array $criteria, array $orderBy = null)
 * @method General[]    findAll()
 * @method General[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GeneralRepository extends ServiceEntityRepository {

    public function __construct(ManagerRegistry $registry) {
        parent::__construct($registry, General::class);
    }

    /**
     * @return General[] Retorna un array de dias
     */
    public function traerDias() {
        return $this->createQueryBuilder('g')
                        ->andWhere('g.tipo = 1')
                        ->orderBy('g.id', 'ASC')
                        ->getQuery()
                        ->getResult()
        ;
    }

    /*
      public function findOneBySomeField($value): ?General
      {
      return $this->createQueryBuilder('g')
      ->andWhere('g.exampleField = :val')
      ->setParameter('val', $value)
      ->getQuery()
      ->getOneOrNullResult()
      ;
      }
     */
}
