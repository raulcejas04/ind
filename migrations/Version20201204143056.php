<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201204143056 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE lugares_paises (lugar_id INT NOT NULL, general_id INT NOT NULL, INDEX IDX_60BD7890B5A3803B (lugar_id), INDEX IDX_60BD7890D0E2C4F1 (general_id), PRIMARY KEY(lugar_id, general_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lugares_horariosTrabajo (lugar_id INT NOT NULL, general_id INT NOT NULL, INDEX IDX_50A1D75AB5A3803B (lugar_id), INDEX IDX_50A1D75AD0E2C4F1 (general_id), PRIMARY KEY(lugar_id, general_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE lugares_paises ADD CONSTRAINT FK_60BD7890B5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lugares_paises ADD CONSTRAINT FK_60BD7890D0E2C4F1 FOREIGN KEY (general_id) REFERENCES general (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lugares_horariosTrabajo ADD CONSTRAINT FK_50A1D75AB5A3803B FOREIGN KEY (lugar_id) REFERENCES lugar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE lugares_horariosTrabajo ADD CONSTRAINT FK_50A1D75AD0E2C4F1 FOREIGN KEY (general_id) REFERENCES general (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE lugares_paises');
        $this->addSql('DROP TABLE lugares_horariosTrabajo');
    }
}
