
import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateProjectsTable_1731359007810 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE projects (
                name VARCHAR PRIMARY KEY,
                type VARCHAR,
                conformity_progress NUMERIC(3, 2)
            );
        `)
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE projects;`,
        )
    }
}