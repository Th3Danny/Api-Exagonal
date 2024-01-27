import { Cliente } from "../entities/clienteBd";

export interface ClienteRepository {
  getClientes(): Promise<Cliente[]>;
  getClienteByCorreo(correo_cliente: string): Promise<Cliente>;
  postCliente(cliente: Cliente): Promise<Cliente>
  deleteClienteByCorreo(correo_cliente: string):Promise<void>

}
