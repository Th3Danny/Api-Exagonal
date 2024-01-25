import { Request, Response } from "express";
import { GetClienteByCorreoService } from "../../application/services/getClientesById.services";

export class GetClienteByCorreoController {
    constructor(private readonly getClienteByCorreoService: GetClienteByCorreoService) {}
    async run(req: Request, res: Response) {
      try {
        const { correo_cliente } = req.params;
        const result = await this.getClienteByCorreoService.run(correo_cliente);
        if (result.correo_cliente !== "") return res.status(200).send(result);
        return res.status(404).send(result);
      } catch (err: any) {
        res.status(500).send(err.message);
      }
    }
  }