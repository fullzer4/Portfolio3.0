import eu from "../../imgs/eu.svg"
import "./bemvindo.css"
import AOS from "aos"
import github from "../../imgs/github.svg"
import linkedin from "../../imgs/linkedin.svg"
import instagram from "../../imgs/Instagram.svg"

export default function Bemvindo() {
    AOS.init({
        delay: 0,
        duration: 500
    })
    return(
        <div className="bemvindo">
            <div className="bemvindo-principal">
                <div className="bemvindo-texto" data-aos="fade-right">
                    <h1>Bem vindo<p/>sou o Gabriel Pelizzaro<p/>FullstackDev</h1>
                </div>
                <div className="bemvindo-foto" data-aos="fade-left">
                    <img src={eu} alt="foto minha"></img>
                </div>
            </div>
            <div className="bemvindo-secundario">
                <div className="bemvindo-divisao" data-aos="fade-in"></div>
                <div className="bemvindo-mensagem" data-aos="fade-up">
                    <h2>Tenho 16 anos e estudo programação desde os meus 10 anos de idade, se precisar de ajudar entra em contato comigo nas redes a baixo.</h2>
                </div>
                <div className="bemvindo-redessociais" data-aos="fade-up">
                    <a href="https://github.com/fullzer4" className="redes"><img src={github} alt="github"></img></a>
                    <a href="https://www.instagram.com/yfullzer4.exe/" className="redes"><img src={instagram} alt="instagram"></img></a>
                    <a href="https://www.linkedin.com/in/gabrielpereira-sc/" className="redes"><img src={linkedin} alt="linkedin"></img></a>
                </div>
            </div>
        </div>
    )
  }