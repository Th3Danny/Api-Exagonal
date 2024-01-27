import { MySqlRepositoryCliente } from "./DbRepository/mysql.respository";
import { GetClientesService } from "../application/services/getClientes.service";
import { GetClienteByCorreoService } from "../application/services/getClientesByCorreo.services";
import { GetClientesController } from "./controllers/getClientes.controller";
import { GetClienteByCorreoController } from "./controllers/getClientesById.controller";
import { PostClienteService } from "../application/services/postClientes.services";
import { PostClienteController } from "./controllers/postClientes.controller";
import { DeleteClienteByCorreoService } from "../application/services/deleteClientesBycorreo.services";
import { DeleteClienteByCorreoController } from "./controllers/deleteClientes.controller";
const mysqlRepository = new MySqlRepositoryCliente();

const getClienteService = new GetClientesService(mysqlRepository);
const getClienteByCorreoService = new GetClienteByCorreoService(mysqlRepository);
const postClienteService = new PostClienteService(mysqlRepository)
const deleteClienteByCorreoService = new DeleteClienteByCorreoService(mysqlRepository)
export const getClientesController = new GetClientesController(getClienteService);
export const getClienteByCorreoController = new GetClienteByCorreoController( getClienteByCorreoService);
export const postClienteController = new PostClienteController(postClienteService)
export const deleteClienteByCorreoController = new DeleteClienteByCorreoController(deleteClienteByCorreoService)