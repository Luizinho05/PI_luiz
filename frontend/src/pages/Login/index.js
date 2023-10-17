import React, { useState } from 'react'
import "./Login.css"

export default function Login() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    function handleLogin(event) {
        event.preventDefault()
        if (nome === '' || email === '' || senha === '') {
            alert('Tem Campos em branco')
            return
        }
        alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha}`)
    }


    return (
        <div className='container-fluid alignform'>
            <br />

            <h1>Login Vista-se !</h1><br />


            <form onSubmit={handleLogin}>


                <label><strong>Nome:</strong></label>
                <input
                    type='text'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}

                /><br />
                <label><strong>E-mail:</strong></label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                /><br />
                <label><strong>Senha:</strong></label>
                <input
                    type='password'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}

                /><br /><br />


                <button type='submit' ><strong>logar</strong></button>
            </form>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}