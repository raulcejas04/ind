<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201207230024 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cert_aptitud_amb (id INT AUTO_INCREMENT NOT NULL, categoria_id INT NOT NULL, numero INT NOT NULL, fecha_otorgamiento DATE NOT NULL, fecha_otorgamiento_categoria DATE NOT NULL, fecha_vencimiento DATE NOT NULL, INDEX IDX_313EDA5C3397707A (categoria_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE compania (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE domicilio (id INT AUTO_INCREMENT NOT NULL, industria_id INT DEFAULT NULL, lugar_id INT DEFAULT NULL, calle VARCHAR(255) NOT NULL, puerta VARCHAR(50) NOT NULL, piso_dpto VARCHAR(50) DEFAULT NULL, cp VARCHAR(20) NOT NULL, INDEX IDX_9B942ED15C1E58A1 (industria_id), INDEX IDX_9B942ED1B5A3803B (lugar_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE general (id INT AUTO_INCREMENT NOT NULL, tipo_id INT NOT NULL, domicilio_id INT DEFAULT NULL, lugar_id INT DEFAULT NULL, descripcion VARCHAR(255) NOT NULL, descripcion_corta VARCHAR(255) NOT NULL, auxiliar1 VARCHAR(255) DEFAULT NULL, auxiliar2 VARCHAR(255) DEFAULT NULL, INDEX IDX_CE29364AA9276E6C (tipo_id), INDEX IDX_CE29364A166FC4DD (domicilio_id), INDEX IDX_CE29364AB5A3803B (lugar_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE grupo (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE grupo_usuario (grupo_id INT NOT NULL, usuario_id INT NOT NULL, INDEX IDX_7D6C3EFA9C833003 (grupo_id), INDEX IDX_7D6C3EFADB38439E (usuario_id), PRIMARY KEY(grupo_id, usuario_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE habilitacion (id INT AUTO_INCREMENT NOT NULL, tipo_id INT DEFAULT NULL, rubro_habilitado_id INT NOT NULL, rubro_primario_id INT DEFAULT NULL, rubro_secundario_id INT DEFAULT NULL, expediente VARCHAR(255) NOT NULL, fecha_inicio DATE NOT NULL, legajo_se_h VARCHAR(255) NOT NULL, materia_prima VARCHAR(255) NOT NULL, producto_final VARCHAR(255) DEFAULT NULL, INDEX IDX_6A72484EA9276E6C (tipo_id), INDEX IDX_6A72484E9910D1AB (rubro_habilitado_id), INDEX IDX_6A72484EE8710899 (rubro_primario_id), INDEX IDX_6A72484EC80377B1 (rubro_secundario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE industria (id INT AUTO_INCREMENT NOT NULL, domicilio_id INT NOT NULL, titular_id INT NOT NULL, cuit VARCHAR(255) NOT NULL, h_inicio TIME NOT NULL, h_fin TIME NOT NULL, razon_social VARCHAR(255) NOT NULL, INDEX IDX_746EF596166FC4DD (domicilio_id), INDEX IDX_746EF596F9F0FF64 (titular_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lugar (id INT AUTO_INCREMENT NOT NULL, habilitacion_id INT DEFAULT NULL, cert_aptitud_amb_id INT DEFAULT NULL, industria_id INT NOT NULL, nombre VARCHAR(255) NOT NULL, q_personal INT DEFAULT NULL, q_personal_femenino INT DEFAULT NULL, superficie_total INT DEFAULT NULL, siperficie_cubierta INT DEFAULT NULL, superficie_libre INT DEFAULT NULL, es_exportador TINYINT(1) DEFAULT NULL, ceritifion_aptitud INT DEFAULT NULL, curt VARCHAR(255) DEFAULT NULL, fecha_ultima_inpeccion DATE DEFAULT NULL, tiene_denuncia TINYINT(1) DEFAULT NULL, denuncias_especificaciones LONGTEXT DEFAULT NULL, dispocision_provincial TINYINT(1) DEFAULT NULL, nro_disp_prov INT DEFAULT NULL, fecha_otorg_disp_prov DATE DEFAULT NULL, UNIQUE INDEX UNIQ_4974AAAC9AEEB08D (habilitacion_id), UNIQUE INDEX UNIQ_4974AAACB95122EB (cert_aptitud_amb_id), INDEX IDX_4974AAAC5C1E58A1 (industria_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lugares_paises (lugar_id INT NOT NULL, general_id INT NOT NULL, INDEX IDX_60BD7890B5A3803B (lugar_id), INDEX IDX_60BD7890D0E2C4F1 (general_id), PRIMARY KEY(lugar_id, general_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lugares_horariosTrabajo (lugar_id INT NOT NULL, general_id INT NOT NULL, INDEX IDX_50A1D75AB5A3803B (lugar_id), INDEX IDX_50A1D75AD0E2C4F1 (general_id), PRIMARY KEY(lugar_id, general_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE permiso (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE persona (id INT AUTO_INCREMENT NOT NULL, industria_id INT DEFAULT NULL, lugar_id INT DEFAULT NULL, cuil VARCHAR(20) NOT NULL, telefono_fijo VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL, nombre VARCHAR(255) NOT NULL, apellido VARCHAR(255) NOT NULL, telefono_movil VARCHAR(50) NOT NULL, INDEX IDX_51E5B69B5C1E58A1 (industria_id), INDEX IDX_51E5B69BB5A3803B (lugar_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE prototipo (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) DEFAULT NULL, edad INT DEFAULT NULL, fecha_nacimiento DATE DEFAULT NULL, hora_nacimiento TIME DEFAULT NULL, fecha_actualizacion DATETIME DEFAULT NULL, lenguaje INT DEFAULT NULL, tiene_covid TINYINT(1) NOT NULL, sueldo DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tipo (id INT AUTO_INCREMENT NOT NULL, tipo VARCHAR(255) NOT NULL, creado_por INT NOT NULL, creado_en DATE NOT NULL, modificado_por INT DEFAULT NULL, modificado_en DATE DEFAULT NULL, eliminado_por INT NOT NULL, eliminado_en DATE DEFAULT NULL, activo TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuario (id INT AUTO_INCREMENT NOT NULL, compania_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, nombre VARCHAR(180) NOT NULL, apellido VARCHAR(180) NOT NULL, username VARCHAR(180) NOT NULL, nombre_img_perfil VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_2265B05DE7927C74 (email), UNIQUE INDEX UNIQ_2265B05DF85E0677 (username), INDEX IDX_2265B05D12A65948 (compania_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cert_aptitud_amb ADD CONSTRAINT FK_313EDA5C3397707A FOREIGN KEY (categoria_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE domicilio ADD CONSTRAINT FK_9B942ED15C1E58A1 FOREIGN KEY (industria_id) REFERENCES industria (id)');
        $this->addSql('ALTER TABLE domicilio ADD CONSTRAINT FK_9B942ED1B5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('ALTER TABLE general ADD CONSTRAINT FK_CE29364AA9276E6C FOREIGN KEY (tipo_id) REFERENCES tipo (id)');
        $this->addSql('ALTER TABLE general ADD CONSTRAINT FK_CE29364A166FC4DD FOREIGN KEY (domicilio_id) REFERENCES domicilio (id)');
        $this->addSql('ALTER TABLE general ADD CONSTRAINT FK_CE29364AB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('ALTER TABLE grupo_usuario ADD CONSTRAINT FK_7D6C3EFA9C833003 FOREIGN KEY (grupo_id) REFERENCES grupo (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE grupo_usuario ADD CONSTRAINT FK_7D6C3EFADB38439E FOREIGN KEY (usuario_id) REFERENCES usuario (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE habilitacion ADD CONSTRAINT FK_6A72484EA9276E6C FOREIGN KEY (tipo_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE habilitacion ADD CONSTRAINT FK_6A72484E9910D1AB FOREIGN KEY (rubro_habilitado_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE habilitacion ADD CONSTRAINT FK_6A72484EE8710899 FOREIGN KEY (rubro_primario_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE habilitacion ADD CONSTRAINT FK_6A72484EC80377B1 FOREIGN KEY (rubro_secundario_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE industria ADD CONSTRAINT FK_746EF596166FC4DD FOREIGN KEY (domicilio_id) REFERENCES domicilio (id)');
        $this->addSql('ALTER TABLE industria ADD CONSTRAINT FK_746EF596F9F0FF64 FOREIGN KEY (titular_id) REFERENCES persona (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAAC9AEEB08D FOREIGN KEY (habilitacion_id) REFERENCES habilitacion (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAACB95122EB FOREIGN KEY (cert_aptitud_amb_id) REFERENCES cert_aptitud_amb (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAAC5C1E58A1 FOREIGN KEY (industria_id) REFERENCES industria (id)');
        $this->addSql('ALTER TABLE lugares_paises ADD CONSTRAINT FK_60BD7890B5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lugares_paises ADD CONSTRAINT FK_60BD7890D0E2C4F1 FOREIGN KEY (general_id) REFERENCES general (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lugares_horariosTrabajo ADD CONSTRAINT FK_50A1D75AB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lugares_horariosTrabajo ADD CONSTRAINT FK_50A1D75AD0E2C4F1 FOREIGN KEY (general_id) REFERENCES general (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE persona ADD CONSTRAINT FK_51E5B69B5C1E58A1 FOREIGN KEY (industria_id) REFERENCES industria (id)');
        $this->addSql('ALTER TABLE persona ADD CONSTRAINT FK_51E5B69BB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('ALTER TABLE usuario ADD CONSTRAINT FK_2265B05D12A65948 FOREIGN KEY (compania_id) REFERENCES compania (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAACB95122EB');
        $this->addSql('ALTER TABLE usuario DROP FOREIGN KEY FK_2265B05D12A65948');
        $this->addSql('ALTER TABLE general DROP FOREIGN KEY FK_CE29364A166FC4DD');
        $this->addSql('ALTER TABLE industria DROP FOREIGN KEY FK_746EF596166FC4DD');
        $this->addSql('ALTER TABLE cert_aptitud_amb DROP FOREIGN KEY FK_313EDA5C3397707A');
        $this->addSql('ALTER TABLE habilitacion DROP FOREIGN KEY FK_6A72484EA9276E6C');
        $this->addSql('ALTER TABLE habilitacion DROP FOREIGN KEY FK_6A72484E9910D1AB');
        $this->addSql('ALTER TABLE habilitacion DROP FOREIGN KEY FK_6A72484EE8710899');
        $this->addSql('ALTER TABLE habilitacion DROP FOREIGN KEY FK_6A72484EC80377B1');
        $this->addSql('ALTER TABLE lugares_paises DROP FOREIGN KEY FK_60BD7890D0E2C4F1');
        $this->addSql('ALTER TABLE lugares_horariosTrabajo DROP FOREIGN KEY FK_50A1D75AD0E2C4F1');
        $this->addSql('ALTER TABLE grupo_usuario DROP FOREIGN KEY FK_7D6C3EFA9C833003');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAAC9AEEB08D');
        $this->addSql('ALTER TABLE domicilio DROP FOREIGN KEY FK_9B942ED15C1E58A1');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAAC5C1E58A1');
        $this->addSql('ALTER TABLE persona DROP FOREIGN KEY FK_51E5B69B5C1E58A1');
        $this->addSql('ALTER TABLE domicilio DROP FOREIGN KEY FK_9B942ED1B5A3803B');
        $this->addSql('ALTER TABLE general DROP FOREIGN KEY FK_CE29364AB5A3803B');
        $this->addSql('ALTER TABLE lugares_paises DROP FOREIGN KEY FK_60BD7890B5A3803B');
        $this->addSql('ALTER TABLE lugares_horariosTrabajo DROP FOREIGN KEY FK_50A1D75AB5A3803B');
        $this->addSql('ALTER TABLE persona DROP FOREIGN KEY FK_51E5B69BB5A3803B');
        $this->addSql('ALTER TABLE industria DROP FOREIGN KEY FK_746EF596F9F0FF64');
        $this->addSql('ALTER TABLE general DROP FOREIGN KEY FK_CE29364AA9276E6C');
        $this->addSql('ALTER TABLE grupo_usuario DROP FOREIGN KEY FK_7D6C3EFADB38439E');
        $this->addSql('DROP TABLE cert_aptitud_amb');
        $this->addSql('DROP TABLE compania');
        $this->addSql('DROP TABLE domicilio');
        $this->addSql('DROP TABLE general');
        $this->addSql('DROP TABLE grupo');
        $this->addSql('DROP TABLE grupo_usuario');
        $this->addSql('DROP TABLE habilitacion');
        $this->addSql('DROP TABLE industria');
        $this->addSql('DROP TABLE lugar');
        $this->addSql('DROP TABLE lugares_paises');
        $this->addSql('DROP TABLE lugares_horariosTrabajo');
        $this->addSql('DROP TABLE permiso');
        $this->addSql('DROP TABLE persona');
        $this->addSql('DROP TABLE prototipo');
        $this->addSql('DROP TABLE tipo');
        $this->addSql('DROP TABLE usuario');
    }
}
