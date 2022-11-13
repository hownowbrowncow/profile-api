import { MigrationInterface, QueryRunner } from 'typeorm';

export class BiosCreate1668356158290 implements MigrationInterface {
  name = 'BiosCreate1668356158290';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "bio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "info" character varying NOT NULL, "displayName" character varying NOT NULL, "title" character varying NOT NULL, "picture" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bcc0586d9cf13e3da6ce13d1783" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "bio"`);
  }
}
