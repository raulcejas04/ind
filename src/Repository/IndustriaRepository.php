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
class IndustriaRepository extends ServiceEntityRepository {

    public function __construct(ManagerRegistry $registry) {
        parent::__construct($registry, Industria::class);
    }

    public function buscarUnoPorCUIT($cuit): Industria {
        $resultado = $this->createQueryBuilder('i')
                ->andWhere('i.CUIT = :cuit')
                ->setParameter(':cuit', $cuit)
                ->getQuery()
                ->getOneOrNullResult();
        if (is_null($resultado)) {
            return new Industria();
        } else {
            return $resultado;
        }
    }

    public function getReempadronadas($busqueda, $sortOrder, $sortColumn, $pageNum, $pageSize): array {
        return $this->createQueryBuilder('i')
                        ->andWhere('i.esConfirmado = :val')
                        ->setParameter('val', 1)
                        ->andWhere('i.CUIT LIKE :busqueda '
                                . 'OR i.razonSocial LIKE :busqueda ')
                        ->setParameter(':busqueda', '%' . $busqueda . '%')
                        ->orderBy('i.' . $sortColumn, $sortOrder)
                        ->setFirstResult($pageNum * $pageSize)
                        ->setMaxResults($pageSize)
                        ->getQuery()
                        ->getResult()
        ;
    }

    public function getCantRegistros($busqueda) {
        return $this->createQueryBuilder('i')
                        ->select('count(i.id)')
                        ->andWhere('i.esConfirmado = :val')
                        ->setParameter('val', 1)
                        ->andWhere('i.CUIT LIKE :busqueda '
                                . 'OR i.razonSocial LIKE :busqueda ')
                        ->setParameter(':busqueda', '%' . $busqueda . '%')
                        ->getQuery()
                        ->getSingleScalarResult()
        ;
    }


    public function getReempadronadasBusqueda(string $busqueda): array {
        return $this->createQueryBuilder('i')
                        ->andWhere('i.esConfirmado = :val')
                        ->setParameter('val', 1)
                        ->andWhere('i.CUIT LIKE :busqueda')
                        ->setParameter('busqueda', '%' . $busqueda . '%')
                        ->getQuery()
                        ->getResult();
        ;
    }

    public function getCantidadEmpadronadas(): ?int {
        return $this->createQueryBuilder('i')
                        ->select('count(i.id)')
                        ->andWhere('i.esConfirmado = :val')
                        ->setParameter('val', 1)
                        ->getQuery()
                        ->getSingleScalarResult();
        ;
    }

    public function getCantidadExportadoras(): ?int {

        return $this->createQueryBuilder('i')
                        ->select('count(i.id)')
                        ->join('i.lugares', 'l')
                        ->andWhere('l.esExportador = :val')
                        ->setParameter('val', 1)
                        ->getQuery()
                        ->getSingleScalarResult();
        ;
    }

    public function getCantidadHabilitacionDefinitiva(): ?int {

        return $this->createQueryBuilder('i')
                        ->select('count(i.id)')
                        ->join('i.lugares', 'l')
                        ->join('l.habilitacion', 'h')
                        ->andWhere('h.tipo = :val')
                        ->setParameter('val', 35074)
                        ->getQuery()
                        ->getSingleScalarResult();
        ;
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
