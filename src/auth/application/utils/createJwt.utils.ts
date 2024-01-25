import jwt from "jsonwebtoken";
import { SECRET_KEY_JWT } from "../../domain/constants/secretKeyJwt";

export const createJwt = (cliente: any) => {
    console.log(cliente)
    const payload = {
        correo_cliente: cliente.correo_cliente
    }
    console.log(payload)
    const token = jwt.sign(payload, SECRET_KEY_JWT, { expiresIn: "1h" });
    return token;
}