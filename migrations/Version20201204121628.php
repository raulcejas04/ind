<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201204121628 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE industria ADD domicilio_id INT NOT NULL, ADD razon_social VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE industria ADD CONSTRAINT FK_746EF596166FC4DD FOREIGN KEY (domicilio_id) REFERENCES domicilio (id)');
        $this->addSql('CREATE INDEX IDX_746EF596166FC4DD ON industria (domicilio_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE industria DROP FOREIGN KEY FK_746EF596166FC4DD');
        $this->addSql('DROP INDEX IDX_746EF596166FC4DD ON industria');
        $this->addSql('ALTER TABLE industria DROP domicilio_id, DROP razon_social');
    }
}
