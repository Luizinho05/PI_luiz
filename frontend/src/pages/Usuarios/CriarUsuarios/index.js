import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/authContext'
import apiLocal from '../../../API/apiLocal/api'
import { toast } from 'react-toastify'
import './insert.scss'

export default function CriarUsuario(){
    const navigation = useNavigate()
    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

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

    async function handleCadastrar(e){
        e.preventDefault()
        try{
           if (!nome || !email || !password){
            toast.warn('Campos em branco não são permitidos!')
           }
           await apiLocal.post('/CriarUsuario', {
             nome,
             email,
             password
           })
           toast.success('Usuário cadastrado com sucesso!')
           navigation('/ListarUsuario')
        } catch (err){
           toast.error(err.response.data.error)
        }
    }

    return(
        <div className='container-fluid alignform'>
          <div>
             <h1>Cadastro Usuário</h1>
          </div>
          <div className='formInicio'>
            <form onSubmit={handleCadastrar}>
              <label>Nome:</label>
              <input
              type='text'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              />
              <label>Email:</label>
              <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <label>Senha:</label>
              <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit'>Cadastrar</button>
            </form>
          </div>
        </div>
    )
}