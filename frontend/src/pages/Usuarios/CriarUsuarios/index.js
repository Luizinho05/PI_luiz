import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/authContext'

export default function CriarUsuario(){
    const navigation = useNavigate()
    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return(
        <div>

        </div>
    )
}