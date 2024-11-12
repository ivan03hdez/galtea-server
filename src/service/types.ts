export interface Project {
    conformityProgress: number;
    projectName: string;
    type: string;
}

export interface EvalResult {
    accuracy: number;
    datasetName: string;
    helpfulness: number;
    projectName: string;
    relevancy: number;
    score: number;
    systemName: string;
    toxicity: number;
}