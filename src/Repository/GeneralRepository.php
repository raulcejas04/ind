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

    public function buscarItemsPorTipo($tipo): array {
        return $this->createQueryBuilder('g')
                        ->andWhere('g.tipo = :tipo')
                        ->setParameter(':tipo', $tipo)
                        ->orderBy('g.descripcion', 'ASC')
                        ->getQuery()
                        ->getResult();
    }

    public function buscarItems($busqueda, $tipo): array {
        return $this->createQueryBuilder('g')
                        ->andWhere('g.tipo = :tipo')
                        ->andWhere('g.descripcion LIKE :busqueda ')
                        ->orWhere('g.descripcion_corta LIKE :busqueda ')
                        ->setParameter(':busqueda', '%' . $busqueda . '%')
                        ->setParameter(':tipo', $tipo)
                        ->orderBy('g.descripcion', 'ASC')
                        ->getQuery()
                        ->getResult();
    }

    public function buscarDiasOrdenados() {
        return $this->createQueryBuilder('g')
                        ->join('g.tipo', 't')
                        ->where('t.tipo = :tipo')
                        ->setParameter(':tipo', "Dias")
                        ->orderBy('g.id', 'ASC')
                        ->getQuery()
                        ->getResult();
    }

    public function getCalles() {
        return $this->createQueryBuilder('g')
                        ->where('g.tipo = 5')
                        ->orderBy('g.descripcion', 'ASC')
                        ->groupBy('g.descripcion')
                        ->getQuery()
                        ->getResult();
        
       /* return $this->createQueryBuilder('g')
                        ->where('g.tipo = 5')
                        ->orderBy('g.descripcion', 'ASC')
                        ->groupBy('g.descripcion')
                        ->getQuery()
                        ->getResult();*/
    }

    // /**
    //  * @return General[] Returns an array of General objects
    //  */
    /*
      public function findByExampleField($value)
      {
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
