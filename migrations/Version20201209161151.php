<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201209161151 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE horarios_trabajo (id INT AUTO_INCREMENT NOT NULL, lugar_id INT NOT NULL, dia_id INT NOT NULL, hora_inicio TIME NOT NULL, hora_fin TIME NOT NULL, INDEX IDX_8EAD3AF5B5A3803B (lugar_id), INDEX IDX_8EAD3AF5AC1F7597 (dia_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE horarios_trabajo ADD CONSTRAINT FK_8EAD3AF5B5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('ALTER TABLE horarios_trabajo ADD CONSTRAINT FK_8EAD3AF5AC1F7597 FOREIGN KEY (dia_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE lugar ADD horario_rotativo TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE horarios_trabajo');
        $this->addSql('ALTER TABLE lugar DROP horario_rotativo');
    }
}
