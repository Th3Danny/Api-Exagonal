import { Router } from "express";
import { getClientesController } from "./dependencias.cliente";
import { getClienteByIdController } from "./dependencias.cliente";
const clienteRouter = Router();

clienteRouter
.get("/", getClientesController.run.bind(getClientesController))
.get("/:id", getClienteByIdController.run.bind(getClienteByIdController))

export default clienteRouter;