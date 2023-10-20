import prisma from '../../prisma'

class ListarCategoriasServices {
   async execute(){
    const listarCategoria = await prisma.categorias.findMany({})
    return (listarCategoria)
   }
}

export { ListarCategoriasServices }