import { Router } from "express";
import { registerAuthController } from "./auth.dependencias";

const authRouter = Router();

authRouter
.post('/register', registerAuthController.run.bind(registerAuthController))

export default authRouter