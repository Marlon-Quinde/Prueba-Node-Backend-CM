import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { Pais } from "./Pais"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    // @ManyToOne(() => Pais, pais => pais.id)
    // @JoinColumn([{name: 'id_pais'}])
    // idPais: Pais

    @Column("varchar", {nullable: true})
    email: string

    @Column("varchar")
    password: string

}
