import { db } from "../../../shared/aplicacion/mysqlConnection";
import { Productos } from "../../dominio/entidades/productosEntyBase";
import { ProductosRepository } from "../../dominio/repositorio/productosRepository";

export class MySQLRepositoryProductos implements ProductosRepository {
    getProductos(): Promise<Productos[]> {
      const query = "SELECT * FROM producto";
      return db.execute(query).then((res: any) => {
        return res[0] as Productos[];
      });
    }
  
    getProductosById(productoId: number): Promise<Productos> {
      const query = "SELECT * FROM producto where id_producto = ?";
      return db
        .execute(query, [productoId])
        .then((res: any) => {
          console.log(res);
          return res[0][0] as Productos;
        })
        .catch((err: any) => {
          throw new Error(err);
        });
    }

    postProductos(producto: Productos): Promise<Productos> {
      const { nombre,precio, cantidad  } = producto;
      const query = `insert into producto (nombre, precio, cantidad) values (?,?,?)`;
      return db
        .execute(query, [nombre, precio, cantidad])
        .then(() => {
          return producto;
        })
        .catch((err: any) => {
          throw new Error(err);
        });
    }

    deleteByIdProductos(id_producto: number): Promise<void> {
      const query="delete from producto where id_producto = ?;"
      return db.execute(query,[id_producto]).then((res:any)=> res[0] as void)
    }
}