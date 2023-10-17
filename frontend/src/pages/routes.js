import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "./Home"
import RoupaCasual from "./RoupaCasual"
import RoupaFormal from "./RoupaFormal"
import Contato from "./contato"
import Login from "./Login"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/RF" element={<RoupaFormal />} />
                <Route path="/RC" element={<RoupaCasual />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}
