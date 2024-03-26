import { Request, Response, Router } from "express";
import { LoginAutentication, RegisterUser } from "./contoller";
import { ConexionMDW } from "../../middlewares/conexionMDW";
import { EntityManager } from "typeorm";
import { UserBody } from "../../interfaces/User.interface";
import { User } from "../../entity/User";

const route = Router();

route.post("/login", ConexionMDW,
    async (req: Request, res: Response) => {
        try {
            const cnx: EntityManager = (req as any).cnn
            const payload: UserBody = req.body
            const data = await LoginAutentication(cnx, payload)
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
);


route.post("/register", ConexionMDW,
    async (req: Request, res: Response) => {
        try {
            const cnx: EntityManager = (req as any).cnn
            const payload: User = req.body
            const data = await RegisterUser(cnx, payload)
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
);

export default route;
