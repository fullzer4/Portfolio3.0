import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/home.scss"
import { DiscordContext } from "../services/apidiscord"
import { GithubContext } from "../services/apigithub"
import { YoutubeContext } from "../services/apiyotube"
import email from "../imgs/email.svg"
import whats from "../imgs/whatsapp.svg"
import discord from "../imgs/discord.svg"

export default function Home() {
    
    const {pageselector} = useContext(NavbarSelectContext)
    const {urlgit, reposgit} = useContext(GithubContext)
    const {urldiscord, onlinediscord} = useContext(DiscordContext)
    const {urlyoutube} = useContext(YoutubeContext)
    const {lang ,titlehome, subtitlehome, buttonhome, cardbutton, cardtexthomediscord, cardtexthomegithub, cardtexthomeyoutube, entcontact} = useContext(SwitchLanguageContext)
    const {themetitulohome, themedescricaohome, buttonsobrehome, cardhometheme} = useContext(SwitchThemeContext)
    var textrestcardgit:any
    var textrestcarddiscord:any

    textrestcardgit = `${reposgit} projetos e praticas postadas.`
    textrestcarddiscord = `${onlinediscord} pessoas online.`
    
    //refazer
    if(lang === "PT-BR"){
        textrestcardgit = `${reposgit} projetos e praticas postadas.`
        textrestcarddiscord = `${onlinediscord} pessoas online.`
    
    }else{
        textrestcardgit = `${reposgit} projects and practices posted.`
        textrestcarddiscord = `${onlinediscord} people online.`
    }

    return (
        <div className="Home">
            <div className="Resumo-Home">
                <div className="Resumo-texto">
                    <h2 className={themetitulohome}>{titlehome}</h2>
                    <p className={themedescricaohome}>{subtitlehome}</p>
                    <button onClick={() => pageselector(2)} className={buttonsobrehome}>{buttonhome}</button>
                </div>
                <div className="Resumo-imagem"/>
            </div>
            <div className="Resumo-Redes">
                <div className={cardhometheme}>
                    <p className="title-card">Discord</p>
                    <div className="image-card discord"/>
                    <p className="subtitle-card">{cardtexthomediscord} {textrestcarddiscord}</p>
                    <a href={urldiscord} className="buttom-card">{cardbutton}</a>
                </div>
                <div className={cardhometheme}>
                    <p className="title-card">Github</p>
                    <div className="image-card github"/>
                    <p className="subtitle-card">{cardtexthomegithub} {textrestcardgit}</p>
                    <a href={urlgit} className="buttom-card">{cardbutton}</a>
                </div>
                <div className={cardhometheme}>
                    <p className="title-card">Youtube</p>
                    <div className="image-card youtube"/>
                    <p className="subtitle-card">{cardtexthomeyoutube}</p>
                    <a href={urlyoutube} className="buttom-card">{cardbutton}</a>
                </div>
            </div>
            <div className="Contact">
                <p>{entcontact}</p>
                <div className="Contatos">
                    <div className="card-Contact">
                        <img src={email}/><a href="mailto:gabrielpelizzaro@gmail.com?subject=subject text">gabrielpelizzaro</a>
                    </div>
                    <div className="card-Contact">
                        <img src={discord}/><p>yFullzer4#7647</p>
                    </div>
                    <div className="card-Contact">
                        <img src={whats}/><p>48 98816 8894</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }