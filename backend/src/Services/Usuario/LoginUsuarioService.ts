import prisma from "../../prisma";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface Login {
    email: string
    password: string
}

export class LoginUsuarioService {
    async execute({ email, password }: Login) {

        if (!email || !password) {
            throw new Error("Campos obrigatórios em branco!")
        }

        const usuario = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (!usuario) {
            throw new Error("Usuário/Senha incorretos!")
        }

        //Utilizar o password do frontend e o usuario que foi encontrado
        //pelo email
        const auth = await compare(password, usuario.senha)
        if (!auth) {
            throw new Error("Usuário/Senha incorretos!")
        }

        const tokenAutenticado = sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.AUTH_TOKEN,
            {
                subject: usuario.id,
                expiresIn: "1h"
            }
        )

        return {
            id: usuario.id,
            email: email,
            token: tokenAutenticado
        }
    }
}