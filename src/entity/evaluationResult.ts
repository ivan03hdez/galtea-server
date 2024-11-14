import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import ProjectEntity from "./project.ts";
import ColumnNumericTransformer from "./columnNumericTransformer.ts";

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
    @Column({ type: "double precision", name: "accuracy", transformer: new ColumnNumericTransformer() })
    accuracy: number
    @Column({ type: "double precision", name: "relevancy", transformer: new ColumnNumericTransformer() })
    relevancy: number
    @Column({ type: "double precision", name: "helpfulness", transformer: new ColumnNumericTransformer() })
    helpfulness: number
    @Column({ type: "double precision", name: "toxicity", transformer: new ColumnNumericTransformer() })
    toxicity: number
    @Column({ type: "double precision", name: "score", transformer: new ColumnNumericTransformer() })
    score: number
}