import { MigrationInterface, QueryRunner } from "typeorm";

export default class CreateTableTokenPasswordReset1616451213159
  implements MigrationInterface {
  name = "CreateTableTokenPasswordReset1616451213159";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `token_password_reset` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `token` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `REL_fa0dc976e96f8eb18708028ae0` (`user_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `token_password_reset` ADD CONSTRAINT `FK_fa0dc976e96f8eb18708028ae05` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `token_password_reset` DROP FOREIGN KEY `FK_fa0dc976e96f8eb18708028ae05`"
    );
    await queryRunner.query(
      "DROP INDEX `REL_fa0dc976e96f8eb18708028ae0` ON `token_password_reset`"
    );
    await queryRunner.query("DROP TABLE `token_password_reset`");
  }
}
