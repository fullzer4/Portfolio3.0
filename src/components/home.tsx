import { useContext, useState } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import "../scss/home.scss"
import { DiscordContext } from "../services/apidiscord"
import { GithubContext } from "../services/apigithub"
import { YoutubeContext } from "../services/apiyotube"

export default function Home() {
    
    const {pageselector} = useContext(NavbarSelectContext)
    const {urlgit, reposgit} = useContext(GithubContext)
    const {urldiscord} = useContext(DiscordContext)
    const {urlyoutube} = useContext(YoutubeContext)
    const {lang ,titlehome, subtitlehome, buttonhome, cardbutton, cardtexthomediscord, cardtexthomegithub, cardtexthomeyoutube} = useContext(SwitchLanguageContext)
    var textrestcardgit:any

    textrestcardgit = `${reposgit} projetos e praticas postadas`
    
    if(lang === "PT-BR"){
        textrestcardgit = `${reposgit} projetos e praticas postadas`
    }else{
        textrestcardgit = `${reposgit} projects and practices posted`
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
                    <a href={urldiscord} className="buttom-card">{cardbutton}</a>
                </div>
                <div className="card">
                    <p className="title-card">Github</p>
                    <div className="image-card github"/>
                    <p className="subtitle-card">{cardtexthomegithub} {textrestcardgit}</p>
                    <a href={urlgit} className="buttom-card">{cardbutton}</a>
                </div>
                <div className="card">
                    <p className="title-card">Youtube</p>
                    <div className="image-card youtube"/>
                    <p className="subtitle-card">{cardtexthomeyoutube}</p>
                    <a href={urlyoutube} className="buttom-card">{cardbutton}</a>
                </div>
            </div>
            <div className="send-email">
                  
            </div>
        </div>
    )
  }