import { Productos } from "../../dominio/entidades/productosEntyBase";
import { ProductosRs } from "../../dominio/entidades/productosResponse";
import { validateProducto } from "../../dominio/validators/productos.validator";
import { ProductosRepository } from "../../dominio/repositorio/productosRepository";

export class PostProductoService {
    constructor(private readonly ProductoRepository: ProductosRepository) {}
    async run(Producto: Productos): Promise<ProductosRs> {
      try {
        const resultValidation = validateProducto(Producto);
        if (resultValidation.success) {
          const response = await this.ProductoRepository.postProductos(
            resultValidation.data
          );
          return response;
        }
        //Se añade valor de validacion, por lo que no sera string
        throw new Error(resultValidation.error.message);
      } catch (err: any) {
        console.log(err);
        throw new Error(err);
      }
    }
  }