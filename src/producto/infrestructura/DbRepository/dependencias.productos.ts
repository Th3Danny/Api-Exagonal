
import { MySQLRepositoryProductos } from "./mysqlRepository";
import { GetProductosService } from "../../aplicacion/services/getProductos.services";
import { GetProductosByIdService } from "../../aplicacion/services/getProductosById.services";
import { GetProductosController } from "../controllers/getProductos.controller";
import { GetProductosByIdController } from "../controllers/getProductosById.controller";
import { PostProductoController } from "../controllers/postProductos.controller";
import { PostProductoService } from "../../aplicacion/services/postProductos.services";
import { DeleteProductoByIdService } from "../../aplicacion/services/deleteProducto.services";
import { DeleteProductoByIdController } from "../controllers/deleteProductos.controller";
//Se inyecta dependencia (base de datos)
const mysqlRepository = new MySQLRepositoryProductos();

//se inyecta la base de datos a los servicios
const getProductosService = new GetProductosService(mysqlRepository);
const getProductosByIdService = new GetProductosByIdService(mysqlRepository);
const postProductoService = new PostProductoService(mysqlRepository);
const deleteProductoService = new DeleteProductoByIdService(mysqlRepository)
//controlla a traves del servicio dado
export const getProductosController = new GetProductosController(getProductosService);
export const getProductosByIdController = new GetProductosByIdController(getProductosByIdService)
export const postProductoController = new PostProductoController(postProductoService)
export const deleteByIdProductosController = new DeleteProductoByIdController(deleteProductoService)
