import "reflect-metadata"
import { DataSource } from "typeorm"
import { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER } from "../environments"
import { Entities } from "../entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [...Entities],
    migrations: [],
    subscribers: [],
})
