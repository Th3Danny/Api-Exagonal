import { Router } from "express";
import{
    getProductosController,
    getProductosByIdController,
    postProductoController,
    deleteByIdProductosController
} from './dependencias.productos'

const productosRouter = Router();

productosRouter
.get("/", getProductosController.run.bind(getProductosController))
.get('/:id', getProductosByIdController.run.bind(getProductosByIdController))
.post('/', postProductoController.run.bind(postProductoController))
.delete('/:id_producto', deleteByIdProductosController.run.bind(deleteByIdProductosController))
export default productosRouter;