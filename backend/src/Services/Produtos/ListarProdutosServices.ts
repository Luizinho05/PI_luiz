import prisma from "../../prisma";

class ListarProdutosServices {
  async execute(){
    const produtos = await prisma.products.findMany({})
    return (produtos)
  }
}

export { ListarProdutosServices }