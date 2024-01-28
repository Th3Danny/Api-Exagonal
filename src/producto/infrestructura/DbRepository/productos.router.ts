import { Router } from "express";
import{
    getProductosController,
    getProductosByIdController,
    postProductoController,
    deleteByIdProductosController
} from './dependencias.productos'

const productosRouter = Router();

productosRouter
.get("/", async (req, res) => {
    await getProductosController.run(req, res);
  })
.get('/:id', async (req, res) => {
    await getProductosByIdController.run(req, res);
  })
  
  .post('/', async (req, res) => {
    await postProductoController.run(req, res);
  })
  
  .delete('/:id_producto', async (req, res) => {
    await deleteByIdProductosController.run(req, res);
  })
  
  
export default productosRouter;