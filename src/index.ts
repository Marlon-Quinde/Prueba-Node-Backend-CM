import { AppDataSource } from "./connections/conexionORM"
import { User } from "./entity/User"

import jsonRoute from "./modules/json/routes"




import express, {} from "express"
import { PORT } from "./environments/index"

import authRouter from "./modules/auth/routes"
import "reflect-metadata"

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())


AppDataSource.initialize().then(async () => {
    console.log("Coneccion Exitosa con el ORM")

}).catch(error => console.log(error))

//* Routes
app.use('/jsn', jsonRoute)
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server Listen in port : ${PORT}`)
})