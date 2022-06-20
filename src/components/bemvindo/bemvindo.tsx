import eu from "../../imgs/eu.svg"
import "./bemvindo.css"

export default function Bemvindo() {
    return(
        <div className="bemvindo">
            <div className="bemvindo-principal">
                <div className="bemvindo-texto">
                    <h1>Bem vindo, sou o Gabriel Pelizzaro- FullstackDev</h1>
                </div>
                <div className="bemvindo-foto">
                    <img src={eu} alt="foto minha"></img>
                </div>
            </div>
            <div className="bemvindo-secundario">
                <div className="bemvindo-mensagem">
                    <h2>Tenho 16 anos e estudo programação desde os meus 10 anos de idade, se precisar de ajudar entra em contato comigo nas redes a baixo.</h2>
                </div>
            </div>
        </div>
    )
  }