<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201210191000 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE domicilio ADD calle_id INT NOT NULL, ADD provincia_id INT NOT NULL, ADD localidad_id INT NOT NULL, DROP calle');
        $this->addSql('ALTER TABLE domicilio ADD CONSTRAINT FK_9B942ED1A08B711E FOREIGN KEY (calle_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE domicilio ADD CONSTRAINT FK_9B942ED14E7121AF FOREIGN KEY (provincia_id) REFERENCES general (id)');
        $this->addSql('ALTER TABLE domicilio ADD CONSTRAINT FK_9B942ED167707C89 FOREIGN KEY (localidad_id) REFERENCES general (id)');
        $this->addSql('CREATE INDEX IDX_9B942ED1A08B711E ON domicilio (calle_id)');
        $this->addSql('CREATE INDEX IDX_9B942ED14E7121AF ON domicilio (provincia_id)');
        $this->addSql('CREATE INDEX IDX_9B942ED167707C89 ON domicilio (localidad_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE domicilio DROP FOREIGN KEY FK_9B942ED1A08B711E');
        $this->addSql('ALTER TABLE domicilio DROP FOREIGN KEY FK_9B942ED14E7121AF');
        $this->addSql('ALTER TABLE domicilio DROP FOREIGN KEY FK_9B942ED167707C89');
        $this->addSql('DROP INDEX IDX_9B942ED1A08B711E ON domicilio');
        $this->addSql('DROP INDEX IDX_9B942ED14E7121AF ON domicilio');
        $this->addSql('DROP INDEX IDX_9B942ED167707C89 ON domicilio');
        $this->addSql('ALTER TABLE domicilio ADD calle VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP calle_id, DROP provincia_id, DROP localidad_id');
    }
}
