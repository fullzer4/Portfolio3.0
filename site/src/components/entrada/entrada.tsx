import './entrada.scss'
import github from "../../assets/github.svg"
import linkedin from "../../assets/github.svg"
import instagram from "../../assets/github.svg"
export default function Entrada() {
    return(
      <div id="entrada">
         <div className="logo-entrada">
          <h1>Fullzer4</h1>
        </div>
        <div className="texto-entrada">
          <h2>Portfolio</h2>
          <p>Gabriel Pelizzaro Pereira<br/>Full-Stack Developer</p>
        </div>
        <div className="icons-entrada">
          <img className="icons-github" src={github}></img>
          <img className="icons-linkedin" src={linkedin}></img>
          <img className="icons-instagram" src={instagram}></img>
        </div>
        <div className="seta-entrada"></div>
      </div>
    )
  }