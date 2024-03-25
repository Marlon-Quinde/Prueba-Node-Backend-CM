import { Request, Response, Router } from "express";
import { LoginAutentication } from "./contoller";
import { ConexionMDW } from "../../middlewares/conexionMDW";
import { EntityManager } from "typeorm";

const route = Router();

route.get("/login", ConexionMDW,
    async (req: Request, res: Response) => {
        try {
            const cnx: EntityManager = (req as any).cnn
            console.log('CNX' ,cnx)
            const data = await LoginAutentication(cnx)
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
);

export default route;
