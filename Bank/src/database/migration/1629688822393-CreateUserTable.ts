// src/database/migrations/1629688822393-CreateUserTable.ts

import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1629688822393 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE user (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                balance FLOAT NOT NULL DEFAULT 0
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE user`);
  }
}
