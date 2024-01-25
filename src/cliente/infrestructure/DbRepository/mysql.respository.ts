import { db } from "../../../shured/aplicacion/mysqlConnection";
import { Cliente } from "../../domain/entities/clienteBd";
import { ClienteRepository } from "../../domain/repository/clienteRepository";

export class MySqlRepositoryCliente implements ClienteRepository {
    getClientes(): Promise<Cliente[]> {
        const query = "select * from cliente";
        return db.execute(query).then((res: any) => res[0] as Cliente[]);
      }

      getClienteById(clienteId: number): Promise<Cliente> {
        const query = "SELECT * FROM cliente where id_cliente = ?";
        return db.execute(query, [clienteId]).then((res: any) => {
          console.log(res[0])
          return res[0][0] as Cliente;
        });
      }

}