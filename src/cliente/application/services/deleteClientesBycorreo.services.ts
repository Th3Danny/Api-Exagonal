import { ClienteRepository } from "../../domain/repository/clienteRepository";

export class DeleteClienteByCorreoService{
    constructor (private readonly clienteRepositosy: ClienteRepository){}
    async run(correo_cliente: string): Promise<boolean> {
        try{
            const cliente = await this.clienteRepositosy.getClienteByCorreo(correo_cliente);
            if(cliente){
                await this.clienteRepositosy.deleteClienteByCorreo(correo_cliente)
                return true;
            }
            return false;

        }catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}