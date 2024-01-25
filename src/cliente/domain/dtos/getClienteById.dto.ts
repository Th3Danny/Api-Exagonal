import { Cliente } from "../entities/clienteBd";
import { ClienteResponse } from "../entities/clienteResponse";

export function getClienteByIdDto(cliente: Cliente): ClienteResponse {
    return {
        nombre_cliente: cliente.nombre_cliente,
        correo_cliente: cliente.correo_cliente,
        password_cliente: cliente.password_cliente
    };
}