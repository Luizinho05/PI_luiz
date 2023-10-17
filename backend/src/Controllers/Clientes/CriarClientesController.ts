import { Request, Response } from 'express'
import { CriarClientesServices } from '../../Services/Clientes/CriarClientesServices'

class CriarClientesController {
    async handle(req: Request, res: Response){
    const { nome, idade, cpf_cnpj, rg_ie, casa, cidade } = req.body
    const criarClientesServices = new CriarClientesServices()
    const cliente = await criarClientesServices.execute({
        nome,
        idade,
        cpf_cnpj,
        rg_ie,
        casa,
        cidade
    })
    return res.json(cliente)
    }
}

export { CriarClientesController }