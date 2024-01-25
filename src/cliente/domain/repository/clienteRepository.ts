import { Cliente } from "../entities/clienteBd";

export interface ClienteRepository {
  getClientes(): Promise<Cliente[]>;
  getClienteById(clienteId: number): Promise<Cliente>;

}
