import './entrada.scss'
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import instagram from "../../assets/instagram.svg"
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
          <img className="icons-github" src={github}><a href='https://github.com/fullzer4'></a></img>
          <img className="icons-linkedin" src={linkedin}><a href=''></a></img>
          <img className="icons-instagram" src={instagram}><a href=''></a></img>
        </div>
        <div className="seta-entrada"></div>
      </div>
    )
  }