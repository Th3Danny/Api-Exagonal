import { Productos } from "../entidades/productosEntyBase";
import { ProductosRs } from "../entidades/productosResponse";

export function getProductosByIdDto(productos: Productos): ProductosRs {
    return {
        nombre: productos.nombre || "",
        precio: productos.precio || 0,
        cantidad: productos.cantidad || 0,
    }
}