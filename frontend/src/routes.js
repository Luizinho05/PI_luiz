import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Donos from "./pages/dono"
import Home from "./pages/Home"
import RoupaCasual from "./pages/RoupaCasual"
import RoupaFormal from "./pages/RoupaFormal"
import Contato from "./pages/contato"
import Login from "./pages/Login"
import Dashboard from "./pages/dashboard"
import CriarUsuario from './pages/Usuarios/CriarUsuarios'
import ListarUsuario from "./pages/Usuarios/ListarUsuario"
import AlterarUsuario from "./pages/Usuarios/AlterarUsuario"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Donos />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/RF" element={<RoupaFormal />} />
                <Route path="/RC" element={<RoupaCasual />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path='/CriarUsuario' element={<CriarUsuario />}/>
                <Route path='/ListarUsuario' element={<ListarUsuario />}/>
                <Route path='/AlteraUsuario/:id' element={<AlterarUsuario/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}
