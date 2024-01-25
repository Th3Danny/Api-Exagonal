import { Productos } from "../entidades/productosEntyBase";

export interface ProductosRepository{
    getProductos(): Promise<Productos[]>;
    getProductosById(productosId: number): Promise<Productos>;
}

