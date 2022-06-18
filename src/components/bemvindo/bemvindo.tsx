import Me from "../../imgs/me.svg"
import "./bemvindo.css"
import AOS from "aos"

export default function Bemvindo() {
  AOS.init({
    delay: 250,
    duration: 500
  })
  return(
    <div className="bemvindo">
      <div className="bemvindo-titulo" data-aos="fade-down">
        <h1 className="bemvindo-titulo-texto">Bem vindo</h1>
      </div>
      <div className="bemvindo-boximg" data-aos="fade-down">
        <img src={Me} alt="me"/>
      </div>
    </div>
  )
}