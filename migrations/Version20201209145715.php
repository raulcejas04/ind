<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201209145715 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lugar ADD tipo_residuo_industrial_id INT DEFAULT NULL, ADD tipo_residuo_especial_id INT DEFAULT NULL, ADD corrientes_id INT DEFAULT NULL, ADD tipo_emision_gaseosa_id INT DEFAULT NULL, ADD destino_vuelco_tipo_id INT DEFAULT NULL, ADD tiene_residuos_industriales TINYINT(1) NOT NULL, ADD tiene_efluentes_liquidos TINYINT(1) NOT NULL, ADD tiene_tratamiento_previo_vuelco TINYINT(1) NOT NULL, ADD tiene_residuos_especiales TINYINT(1) NOT NULL, ADD tiene_emisiones_gaseosas TINYINT(1) NOT NULL, ADD potencia_total_utilizada INT DEFAULT NULL, ADD residuo_industrial VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAAC15CC85 FOREIGN KEY (tipo_residuo_industrial_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAACC17B082 FOREIGN KEY (tipo_residuo_especial_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAAC20D0B7DE FOREIGN KEY (corrientes_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAAC90FC0D38 FOREIGN KEY (tipo_emision_gaseosa_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAACB723FD04 FOREIGN KEY (destino_vuelco_tipo_id) REFERENCES general (id)');
        $this->addSql('CREATE INDEX IDX_4974AAAC15CC85 ON lugar (tipo_residuo_industrial_id)');
        $this->addSql('CREATE INDEX IDX_4974AAACC17B082 ON lugar (tipo_residuo_especial_id)');
        $this->addSql('CREATE INDEX IDX_4974AAAC20D0B7DE ON lugar (corrientes_id)');
        $this->addSql('CREATE INDEX IDX_4974AAAC90FC0D38 ON lugar (tipo_emision_gaseosa_id)');
        $this->addSql('CREATE INDEX IDX_4974AAACB723FD04 ON lugar (destino_vuelco_tipo_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAAC15CC85');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAACC17B082');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAAC20D0B7DE');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAAC90FC0D38');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAACB723FD04');
        $this->addSql('DROP INDEX IDX_4974AAAC15CC85 ON lugar');
        $this->addSql('DROP INDEX IDX_4974AAACC17B082 ON lugar');
        $this->addSql('DROP INDEX IDX_4974AAAC20D0B7DE ON lugar');
        $this->addSql('DROP INDEX IDX_4974AAAC90FC0D38 ON lugar');
        $this->addSql('DROP INDEX IDX_4974AAACB723FD04 ON lugar');
        $this->addSql('ALTER TABLE lugar DROP tipo_residuo_industrial_id, DROP tipo_residuo_especial_id, DROP corrientes_id, DROP tipo_emision_gaseosa_id, DROP destino_vuelco_tipo_id, DROP tiene_residuos_industriales, DROP tiene_efluentes_liquidos, DROP tiene_tratamiento_previo_vuelco, DROP tiene_residuos_especiales, DROP tiene_emisiones_gaseosas, DROP potencia_total_utilizada, DROP residuo_industrial');
    }
}
