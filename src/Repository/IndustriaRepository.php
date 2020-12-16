<?php

namespace App\Repository;

use App\Entity\Industria;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Industria|null find($id, $lockMode = null, $lockVersion = null)
 * @method Industria|null findOneBy(array $criteria, array $orderBy = null)
 * @method Industria[]    findAll()
 * @method Industria[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IndustriaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Industria::class);
    }

    public function buscarUnoPorCUIT($cuit): Industria {
        $resultado = $this->createQueryBuilder('i')
                        ->andWhere('i.CUIT = :cuit')
                        ->setParameter(':cuit', $cuit)
                        ->getQuery()
                        ->getOneOrNullResult();
        if(is_null($resultado)){
            return [];
        }else{
            return $resultado;
        }
    }

    // /**
    //  * @return Industria[] Returns an array of Industria objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Industria
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
