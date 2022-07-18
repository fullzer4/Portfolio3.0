import "./Incial.css"
import IncialScreen from "../../imgs/eutela.svg"

export default function Inicial() {
    return(
      <div id="box-inicial">
            <div className="box-fundo">
                <img src={IncialScreen} className="box-inicial-imagem"/>
                <div className="box-inicial-dark"/>
            </div>
            <div className="box-titulo">
                <h1>Portfolio</h1>
                <h2>Gabriel Pelizzaro PereiraFull-Stack Developer</h2>
            </div>
      </div>
    )
  }