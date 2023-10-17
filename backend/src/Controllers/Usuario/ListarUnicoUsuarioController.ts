import { Request, Response } from "express";
import { ListarUnicoUsuarioService } from "../../Services/Usuario/ListarUnicoUsuarioService";

export class ListarUnicoUsuarioController {
    async handle(req: Request, res: Response) {
        const { usuarioId } = req.body
        const listarUnico = new ListarUnicoUsuarioService()
        const response = await listarUnico.execute({
            usuarioId
        })
        return res.json(response)
    }
}