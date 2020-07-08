<?php

namespace App\Repository;

use App\Entity\Compania;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Compania|null find($id, $lockMode = null, $lockVersion = null)
 * @method Compania|null findOneBy(array $criteria, array $orderBy = null)
 * @method Compania[]    findAll()
 * @method Compania[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompaniaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Compania::class);
    }

    // /**
    //  * @return Compania[] Returns an array of Compania objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Compania
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
