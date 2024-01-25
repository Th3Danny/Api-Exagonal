import { Router } from "express";
import { verifyJwt } from "../../../auth/application/middlewares/jwt.middleware";
import{
    getProductosController,
    getProductosByIdController
} from './dependencias.productos'

const productosRouter = Router();

productosRouter
.get("/", getProductosController.run.bind(getProductosController))
.get('/:id', getProductosByIdController.run.bind(getProductosByIdController))

export default productosRouter;