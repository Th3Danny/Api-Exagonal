import { MySqlRepositoryCliente } from "../../cliente/infrestructure/DbRepository/mysql.respository";
import { RegisterAuthService } from "../application/services/resgisterAuth.services";
import { RegisterAuthController } from "./controllers/registerAuth.controller";

const mysqlRepository = new MySqlRepositoryCliente();

const registerAuthService = new RegisterAuthService(mysqlRepository);

export const registerAuthController = new RegisterAuthController(registerAuthService)