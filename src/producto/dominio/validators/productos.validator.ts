import z from "zod";
import { Productos } from "../entidades/productosEntyBase";

const ProductoSchema = z.object({
    id_producto: z
      .number({
        invalid_type_error: "idProducto no puede ser string",
      })
      .optional(),
      nombre: z.string({
      invalid_type_error: "nombre must be a string",
      required_error: "nombre is required",
    }),
    precio: z.number({
      invalid_type_error: "precio must be a number",
      required_error: "procio is required",
    }),
    cantidad:z.number({
        invalid_type_error: "cantidad must be a number",
        required_error: "cantidad is required",
      }),
  });
  
  export const validateProducto = (Producto: Productos) => {
    return ProductoSchema.safeParse(Producto);
  };
  
  export const validatePartialProducto = (Producto: Productos) => {
    return ProductoSchema.partial().safeParse(Producto);
  };