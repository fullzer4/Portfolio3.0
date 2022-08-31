import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import "../scss/home.scss"

export default function Home() {
    
    const {pageselector} = useContext(NavbarSelectContext)
    const {lang ,titlehome, subtitlehome, buttonhome, cardbutton, cardtexthomediscord, cardtexthomegithub, cardtexthomeyoutube} = useContext(SwitchLanguageContext)

    if(lang === "PT-BR"){

    }

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
                    <div className="image-card discord"/>
                    <p className="subtitle-card">{cardtexthomediscord}</p>
                    <a href="" className="buttom-card">{cardbutton}</a>
                </div>
                <div className="card">
                    <p className="title-card">Github</p>
                    <div className="image-card github"/>
                    <p className="subtitle-card">{cardtexthomegithub}</p>
                    <a href="" className="buttom-card">{cardbutton}</a>
                </div>
                <div className="card">
                    <p className="title-card">Youtube</p>
                    <div className="image-card youtube"/>
                    <p className="subtitle-card">{cardtexthomeyoutube}</p>
                    <a href="" className="buttom-card">{cardbutton}</a>
                </div>
            </div>
            <div className="send-email">
                
            </div>
        </div>
    )
  }