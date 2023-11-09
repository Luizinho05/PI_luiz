import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiLocal from '../../API/apiLocal/api'

export default function Dashboard(){
    const navigation = useNavigate()
    const iToken = localStorage.getItem('@vistaseToken')
    const token = JSON.parse(iToken)

    useEffect (() => {
        if(!token){
        navigation('/')
        return
        } else if(token){
            async function verificaToken(){
                const resposta = await apiLocal.get('/ListarUsuarioToken', {
                    headers: {
                        Authorization: 'Bearer ' + `${token}`
                    }
                })
                if(resposta.data.dados){
                    navigation('/')
                    return
                } else if (resposta.data.id){
                    navigation('/Dashboard')
                }
            }
            verificaToken()
        }
    }, [token])


    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}