import { db } from "../../../shared/aplicacion/mysqlConnection";
import { Cliente } from "../../domain/entities/clienteBd";
import { ClienteRepository } from "../../domain/repository/clienteRepository";

export class MySqlRepositoryCliente implements ClienteRepository {
    getClientes(): Promise<Cliente[]> {
        const query = "select * from cliente";
        return db.execute(query).then((res: any) => res[0] as Cliente[]);
      }

      getClienteByCorreo( correo_cliente: string): Promise<Cliente> {
        const query = "SELECT * FROM cliente WHERE correo_cliente = ?";
        return db.execute(query, [correo_cliente]).then((res: any) => {
          console.log(res[0])
          return res[0][0] as Cliente;
        });
      }

      postCliente(cliente: Cliente): Promise<Cliente> {
          const {nombre_cliente, correo_cliente, password_cliente}= cliente;
          const query = "insert into cliente (nombre_cliente, correo_cliente, password_cliente) values (?,?,?)";
          return db
          .execute(query, [nombre_cliente,correo_cliente,password_cliente])
          .then(() => {
            return cliente

          })
          .catch((err: any) => {
            throw new Error(err);
          });;
          
      }



}