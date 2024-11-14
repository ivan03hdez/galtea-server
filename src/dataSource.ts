import dotenv from "dotenv"
import { DataSource } from "typeorm";
import ProjectEntity from "./entity/project.ts";
import EvaluationResultEntity from "./entity/evaluationResult.ts";
import { CreateEvaluationResultsTable_1731359007811 } from "../resources/migrations/1731359007811_createEvaluationResultsTable.ts";
import { CreateProjectsTable_1731359007810 } from "../resources/migrations/1731359007810_createProjectsTable.ts";
import { getEvalResultsFromCsv, saveEvalResultsToDB } from "./service/evalResultsService.ts";
import { getProjectsFromCsv, saveProjectsToDB } from "./service/projectsService.ts";

const loadFileEnvVariablesIntoProcess = () => {
    dotenv.config()
}

loadFileEnvVariablesIntoProcess()

console.log('Connecting to DB and initializing...')
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false, // Don't change
    logging: false,
    subscribers: [],
    entities: [ ProjectEntity, EvaluationResultEntity ],
    migrations: [ CreateProjectsTable_1731359007810, CreateEvaluationResultsTable_1731359007811 ],
    ssl: {
        rejectUnauthorized: false
    }
})

const dumpCsvDataIntoDB = async () => {
    await saveProjectsToDB(await getProjectsFromCsv())
    await saveEvalResultsToDB(await getEvalResultsFromCsv())
}

AppDataSource.initialize()
    .then(async () => {
        console.log('Data Source has been initialized!')
        await AppDataSource.runMigrations({ transaction: 'all' })
        // await dumpCsvDataIntoDB()
    })
    .catch((error) => console.log('Couldn\'t connect to DB', error))


