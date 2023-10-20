import prismaClient from "../../prisma";

interface CriarClientes {
    nome: string
    idade: string
    cpf_cnpj: string
    rg_ie: string
    casa: string
    cidade: string
}

class CriarClientesServices {
  async execute({
    nome,
    idade,
    cpf_cnpj,
    rg_ie,
    casa,
    cidade
  }: CriarClientes){
     if(!nome || !idade || !cpf_cnpj || !rg_ie || !casa || !cidade){
        throw new Error('Faltou um ou mais campos sem registro!')
     }
     
    const DocJaCadastrado = await prismaClient.client.findFirst({
        where:{
            OR: [
                {
                  cpf_cnpj: cpf_cnpj
                }, 
                {
                  rg_ie: rg_ie
                }
            ]
        }
    })

    if (DocJaCadastrado){
        throw new Error('CPF/CNPJ ou RG/IE já registrado!')
    }
    
    await prismaClient.client.create({
        data:{
          nome: nome,
          idade: idade,
          cpf_cnpj: cpf_cnpj,
          rg_ie: rg_ie,
          casa: casa,
          cidade: cidade
        }
    })
    return { dados: 'Cliente registrado com sucesso!' }
  }
}

export { CriarClientesServices }