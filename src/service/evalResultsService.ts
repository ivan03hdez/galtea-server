import { EvalResult } from "./types.ts";
import { csvToJson } from "./utils.ts";
import { AppDataSource } from "../dataSource.ts";
import EvaluationResultEntity from "../entity/evaluationResult.ts";
import EvaluationResult from "../entity/evaluationResult.ts";

export const getEvalResultsFromCsv = async (): Promise<EvalResult[]> => {
    const evalResultsFilePath = './resources/csv/EvalResults.csv';
    return await csvToJson<EvalResult>(evalResultsFilePath)
}

export const saveEvalResultsToDB = async (evalResults: EvalResult[]): Promise<void> => {
    const evaluationResultRepository = AppDataSource.getRepository(EvaluationResultEntity);
    try {
        await evaluationResultRepository.createQueryBuilder()
            .insert()
            .values(evalResults.map<EvaluationResult>(evalResult => ({
                projectName: evalResult.projectName,
                systemName: evalResult.systemName,
                datasetName: evalResult.datasetName,
                accuracy: evalResult.accuracy,
                relevancy: evalResult.relevancy,
                helpfulness: evalResult.helpfulness,
                toxicity: evalResult.toxicity,
                score: evalResult.score,
            })))
            .execute();
    } catch (error) {
        console.log('Error Couldn\'t save evaluation results to DB: ',error)
    }
}

export const getEvalResultsFromDB = async (): Promise<EvaluationResultEntity[]> => {
    try {
        return await AppDataSource
            .getRepository(EvaluationResultEntity)
            .find()
    } catch (error) {
        console.log('Error Couldn\'t fetch evaluation results from DB: ',error)
    }
}