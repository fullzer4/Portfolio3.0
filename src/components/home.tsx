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
                    <p>Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.</p>
                    <button onClick={() => pageselector(2)}> Mais sobre mim </button>
                </div>
                <div className="Resumo-imagem"/>
            </div>
            <div className="Resumo-Redes">
                <div className="card">
                    <p className="title-card">Discord</p>
                    <div className="image-card"/>
                    <p className="subtitle-card">Criei essa comunidade para pessoas estudarem e jogarem juntas, com atualmente 16 pessoas online.</p>
                    <a href="">Entrar</a>
                </div>
                <div className="card">
                    <p className="title-card">Github</p>
                    <div className="image-card"/>
                    <p className="subtitle-card">Onde eu posto meus codigos e dou um resumo dos meu projetos, atualmente tenho 36 projetos e praticas postadas.</p>
                    <a href="">Entrar</a>
                </div>
                <div className="card">
                    <p className="title-card">Youtube</p>
                    <div className="image-card"/>
                    <p className="subtitle-card">Criei esse canal para ajudar pessoas em programação, hoje tenho postado mais de 4 tutoriais e videos</p>
                    <a href="">Entrar</a>
                </div>
            </div>

        </div>
    )
  }