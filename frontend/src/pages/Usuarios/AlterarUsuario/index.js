import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../Context/authContext'
import apiLocal from '../../../API/apiLocal/api'

export default function AlterarUsuario(){
    const navigation = useNavigate()
    const { id } = useParams()
    const [listarUnicoUsuario, setListarUnicoUsuario] = useState('')
    const [alteraNome, setAlteraNome] = useState('')
    const [alteraEmail, setAlteraEmail] = useState('')
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect(() => {
        async function listarUsuarioUnico(){
            const resposta = await apiLocal.get(`/ListarUnicoUsuario/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            if(resposta.data.dados){
                navigation('/Login')
                return
            }
            setListarUnicoUsuario(resposta.data.id)
        }
        listarUsuarioUnico()
    }, [id])

    useEffect(() => {
        setAlteraNome(listarUnicoUsuario.alteraNome)
        setAlteraEmail(listarUnicoUsuario.alteraEmail)
    }, [listarUnicoUsuario])

    const { loginVerify } = useContext(AuthContext)

    useEffect(() => {
        const iToken = localStorage.getItem('@vistaseToken')
        const token = JSON.parse(iToken)
        if(!token){
            navigation('/Login')
            return
        }
        loginVerify()
    }, [])

    async function AlterarUsuario(e){
        e.preventDefault()
        const resposta = await apiLocal.put('/AlterarUsuario', {
            id,
            alteraNome,
            alteraEmail
        })
        toast.info(resposta.data.dados)
    }

    return(
        <div>
            <div>
                <h1>Alterar Usuário</h1>
            </div>
            <div>
                <form onSubmit={AlterarUsuario}><br/>
                <label>Nome:</label>
                <input placeholder='Digite o Novo Nome'
                type='text'
                value={alteraNome}
                onChange={(e) => setAlteraNome(e.target.value)}
                /><br/>
                <label>E-mail:</label>
                <input placeholder='Digite o Novo E-mail'
                type='email'
                value={alteraEmail}
                onChange={(e) => setAlteraEmail(e.target.value)}
                />

                <button type='submit'>Alterar</button>
                </form>
            </div>
        </div>
    )
}