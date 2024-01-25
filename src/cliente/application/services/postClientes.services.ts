import { Cliente } from "../../domain/entities/clienteBd";
import { ClienteResponse } from "../../domain/entities/clienteResponse";
import { ClienteRepository } from "../../domain/repository/clienteRepository";
import { validateclient } from "../../domain/validators/cliente.validator";

export class PostClienteService {
    constructor(private readonly clienteRepository: ClienteRepository) {}
    async run(cliente: Cliente): Promise<ClienteResponse> {
      try {
        const resultValidation = validateclient(cliente);
        if (resultValidation.success) {
          const response = await this.clienteRepository.postCliente(
            resultValidation.data
          );
          return response;
        }
        //Se añade valor de validacion, por lo que no sera string
        throw new Error(resultValidation.error.message);
      } catch (err: any) {
        console.log(err);
        throw new Error(err);
      }
    }
  }