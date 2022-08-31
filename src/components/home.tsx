import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import "../scss/home.scss"

export default function Home() {
    
    const {pageselector} = useContext(NavbarSelectContext)
    const {titlehome, subtitlehome, buttonhome} = useContext(SwitchLanguageContext)

    return (
        <div className="Home">
            <div className="Resumo-Home">
                <div className="Resumo-texto">
                    <h2 className="Resumo-texto-titulo">{titlehome}</h2>
                    <p>{subtitlehome}</p>
                    <button onClick={() => pageselector(2)}>{buttonhome}</button>
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