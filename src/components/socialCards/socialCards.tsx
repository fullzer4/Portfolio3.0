import { useContext } from "react"
import {ApiDiscordContext} from "../../contexts/apiDiscord"
import "./socialcards.css"
import imgdiscord from "../../imgs/serverdisc.svg"
import imgyoutube from "../../imgs/youtubeicon.svg"

export default function SocialCards(){
    const {fdiscord, servername, invite, onlineusers} = useContext(ApiDiscordContext)

    fdiscord()

    return(
        <div className="cards">
            <div className="card-discord">
                <h1 className="card-titulo">{servername}</h1>
                <img src={imgdiscord} alt="imagem server discord" className="card-imagens"/>
                <h2 className="card-descri">users online: {onlineusers}</h2>
                <a href={invite} className="card-botao">Entrar</a>
            </div>
            <div className="card-youtube">
                <h1 className="card-titulo">Canal do youtube</h1>
                <img src={imgyoutube} alt="imagem de perfil youtube" className="card-imagens"/>
                <h2 className="card-descri">yFullzer4</h2>
                <a href="https://www.youtube.com/channel/UCKsvtOneTEJm9z80MbbfKfg" className="card-botao">Entrar</a>
            </div>
        </div>
    )
}