import prisma from '../../prisma'

interface AlterarCliente{
    id:           string
    alteraIdade:  string
    alteraCasa:   string
    alteraCidade: string
}

class AlterarClientesServices{
    async execute({
        id,
        alteraIdade,
        alteraCasa,
        alteraCidade
    }:AlterarCliente){
       
        await prisma.client.update({
            where:{
                id: id
            },
            data:{
                idade: alteraIdade,
                casa: alteraCasa,
                cidade: alteraCidade
            }
        })
        return { dados: 'Dados Alterados com sucesso!' }
    }
}

export { AlterarClientesServices }