import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({ name: "projects" })
export default class Project {
    @PrimaryColumn("text")
    name: string
    @Column("text")
    type: string
    @Column({ type: "double precision", name: "conformity_progress" })
    conformityProgress: number
}