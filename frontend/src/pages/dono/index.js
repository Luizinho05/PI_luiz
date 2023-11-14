import { Link } from "react-router-dom"
import './dono.scss'

export default function Donos(){
    return(
        <div className="conteinerEscolha">
          <p>Você é :</p>
          <button><Link to='/Home'>Cliente</Link></button>
          <button><Link to='/Login'>Administrador</Link></button>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/><br/><br/><br/><br/><br/>
        </div>
    )
}