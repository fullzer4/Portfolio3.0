import Me from "../../imgs/me.svg"
import "./bemvindo.css"

export default function Bemvindo() {
    return(
      <div className="bemvindo">
        <div className="bemvindo-titulo">
          <h1 className="bemvindo-titulo-texto">Bem vindo</h1>
        </div>
        <div className="bemvindo-boximg">
          <img src={Me} alt="me"/>
        </div>
      </div>
    )
  }