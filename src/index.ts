import { AppDataSource } from "./connections/conexionORM"
import { User } from "./entity/User"




import express, {} from "express"
import { PORT } from "./environments/index"

import authRouter from "./modules/auth/routes"
import "reflect-metadata"

const app = express()

//* Routes




app.use(express.urlencoded({extended: true}))
app.use(express.json({}))

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    console.log("Coneccion Exitosa con el ORM")

}).catch(error => console.log(error))


app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server Listen in port : ${PORT}`)
})