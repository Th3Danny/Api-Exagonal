import { getClienteByIdDto } from "../../domain/dtos/getClienteById.dto";
import { ClienteRepository } from "../../domain/repository/clienteRepository";
import { ClienteResponse } from "../../domain/entities/clienteResponse";

export class GetClienteByIdService {
    constructor(private readonly ClienteRepository: ClienteRepository) {}
    async run(clienteId: number): Promise<ClienteResponse> {
      try {
        const response = await this.ClienteRepository.getClienteById(clienteId);
        if (response) {
          console.log(response)
          const formatedResponse = getClienteByIdDto(response);
          return formatedResponse;
        }
        return {} as ClienteResponse;
      } catch (err: any) {
        console.log(err);
        throw new Error(err);
      }
    }
  }