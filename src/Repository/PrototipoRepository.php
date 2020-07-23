<?php

namespace App\Repository;

use App\Entity\Prototipo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Prototipo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Prototipo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Prototipo[]    findAll()
 * @method Prototipo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrototipoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Prototipo::class);
    }

    // /**
    //  * @return Prototipo[] Returns an array of Prototipo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Prototipo
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
