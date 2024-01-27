import { Router } from "express";
import { getClientesController } from "./dependencias.cliente";
import { getClienteByCorreoController } from "./dependencias.cliente";
import { postClienteController } from "./dependencias.cliente";
import { deleteClienteByCorreoController } from "./dependencias.cliente";
const clienteRouter = Router();

clienteRouter
.get("/", getClientesController.run.bind(getClientesController))
.get("/:correo_cliente", getClienteByCorreoController.run.bind(getClienteByCorreoController))
.post('/', postClienteController.run.bind(postClienteController))
.delete("/:correo_cliente", deleteClienteByCorreoController.run.bind(deleteClienteByCorreoController))
export default clienteRouter;