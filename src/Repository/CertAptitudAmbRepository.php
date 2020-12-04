<?php

namespace App\Repository;

use App\Entity\CertAptitudAmb;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CertAptitudAmb|null find($id, $lockMode = null, $lockVersion = null)
 * @method CertAptitudAmb|null findOneBy(array $criteria, array $orderBy = null)
 * @method CertAptitudAmb[]    findAll()
 * @method CertAptitudAmb[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CertAptitudAmbRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CertAptitudAmb::class);
    }

    // /**
    //  * @return CertAptitudAmb[] Returns an array of CertAptitudAmb objects
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
    public function findOneBySomeField($value): ?CertAptitudAmb
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
