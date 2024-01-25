import { Request, Response } from "express";
import { PostClienteService } from "../../application/services/postClientes.services";

export class PostClienteController {
    constructor(private readonly postClienteService: PostClienteService) {}
    async run(req: Request, res: Response) {
      try {
        const cliente = req.body;
        const result = await this.postClienteService.run(cliente);
        res.status(201).send(result);
      } catch (err: any) {
        return res.status(500).send(err.message);
      }
    }
  }