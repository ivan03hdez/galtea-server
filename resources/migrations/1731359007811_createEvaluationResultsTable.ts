import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateEvaluationResultsTable_1731359007811 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE evaluation_results (
                id SERIAL PRIMARY KEY,
                project_name VARCHAR,
                system_name VARCHAR,
                dataset_name VARCHAR,
                accuracy NUMERIC(3, 2),
                relevancy NUMERIC(3, 2),
                helpfulness NUMERIC(3, 2),
                toxicity NUMERIC(3, 2),
                score NUMERIC(3, 2),
                FOREIGN KEY (project_name) REFERENCES projects (name)
            );
        `,)
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE evaluation_results;`,
        )
    }
}
