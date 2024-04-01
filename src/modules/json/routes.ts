import { Request, Response, Router } from "express";
import { ConexionMDW } from "../../middlewares/conexionMDW";
import { EntityManager } from "typeorm";
import { Photos } from "../../entity/Photos";

const route = Router()

route.get('/register', ConexionMDW ,async (req: Request, res: Response) => {
    const cnx: EntityManager = (req as any).cnn
    const registros = await cnx.find(Photos)
    res.json(registros)
})


route.post('/save',ConexionMDW ,async (req: Request, res: Response) => {
    console.log('PETICION')
    const cnx: EntityManager = (req as any).cnn
    const body = req.body as Photos

    const exist = await cnx.find(Photos, {where: { id: body.id}} )

    if(exist.length) throw new Error('No se creo')
    
    const registros = await cnx.insert(Photos, body)

    if(!registros) return res.json({msg: 'No se creo'})
    res.json(registros)
}
)
route.delete('/del/:id',ConexionMDW ,async (req: Request, res: Response) => {
    console.log('PETICION')
    const cnx: EntityManager = (req as any).cnn
    const id = req.params?.id

    if(!id) return res.json({msg: 'No se creo'})

    const exist = await cnx.find(Photos, {where: { id: Number(id) }} )

    if(!exist.length) throw new Error('No existe registro')
    
    const registros = await cnx.createQueryBuilder().delete().from(Photos).where('id = :id', {id}).execute()

    if(!registros) return res.json({msg: 'No se borro'})
    res.json(registros)
})

export default route