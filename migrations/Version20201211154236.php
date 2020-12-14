<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201211154236 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE domicilio ADD departamento_id INT NOT NULL');
        $this->addSql('ALTER TABLE domicilio ADD CONSTRAINT FK_9B942ED15A91C08D FOREIGN KEY (departamento_id) REFERENCES general (id)');
        $this->addSql('CREATE INDEX IDX_9B942ED15A91C08D ON domicilio (departamento_id)');
        $this->addSql('ALTER TABLE general DROP FOREIGN KEY FK_CE29364A166FC4DD');
        $this->addSql('ALTER TABLE general DROP FOREIGN KEY FK_CE29364AB5A3803B');
        $this->addSql('DROP INDEX IDX_CE29364AB5A3803B ON general');
        $this->addSql('DROP INDEX IDX_CE29364A166FC4DD ON general');
        $this->addSql('ALTER TABLE general DROP domicilio_id, DROP lugar_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE domicilio DROP FOREIGN KEY FK_9B942ED15A91C08D');
        $this->addSql('DROP INDEX IDX_9B942ED15A91C08D ON domicilio');
        $this->addSql('ALTER TABLE domicilio DROP departamento_id');
        $this->addSql('ALTER TABLE general ADD domicilio_id INT DEFAULT NULL, ADD lugar_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE general ADD CONSTRAINT FK_CE29364A166FC4DD FOREIGN KEY (domicilio_id) REFERENCES domicilio (id)');
        $this->addSql('ALTER TABLE general ADD CONSTRAINT FK_CE29364AB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('CREATE INDEX IDX_CE29364AB5A3803B ON general (lugar_id)');
        $this->addSql('CREATE INDEX IDX_CE29364A166FC4DD ON general (domicilio_id)');
    }
}
