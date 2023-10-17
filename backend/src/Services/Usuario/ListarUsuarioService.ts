import prisma from "../../prisma";

export class ListarUsuarioService {
    async execute() {
        const response = await prisma.user.findMany({})
        return response
    }
}
