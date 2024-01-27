import { DeleteClienteByCorreoService } from "../../application/services/deleteClientesBycorreo.services";
import { Request, Response } from "express";

export class DeleteClienteByCorreoController{
    constructor (private readonly deleteClienteService: DeleteClienteByCorreoService){}
    async run(req: Request, res: Response){
        try{
            const {correo_cliente} = req.params;
            const handleError = await this.deleteClienteService.run(correo_cliente);
            if(handleError) return res.status(200).json("Eliminacion correcta")
            return res.status(404).json("Error al elimar cliente");
        }catch (err: any) {
            return res.status(500).send(err.message);
          }
    }
}