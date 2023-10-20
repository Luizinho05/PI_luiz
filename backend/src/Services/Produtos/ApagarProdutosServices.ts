import prisma from '../../prisma'

interface ApagarProduto{
    deletar: string
}

class ApagarProdutosServices {
  async execute({deletar}: ApagarProduto ){
      
    await prisma.products.delete({
        where:{
            id: deletar
        }
       })
       return {dados: 'Produto removido da escala!'}
  }
}

export { ApagarProdutosServices }