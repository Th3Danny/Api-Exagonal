import { Cliente } from "../entities/clienteBd";
import { ClienteResponse } from "../entities/clienteResponse";
import { getClienteByIdDto } from "./getClienteById.dto";

export function getClienteDto(Cliente: Cliente[]): ClienteResponse[] {
    const formatedCliente: ClienteResponse[] = [];
    Cliente.forEach((Cliente) => {
      formatedCliente.push(getClienteByIdDto(Cliente));
    });
    return formatedCliente;
  }