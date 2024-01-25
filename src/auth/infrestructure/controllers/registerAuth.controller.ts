import { Request, Response } from "express";
import { RegisterAuthService } from "../../application/services/resgisterAuth.services";

export class RegisterAuthController {
    constructor(private readonly registerAuthService: RegisterAuthService) {}
    async run(req: Request, res: Response) {
      try {
        const cliente = req.body;
        const jwtResult = await this.registerAuthService.run(cliente);
        return res.status(200).json(jwtResult);
      } catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
  }