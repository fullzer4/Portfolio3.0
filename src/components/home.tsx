import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import "../scss/home.scss"

export default function Home() {
    
    const {pageselector} = useContext(NavbarSelectContext)

    return (
        <div className="Home">
            <div className="Resumo-Home">
                <div className="Resumo-texto">
                    <h2 className="Resumo-texto-titulo">Bem vindo</h2>
                    <p>Sou o Gabriel tenho 16 anos e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo.</p>
                    <button onClick={() => pageselector(2)}> Mais sobre mim </button>
                </div>
                <div className="Resumo-imagem"/>
            </div>
            <div className="Resumo-Redes">
                
            </div>
        </div>
    )
  }