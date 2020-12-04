<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201204142048 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE lugar_general');
        $this->addSql('ALTER TABLE industria DROP FOREIGN KEY FK_746EF596B5A3803B');
        $this->addSql('DROP INDEX IDX_746EF596B5A3803B ON industria');
        $this->addSql('ALTER TABLE industria ADD titular_id INT NOT NULL, DROP lugar_id');
        $this->addSql('ALTER TABLE industria ADD CONSTRAINT FK_746EF596F9F0FF64 FOREIGN KEY (titular_id) REFERENCES persona (id)');
        $this->addSql('CREATE INDEX IDX_746EF596F9F0FF64 ON industria (titular_id)');
        $this->addSql('ALTER TABLE lugar ADD industria_id INT NOT NULL, DROP potencia_utilizada, CHANGE nobre nombre VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE lugar ADD CONSTRAINT FK_4974AAAC5C1E58A1 FOREIGN KEY (industria_id) REFERENCES industria (id)');
        $this->addSql('CREATE INDEX IDX_4974AAAC5C1E58A1 ON lugar (industria_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE lugar_general (lugar_id INT NOT NULL, general_id INT NOT NULL, INDEX IDX_6108DC3BD0E2C4F1 (general_id), INDEX IDX_6108DC3BB5A3803B (lugar_id), PRIMARY KEY(lugar_id, general_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE lugar_general ADD CONSTRAINT FK_6108DC3BB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lugar_general ADD CONSTRAINT FK_6108DC3BD0E2C4F1 FOREIGN KEY (general_id) REFERENCES general (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE industria DROP FOREIGN KEY FK_746EF596F9F0FF64');
        $this->addSql('DROP INDEX IDX_746EF596F9F0FF64 ON industria');
        $this->addSql('ALTER TABLE industria ADD lugar_id INT DEFAULT NULL, DROP titular_id');
        $this->addSql('ALTER TABLE industria ADD CONSTRAINT FK_746EF596B5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id)');
        $this->addSql('CREATE INDEX IDX_746EF596B5A3803B ON industria (lugar_id)');
        $this->addSql('ALTER TABLE lugar DROP FOREIGN KEY FK_4974AAAC5C1E58A1');
        $this->addSql('DROP INDEX IDX_4974AAAC5C1E58A1 ON lugar');
        $this->addSql('ALTER TABLE lugar ADD potencia_utilizada INT DEFAULT NULL, DROP industria_id, CHANGE nombre nobre VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
