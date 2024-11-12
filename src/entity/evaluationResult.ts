import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import ProjectEntity from "./project.ts";

@Entity({ name: "evaluation_results" })
export default class EvaluationResult {
    @PrimaryGeneratedColumn()
    id?: number
    @Column({ type: "text", name: "project_name" })
    public projectName: string;
    @ManyToOne(() => ProjectEntity, { eager: false, onDelete: "CASCADE" })
    @JoinColumn({ name: "project_name", referencedColumnName: "name" })
    project?: ProjectEntity
    @Column({ type: "text", name: "system_name" })
    systemName: string
    @Column({ type: "text", name: "dataset_name" })
    datasetName: string
    @Column({ type: "double precision", name: "accuracy" })
    accuracy: number
    @Column({ type: "double precision", name: "relevancy" })
    relevancy: number
    @Column({ type: "double precision", name: "helpfulness" })
    helpfulness: number
    @Column({ type: "double precision", name: "toxicity" })
    toxicity: number
    @Column({ type: "double precision", name: "score" })
    score: number
}