import { Request, Response } from 'express'
import { CriarProdutosServices } from '../../Services/Produtos/CriarProdutosServices'

class CriarProdutosController {
    async handle(req: Request, res: Response){
    const { img, nome, categoria, marca, tipo, tamanho, quantidade, preco } = req.body
    const criarProdutosServices = new CriarProdutosServices()
    const produto = await criarProdutosServices.execute({
       img,
       nome,
       categoria,
       marca,
       tipo,
       tamanho,
       quantidade,
       preco
    })
    return res.json(produto)
    }
}

export { CriarProdutosController }