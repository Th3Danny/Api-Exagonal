import { Request, Response } from "express";
import { GetClienteByIdService } from "../../application/services/getClientesById.services";

export class GetClienteByIdController {
    constructor(private readonly getClienteByIdService: GetClienteByIdService) {}
    async run(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const parseId = parseInt(id);
        const result = await this.getClienteByIdService.run(parseId);
        res.status(200).send(result);
      } catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
  }