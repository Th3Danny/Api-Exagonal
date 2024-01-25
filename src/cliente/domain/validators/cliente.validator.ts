import z from "zod";
import { Cliente } from "../entities/clienteBd";

const clienteSchema = z.object({
    id_cliente: z
      .number({
        invalid_type_error: "id_client must be a number",
      })
      .optional(),
      nombre_cliente: z.string({
      invalid_type_error: "nombre must be a string",
      required_error: "nombre is required",
    }),
    correo_cliente: z.string({
      invalid_type_error: "correo must be a string",
      required_error: "correo is required",
    }),
    password_cliente: z.string({
      invalid_type_error: "password must be",
      required_error: "password is required",
    }),
  });
  
  export const validateclient = (cliente: Cliente) => {
    return clienteSchema.safeParse(cliente);
  };
  
  export const validatePartialclient = (cliente: Cliente) => {
    return clienteSchema.partial().safeParse(cliente);
  };