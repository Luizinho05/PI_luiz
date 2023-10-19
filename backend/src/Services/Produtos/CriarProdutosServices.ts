import prisma from '../../prisma'

interface CriarProduto{
    nome: string
    categoria: string
    marca: string
    tamanho: string
    quantidade: string
    preco: string
    img: string
    tipo: string
}

class CriarProdutosServices{
   async execute({
    nome,
    categoria,
    marca,
    tamanho,
    quantidade,
    preco,
    img,
    tipo
   }: CriarProduto){
        if(!nome || !categoria || !marca || !tamanho || 
            !quantidade || !preco || !img || !tipo){
            throw new Error('Campos em branco não são permitidos!')
            }

            await prisma.products.create({
                data:{
                    nome: nome,
                    categoria: categoria,
                    marca: marca,
                    tamanho: tamanho,
                    quantidade: quantidade,
                    preco: preco,
                    img: img,
                    tipo: tipo
                }
            })
            return { dados: 'Produto locado com sucesso!' }
   }
}

export { CriarProdutosServices }