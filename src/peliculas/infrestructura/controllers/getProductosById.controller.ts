import { Request, Response } from "express";
import { GetProductosByIdService } from "../../aplicacion/services/getProductosById.services";

export class GetProductosByIdController {
    constructor(private readonly getProductosIdService: GetProductosByIdService) {}
    async run(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const parseId = parseInt(id);
        const result = await this.getProductosIdService.run(parseId);
        res.status(200).send(result);
      } catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
  }