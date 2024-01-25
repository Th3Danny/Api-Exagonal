import z from "zod";
import { AuthRequest } from "../entities/authRequest";

const authSchema = z.object({
    correo_cliente: z.string({
      invalid_type_error: "correo must be a string",
      required_error: "correo is required",
    }),
    password_cliente: z.string({
      invalid_type_error: "password must be a string",
      required_error: "password is required",
    }),
  });
  
  export const validateAuth = (auth: AuthRequest) => {
    return authSchema.safeParse(auth);
  };