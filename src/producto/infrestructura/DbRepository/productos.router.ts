import { Router } from "express";
import { verifyJwt } from "../../../auth/application/middlewares/jwt.middleware";
import{
    getProductosController,
    getProductosByIdController,
    postProductoController
} from './dependencias.productos'

const productosRouter = Router();

productosRouter
.get("/", getProductosController.run.bind(getProductosController))
.get('/:id', getProductosByIdController.run.bind(getProductosByIdController))
.post('/', postProductoController.run.bind(postProductoController))
export default productosRouter;