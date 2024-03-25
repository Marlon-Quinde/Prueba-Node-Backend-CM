import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../connections/conexionORM";

export const ConexionMDW = async (req: Request, response: Response, next: NextFunction) => {
    try {
        (req as any).cnn = AppDataSource.manager
        next();
    } catch (error) {
        console.log(error)
    }
    
}