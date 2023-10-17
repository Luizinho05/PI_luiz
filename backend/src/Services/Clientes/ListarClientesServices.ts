import prisma from '../../prisma'

class ListarClientesServices {
  async execute(){
    const clientes = await prisma.client.findMany({})
    return (clientes)
  }
}

export { ListarClientesServices }