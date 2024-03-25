import { config } from "dotenv";

config()

export const PORT = process.env.PORT!

export const POSTGRES_USER = process.env.POSTGRES_USER!
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD!
export const POSTGRES_DB = process.env.POSTGRES_DB!

export const PGADMIN_DEFAULT_EMAIL = process.env.PGADMIN_DEFAULT_EMAIL!
export const PGADMIN_DEFAULT_PASSWORD = process.env.PGADMIN_DEFAULT_PASSWORD!

export const CONNECTION_ORM_URL_LINUX_P1 = process.env.CONNECTION_ORM_URL_LINUX_P1!
export const CONNECTION_ORM_URL_LINUX_P2 = process.env.CONNECTION_ORM_URL_LINUX_P2!