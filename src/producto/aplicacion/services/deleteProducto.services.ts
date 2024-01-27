import { ProductosRepository } from "../../dominio/repositorio/productosRepository";

export class DeleteProductoByIdService {
    constructor(private readonly ProductoRepository: ProductosRepository) {}
    async run( id_producto: number): Promise<boolean> {
      try {
        const Producto = await this.ProductoRepository.getProductosById( id_producto);
        if (Producto) {
          await this.ProductoRepository.deleteByIdProductos( id_producto);
          return true;
        }
        return false;
      } catch (err: any) {
        console.log(err);
        throw new Error(err);
      }
    }
  }