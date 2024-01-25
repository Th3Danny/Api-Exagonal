import { Cliente } from "../../../cliente/domain/entities/clienteBd";
import { ClienteRepository } from "../../../cliente/domain/repository/clienteRepository";
import { validateclient } from "../../../cliente/domain/validators/cliente.validator";
import { AuthResponse } from "../../domain/entities/authResponse";
import { createPasswordHash } from "../utils/createPasswordHash.utils";
import { createJwt } from "../utils/createJwt.utils";

export class RegisterAuthService {
    constructor(private readonly clienteRepository: ClienteRepository) {}
    async run(cliente: Cliente): Promise<AuthResponse> {
      try {
        const resultValidation = validateclient(cliente);
        if (resultValidation.success) {
          const isclienteCreated = await this.existingcliente(resultValidation.data.correo_cliente);
          if (!isclienteCreated) {
            const password = createPasswordHash(resultValidation.data.password_cliente);
            const newcliente = {
              ...resultValidation.data,
              password,
            };
            const responsecliente : any = await this.clienteRepository.postCliente(newcliente);
            const jwt = createJwt(responsecliente)
            const responseToke: AuthResponse = {
              token: jwt,
            };
            return responseToke;
          }
        }
        throw "Could not create"
      } catch (err: any) {
        console.log(err);
        throw new Error(err);
      }
    }
  
    private async existingcliente(correo_cliente: string): Promise<boolean> {
      const existingcliente = await this.clienteRepository.getClienteByCorreo(correo_cliente);
      if (existingcliente) return true;
      return false;
    }
  }