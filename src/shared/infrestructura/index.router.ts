import { Router, Request, Response } from "express";
import clienteRouter from "../../cliente/infrestructure/cliente.router";
import productosRouter from "../../producto/infrestructura/DbRepository/productos.router";
const prefijo = '/api';
const indexRouter = Router();

indexRouter.use(`${prefijo}/producto`, productosRouter);
indexRouter.use(`${prefijo}/cliente`, clienteRouter)
indexRouter.get(prefijo, (req: Request, res: Response)=> {
    res.status(200).send("Ya quedo pa");
})

export default indexRouter;