import { Request, Response } from "express";
import { GetClientesService } from "../../application/services/getClientes.service";

export class GetClientesController {
    constructor(private readonly getClientesService: GetClientesService) {}
    async run(_req: Request, res: Response) {
      try {
        const result = await this.getClientesService.run();
        return res.status(200).json(result);
      } catch (err: any) {
        res.status(500).send(err.message);
      }
    }
  }