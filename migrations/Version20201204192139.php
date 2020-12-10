<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201204192139 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lugar ADD domicilio_id INT NOT NULL, ADD apoderado_id INT NOT NULL, ADD q_personal_trans INT NOT NULL, ADD q_personal_discapacidad INT NOT NULL, ADD q_personal_residente_avellaneda INT NOT NULL');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAAC166FC4DD FOREIGN KEY (domicilio_id) REFERENCES domicilio (id)');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAACA1C0A276 FOREIGN KEY (apoderado_id) REFERENCES persona (id)');
        $this->addSql('CREATE INDEX IDX_4974AAAC166FC4DD ON lugar (domicilio_id)');
        $this->addSql('CREATE INDEX IDX_4974AAACA1C0A276 ON lugar (apoderado_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAAC166FC4DD');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAACA1C0A276');
        $this->addSql('DROP INDEX IDX_4974AAAC166FC4DD ON lugar');
        $this->addSql('DROP INDEX IDX_4974AAACA1C0A276 ON lugar');
        $this->addSql('ALTER TABLE lugar DROP domicilio_id, DROP apoderado_id, DROP q_personal_trans, DROP q_personal_discapacidad, DROP q_personal_residente_avellaneda');
    }
}
