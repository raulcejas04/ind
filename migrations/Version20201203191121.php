<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201203191121 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cert_aptitud_amb (id INT AUTO_INCREMENT NOT NULL, categoria_id INT NOT NULL, numero INT NOT NULL, fecha_otorgamiento DATE NOT NULL, fecha_otorgamiento_categoria DATE NOT NULL, fecha_vencimiento DATE NOT NULL, INDEX IDX_313EDA5C3397707A (categoria_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE domicilio (id INT AUTO_INCREMENT NOT NULL, industria_id INT DEFAULT NULL, lugar_id INT DEFAULT NULL, calle VARCHAR(255) NOT NULL, puerta VARCHAR(50) NOT NULL, piso_dpto VARCHAR(50) DEFAULT NULL, cp VARCHAR(20) NOT NULL, INDEX IDX_9B942ED15C1E58A1 (industria_id), INDEX IDX_9B942ED1B5A3803B (lugar_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE habilitacion (id INT AUTO_INCREMENT NOT NULL, tipo_id INT DEFAULT NULL, rubro_habilitado_id INT NOT NULL, rubro_primario_id INT DEFAULT NULL, rubro_secundario_id INT DEFAULT NULL, expediente VARCHAR(255) NOT NULL, fecha_inicio DATE NOT NULL, legajo_se_h VARCHAR(255) NOT NULL, materia_prima VARCHAR(255) NOT NULL, producto_final VARCHAR(255) DEFAULT NULL, INDEX IDX_6A72484EA9276E6C (tipo_id), INDEX IDX_6A72484E9910D1AB (rubro_habilitado_id), INDEX IDX_6A72484EE8710899 (rubro_primario_id), INDEX IDX_6A72484EC80377B1 (rubro_secundario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lugar (id INT AUTO_INCREMENT NOT NULL, habilitacion_id INT DEFAULT NULL, cert_aptitud_amb_id INT DEFAULT NULL, nobre VARCHAR(255) NOT NULL, q_personal INT DEFAULT NULL, q_personal_femenino INT DEFAULT NULL, superficie_total INT DEFAULT NULL, siperficie_cubierta INT DEFAULT NULL, superficie_libre INT DEFAULT NULL, es_exportador TINYINT(1) DEFAULT NULL, ceritifion_aptitud INT DEFAULT NULL, potencia_utilizada INT DEFAULT NULL, curt VARCHAR(255) DEFAULT NULL, fecha_ultima_inpeccion DATE DEFAULT NULL, tiene_denuncia TINYINT(1) DEFAULT NULL, denuncias_especificaciones LONGTEXT DEFAULT NULL, dispocision_provincial TINYINT(1) DEFAULT NULL, nro_disp_prov INT DEFAULT NULL, fecha_otorg_disp_prov DATE DEFAULT NULL, UNIQUE INDEX UNIQ_4974AAAC9AEEB08D (habilitacion_id), UNIQUE INDEX UNIQ_4974AAACB95122EB (cert_aptitud_amb_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lugar_general (lugar_id INT NOT NULL, general_id INT NOT NULL, INDEX IDX_6108DC3BB5A3803B (lugar_id), INDEX IDX_6108DC3BD0E2C4F1 (general_id), PRIMARY KEY(lugar_id, general_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE persona (id INT AUTO_INCREMENT NOT NULL, industria_id INT DEFAULT NULL, lugar_id INT DEFAULT NULL, cuil VARCHAR(20) NOT NULL, telefono_fijo VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL, INDEX IDX_51E5B69B5C1E58A1 (industria_id), INDEX IDX_51E5B69BB5A3803B (lugar_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cert_aptitud_amb ADD CONSTRAINT FK_313EDA5C3397707A FOREIGN KEY (categoria_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE domicilio ADD CONSTRAINT FK_9B942ED15C1E58A1 FOREIGN KEY (industria_id) REFERENCES industria (id)');
        $this->addSql('ALTER TABLE domicilio ADD CONSTRAINT FK_9B942ED1B5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('ALTER TABLE habilitacion ADD CONSTRAINT FK_6A72484EA9276E6C FOREIGN KEY (tipo_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE habilitacion ADD CONSTRAINT FK_6A72484E9910D1AB FOREIGN KEY (rubro_habilitado_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE habilitacion ADD CONSTRAINT FK_6A72484EE8710899 FOREIGN KEY (rubro_primario_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE habilitacion ADD CONSTRAINT FK_6A72484EC80377B1 FOREIGN KEY (rubro_secundario_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAAC9AEEB08D FOREIGN KEY (habilitacion_id) REFERENCES habilitacion (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAACB95122EB FOREIGN KEY (cert_aptitud_amb_id) REFERENCES cert_aptitud_amb (id)');
        $this->addSql('ALTER TABLE lugar_general ADD CONSTRAINT FK_6108DC3BB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lugar_general ADD CONSTRAINT FK_6108DC3BD0E2C4F1 FOREIGN KEY (general_id) REFERENCES general (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE persona ADD CONSTRAINT FK_51E5B69B5C1E58A1 FOREIGN KEY (industria_id) REFERENCES industria (id)');
        $this->addSql('ALTER TABLE persona ADD CONSTRAINT FK_51E5B69BB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('ALTER TABLE general ADD domicilio_id INT DEFAULT NULL, ADD lugar_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE general ADD CONSTRAINT FK_CE29364A166FC4DD FOREIGN KEY (domicilio_id) REFERENCES domicilio (id)');
        $this->addSql('ALTER TABLE general ADD CONSTRAINT FK_CE29364AB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('CREATE INDEX IDX_CE29364A166FC4DD ON general (domicilio_id)');
        $this->addSql('CREATE INDEX IDX_CE29364AB5A3803B ON general (lugar_id)');
        $this->addSql('ALTER TABLE industria ADD lugar_id INT DEFAULT NULL, ADD cuit VARCHAR(255) NOT NULL, ADD h_inicio TIME NOT NULL, ADD h_fin TIME NOT NULL');
        $this->addSql('ALTER TABLE industria ADD CONSTRAINT FK_746EF596B5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('CREATE INDEX IDX_746EF596B5A3803B ON industria (lugar_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAACB95122EB');
        $this->addSql('ALTER TABLE general DROP FOREIGN KEY FK_CE29364A166FC4DD');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAAC9AEEB08D');
        $this->addSql('ALTER TABLE domicilio DROP FOREIGN KEY FK_9B942ED1B5A3803B');
        $this->addSql('ALTER TABLE general DROP FOREIGN KEY FK_CE29364AB5A3803B');
        $this->addSql('ALTER TABLE industria DROP FOREIGN KEY FK_746EF596B5A3803B');
        $this->addSql('ALTER TABLE lugar_general DROP FOREIGN KEY FK_6108DC3BB5A3803B');
        $this->addSql('ALTER TABLE persona DROP FOREIGN KEY FK_51E5B69BB5A3803B');
        $this->addSql('DROP TABLE cert_aptitud_amb');
        $this->addSql('DROP TABLE domicilio');
        $this->addSql('DROP TABLE habilitacion');
        $this->addSql('DROP TABLE lugar');
        $this->addSql('DROP TABLE lugar_general');
        $this->addSql('DROP TABLE persona');
        $this->addSql('DROP INDEX IDX_CE29364A166FC4DD ON general');
        $this->addSql('DROP INDEX IDX_CE29364AB5A3803B ON general');
        $this->addSql('ALTER TABLE general DROP domicilio_id, DROP lugar_id');
        $this->addSql('DROP INDEX IDX_746EF596B5A3803B ON industria');
        $this->addSql('ALTER TABLE industria DROP lugar_id, DROP cuit, DROP h_inicio, DROP h_fin');
    }
}
