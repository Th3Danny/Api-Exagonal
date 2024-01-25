import { getClienteDto } from "../../domain/dtos/getCliente.dto";
import { ClienteResponse } from "../../domain/entities/clienteResponse";
import { ClienteRepository } from "../../domain/repository/clienteRepository";

export class GetClientesService {
    constructor(private readonly ClienteRepository: ClienteRepository) {}
    async run(): Promise<ClienteResponse[]> {
      try {
        const response = await this.ClienteRepository.getClientes();
        if (response.length) {
          const formatedResponse = getClienteDto(response);
          return formatedResponse;
        }
        return response;
      } catch (err: any) {
        console.error(err);
        throw new Error(err);
      }
    }
  }