import prisma from "../../prisma";

interface DeletarCliente{
    apagar: string
}

class DeletarClienteServices{
    async execute({apagar}: DeletarCliente){
      
        await prisma.client.delete({
            where:{
                id: apagar
            }
        })
        return { dados: 'Dados deletados com sucesso!' }
    }
}

export { DeletarClienteServices }