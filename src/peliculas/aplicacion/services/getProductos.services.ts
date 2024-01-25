import { getProductosDto } from "../../dominio/dtos/getProductos.dto";
import { ProductosRs } from "../../dominio/entidades/productosResponse";
import { ProductosRepository } from "../../dominio/repositorio/productosRepository";

export class GetProductosService{
    constructor (private readonly ProductosRepository: ProductosRepository){}
    async run(): Promise<ProductosRs[]>{
        try{
            const response = await this.ProductosRepository.getProductos();
            if (response) {
                const formatedResponse= getProductosDto(response);
                return formatedResponse;
            }
            return response;
        } catch (err: any){
            console.log(err);
            throw new Error(err);
        }
    }
}