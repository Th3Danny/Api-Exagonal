import { Request, Response } from "express";
import { PostProductoService } from "../../aplicacion/services/postProductos.services";

export class PostProductoController {
    constructor(private readonly postProductoService: PostProductoService) {}
    async run(req: Request, res: Response) {
      try {
        const productos = req.body;
        const result = await this.postProductoService.run(productos);
        res.status(201).send(result);
      } catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
  }