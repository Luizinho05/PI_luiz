import { Request, Response } from 'express'
import { AlterarClientesServices } from '../../Services/Clientes/AlterarClientesServices'

class AlterarClientesController{
     async handle(req: Request, res: Response){
         const { id, alteraIdade, alteraCasa, alteraCidade } = req.body
         const alterarClientesServices = new AlterarClientesServices()
         const update = await alterarClientesServices.execute({
            id,
            alteraIdade,
            alteraCasa,
            alteraCidade
         })
         return res.json(update)
     }
}

export { AlterarClientesController }