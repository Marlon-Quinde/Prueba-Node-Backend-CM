import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"


@Entity()
export class Photos {

    @PrimaryColumn()
    id: number

    @Column()
    albumId: number

    @Column("varchar")
    title: string

    @Column("varchar")
    url: string

    @Column("varchar")
    thumbnailUrl: string

}
