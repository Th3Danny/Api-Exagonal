import { MySqlRepositoryCliente } from "./DbRepository/mysql.respository";
import { GetClientesService } from "../application/services/getClientes.service";
import { GetClienteByIdService } from "../application/services/getClientesById.services";
import { GetClientesController } from "./controllers/getClientes.controller";
import { GetClienteByIdController } from "./controllers/getClientesById.controller";

const mysqlRepository = new MySqlRepositoryCliente();

const getClienteService = new GetClientesService(mysqlRepository);
const getClienteByIdService = new GetClienteByIdService(mysqlRepository);

export const getClientesController = new GetClientesController(getClienteService);
export const getClienteByIdController = new GetClienteByIdController( getClienteByIdService);

