import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Pais {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    

}
