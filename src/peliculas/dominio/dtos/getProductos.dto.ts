import { Productos } from "../entidades/productosEntyBase";
import { ProductosRs } from "../entidades/productosResponse";
import { getProductosByIdDto } from "./getProductosById.dto";
export function getProductosDto(productos: Productos[]): ProductosRs[]{
    const formatedProductos: ProductosRs[]=[];
    productos.forEach((productos)=> {
        formatedProductos.push(getProductosByIdDto(productos));
    })
    return formatedProductos;
}