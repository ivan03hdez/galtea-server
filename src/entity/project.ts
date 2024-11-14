import { Column, Entity, PrimaryColumn } from "typeorm"
import ColumnNumericTransformer from "./columnNumericTransformer.ts";

@Entity({ name: "projects" })
export default class Project {
    @PrimaryColumn("text")
    name: string
    @Column("text")
    type: string
    @Column({ type: "double precision", name: "conformity_progress", transformer: new ColumnNumericTransformer() })
    conformityProgress: number
}