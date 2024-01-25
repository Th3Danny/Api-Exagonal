import { Request, Response } from "express";
import { GetProductosService } from "../../aplicacion/services/getProductos.services";

export class GetProductosController {
    constructor(private readonly GetProductosService: GetProductosService) {}
    async run(req: Request, res: Response) {
      try {
        const result = await this.GetProductosService.run();
        res.status(200).send(result);
      } catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
  }