import { Request, Response } from "express";
import { isObject } from "util";

export class TypeResponse {
    async error(req: Request, res: Response, data: any ) {
        return res.status(400).send({
            mensaje: 'Completado',
            data
        })
    }

    async next(req: Request, res: Response, err: any ) {
        return res.status(400).send({
            mensaje: isObject(err) ? err.message : err,
            data: 'fail'
        })
    }
}