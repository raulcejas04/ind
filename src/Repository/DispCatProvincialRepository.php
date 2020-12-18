<?php

namespace App\Repository;

use App\Entity\DispCatProvincial;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DispCatProvincial|null find($id, $lockMode = null, $lockVersion = null)
 * @method DispCatProvincial|null findOneBy(array $criteria, array $orderBy = null)
 * @method DispCatProvincial[]    findAll()
 * @method DispCatProvincial[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DispCatProvincialRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DispCatProvincial::class);
    }

    // /**
    //  * @return DispCatProvincial[] Returns an array of DispCatProvincial objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DispCatProvincial
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
