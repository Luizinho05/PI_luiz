import prismaClient from "../../prisma"

interface Alterar {
    usuarioId: string
    novoNome: string
    novoEmail: string
}

export class AlterarUsuarioService {
    async execute({ usuarioId, novoNome, novoEmail }: Alterar) {

        if (!usuarioId || !novoNome || !novoEmail) {
            throw new Error("Campos obrigatórios em branco!")
        }

        await prismaClient.user.update({
            where: {
                id: usuarioId
            },
            data: {
                nome: novoNome,
                email: novoEmail
            }
        })
        return { dados: "Usuario alterado com sucesso" }
    }
}