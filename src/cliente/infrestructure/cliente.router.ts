import { Router } from "express";
import {
    getClientesController,
    getClienteByCorreoController,
    postClienteController,
    deleteClienteByCorreoController
} from "./dependencias.cliente";
const clienteRouter = Router();

clienteRouter
    .get("/", async (req, res) => {
        await getClientesController.run(req, res)
    })
    .get("/:correo_cliente", async (req, res) => { 
        await getClienteByCorreoController.run(req, res)
    })
    .post('/',  async (req, res) => {
        await postClienteController.run(req, res)
    })
    .delete("/:correo_cliente", async (req, res) => {
        await deleteClienteByCorreoController.run(req, res)
    })
export default clienteRouter;