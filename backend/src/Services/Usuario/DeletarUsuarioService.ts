import prismaClient from "../../prisma";

interface Deletar {
    usuarioId: string
}

export class DeletarUsuarioService {
    async execute({ usuarioId }: Deletar) {

        if (!usuarioId) {
            throw new Error("Campos obrigatórios em branco!")
        }

        if (!usuarioId) {
            throw new Error("Campos obrigatórios em branco!")
        }

        await prismaClient.user.delete({
            where: {
                id: usuarioId
            }
        })

        return { dados: "Usuario deletado com sucesso" }
    }
}