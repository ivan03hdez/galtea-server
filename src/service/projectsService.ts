import { Project } from "./types.ts";
import ProjectEntity from "../entity/project.ts";
import { csvToJson } from "./utils.ts";
import { AppDataSource } from "../dataSource.ts";

export const getProjectsFromCsv = async (): Promise<Project[]> => {
    const projectsFilePath = './resources/data/Projects.data';
    return await csvToJson<Project>(projectsFilePath)
}

export const saveProjectsToDB = async (projects: Project[]): Promise<void> => {
    const projectRepository = AppDataSource.getRepository(ProjectEntity);
    try {
        await projectRepository.createQueryBuilder()
            .insert()
            .values(projects.map<ProjectEntity>(project => ({
                name: project.projectName,
                type: project.type,
                conformityProgress: project.conformityProgress,
            })))
            .execute();
    } catch (error) {
        console.log('Error Couldn\'t save projects to DB: ',error)
    }
}

export const getProjectsFromDB = async (): Promise<ProjectEntity[]> => {
    try {
        return await AppDataSource
            .getRepository(ProjectEntity)
            .find()
    } catch (error) {
        console.log('Error Couldn\'t fetch evaluation results from DB: ',error)
    }
}