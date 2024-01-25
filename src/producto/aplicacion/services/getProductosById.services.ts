import { getProductosByIdDto } from "../../dominio/dtos/getProductosById.dto";
import { ProductosRs } from "../../dominio/entidades/productosResponse";
import { ProductosRepository } from "../../dominio/repositorio/productosRepository";

export class GetProductosByIdService {
    constructor(private readonly ProductosRepository: ProductosRepository) {}
    async run(productosId: number): Promise<ProductosRs> {
      try {
        const response = await this.ProductosRepository.getProductosById(productosId);
        if (response) {
          console.log(response)
          const formatedResponse = getProductosByIdDto(response);
          return formatedResponse;
        }
        return {} as ProductosRs;
      } catch (err: any) {
        console.log(err);
        throw new Error(err);
      }
    }
}  