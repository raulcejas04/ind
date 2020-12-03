<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201203162701 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE general (id INT AUTO_INCREMENT NOT NULL, tipo_id INT NOT NULL, descripcion VARCHAR(255) NOT NULL, descripcion_corta VARCHAR(255) NOT NULL, auxiliar1 VARCHAR(255) DEFAULT NULL, auxiliar2 VARCHAR(255) DEFAULT NULL, INDEX IDX_CE29364AA9276E6C (tipo_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE grupo (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE grupo_usuario (grupo_id INT NOT NULL, usuario_id INT NOT NULL, INDEX IDX_7D6C3EFA9C833003 (grupo_id), INDEX IDX_7D6C3EFADB38439E (usuario_id), PRIMARY KEY(grupo_id, usuario_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE industria (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE prototipo (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) DEFAULT NULL, edad INT DEFAULT NULL, fecha_nacimiento DATE DEFAULT NULL, hora_nacimiento TIME DEFAULT NULL, fecha_actualizacion DATETIME DEFAULT NULL, lenguaje INT DEFAULT NULL, tiene_covid TINYINT(1) NOT NULL, sueldo DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tipo (id INT AUTO_INCREMENT NOT NULL, tipo VARCHAR(255) NOT NULL, creado_por INT NOT NULL, creado_en DATE NOT NULL, modificado_por INT DEFAULT NULL, modificado_en DATE DEFAULT NULL, eliminado_por INT NOT NULL, eliminado_en DATE DEFAULT NULL, activo TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuario (id INT AUTO_INCREMENT NOT NULL, compania_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, nombre VARCHAR(180) NOT NULL, apellido VARCHAR(180) NOT NULL, username VARCHAR(180) NOT NULL, nombre_img_perfil VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_2265B05DE7927C74 (email), UNIQUE INDEX UNIQ_2265B05DF85E0677 (username), INDEX IDX_2265B05D12A65948 (compania_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE general ADD CONSTRAINT FK_CE29364AA9276E6C FOREIGN KEY (tipo_id) REFERENCES tipo (id)');
        $this->addSql('ALTER TABLE grupo_usuario ADD CONSTRAINT FK_7D6C3EFA9C833003 FOREIGN KEY (grupo_id) REFERENCES grupo (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE grupo_usuario ADD CONSTRAINT FK_7D6C3EFADB38439E FOREIGN KEY (usuario_id) REFERENCES usuario (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE usuario ADD CONSTRAINT FK_2265B05D12A65948 FOREIGN KEY (compania_id) REFERENCES compania (id)');
        $this->addSql('DROP TABLE grupo_user');
        $this->addSql('DROP TABLE rol');
        $this->addSql('DROP TABLE user');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE grupo_usuario DROP FOREIGN KEY FK_7D6C3EFA9C833003');
        $this->addSql('ALTER TABLE general DROP FOREIGN KEY FK_CE29364AA9276E6C');
        $this->addSql('ALTER TABLE grupo_usuario DROP FOREIGN KEY FK_7D6C3EFADB38439E');
        $this->addSql('CREATE TABLE grupo_user (grupo_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_E90A3F33A76ED395 (user_id), INDEX IDX_E90A3F339C833003 (grupo_id), PRIMARY KEY(grupo_id, user_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE rol (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, compania_id INT DEFAULT NULL, email VARCHAR(180) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, roles JSON CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, nombre VARCHAR(180) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, apellido VARCHAR(180) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, username VARCHAR(180) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D64912A65948 (compania_id), UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64912A65948 FOREIGN KEY (compania_id) REFERENCES compania (id)');
        $this->addSql('DROP TABLE general');
        $this->addSql('DROP TABLE grupo');
        $this->addSql('DROP TABLE grupo_usuario');
        $this->addSql('DROP TABLE industria');
        $this->addSql('DROP TABLE prototipo');
        $this->addSql('DROP TABLE tipo');
        $this->addSql('DROP TABLE usuario');
    }
}
