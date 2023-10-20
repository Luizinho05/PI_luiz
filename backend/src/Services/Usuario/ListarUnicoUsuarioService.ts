import prismaClient from "../../prisma";

interface ListarUnico {
    usuarioId: string
}

export class ListarUnicoUsuarioService {
    async execute({ usuarioId }: ListarUnico) {

        if (!usuarioId) { throw new Error("Campos obrigatórios em branco!") }

        const response = await prismaClient.user.findUnique({
            where: {
                id: usuarioId
            },
            select: {
                nome: true,
                email: true
            }
        })
        return response
    }
}