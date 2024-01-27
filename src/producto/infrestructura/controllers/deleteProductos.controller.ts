import { DeleteProductoByIdService } from "../../aplicacion/services/deleteProducto.services";
import { Request, Response } from "express";

export class DeleteProductoByIdController {
    constructor(private readonly deleteProductoService: DeleteProductoByIdService) {}

    async run(req: Request, res: Response) {
        try {
            const id_producto: number | undefined = parseInt(req.params.id_producto, 10);

            if (isNaN(id_producto) || id_producto === undefined) {
                return res.status(400).json("ID de producto no proporcionado o no válido");
            }

            const handleError = await this.deleteProductoService.run(id_producto);

            if (handleError) {
                return res.status(200).json("Eliminación correcta");
            }

            return res.status(404).json("Error al eliminar el producto");
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}
