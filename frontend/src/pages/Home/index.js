import "./Home.css"
import placeholder from "../../imgs/placeholder.png"


export default function Home() {
    return (
        <>

            <h1 className="aligntitle">De uma cara nova a você!</h1><br />
            <h1 className="aligntitle">O que você está procurando hoje?</h1> <br />


            <div className="aligncard">
                <div className="container-fluid container-sm">
                    <div className="row">

                        <div className="col ">

                            <div className="card bg-dark" >
                                <img className="card-img-top" src={placeholder}  href="/RC" alt="" />
                                <div className="card-body">
                                    <a role="button" className="btn btn-lg btn-primary text-light" href="/RC">Que tal algo Casual?</a>
                                </div>
                            </div>

                        </div>


                        <div className="col">

                            <div className="card bg-dark" >
                                <img className="card-img-top" src={placeholder}  href="/RF" alt="" />
                                <div className="card-body">
                                    <a href="/RF" role="button" className="btn btn-lg btn-primary text-light" >Ou algo mais Formal?</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <br /> <br /> <br />

            <div className="aligntitle">
            <iframe className="infoimg" src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1682700719790!5m2!1spt-BR!2sbr!6m8!1m7!1sOl_fj7z160r-p6iukKwBdA!2m2!1d-22.32273983541924!2d-49.07311861978143!3f205.56627829299012!4f0.5329224861639688!5f0.7820865974627469" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /><br />
            <p className="info">Loja sob-reforma</p>
            </div>

            <br /> <br />

            <div className="aligntitle">
                <a>Encontrou algum erro ou gostaria de enviar alguma recomendação?</a>
                <a href="/contato"> Contate-nos</a>
            </div>

            <br />  

        </>
    )
}