import { useContext } from "react"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import "../scss/intro.scss"
import { DiscordContext } from "../services/apidiscord"
import { GithubContext } from "../services/apigithub"
export default function Intro() {

    const {pegardadosgit, urlgit} = useContext(GithubContext)
    const {pegardadosdiscord} = useContext(DiscordContext)
    const {langswitcher, lang, imglang} = useContext(SwitchLanguageContext)
    pegardadosgit()
    pegardadosdiscord()

    var livetexto = ""
    var estilolive = ""
    var live = false

    if(live === false){
        livetexto = "off"
        estilolive = "live-off"

    }else{
        livetexto = "on"
        estilolive = "live-on"
    }

    return (
        <div className="Intro">
            <div className="Twitch">
                <div onClick={langswitcher}>
                    <div className={imglang}/>
                    <p>{lang}</p>
                </div>
                <a className="Twitch-box" href="https://www.twitch.tv/yfullzer4">
                    <div className="icon-twitch"></div><p>Live</p><p className={estilolive}>{livetexto}</p>
                </a>
            </div>
            <div className="Titulo">
                <h1>Fullzer4</h1>
            </div>
            <div className="Icons">
                <a href=""  className="icons-insta icon"></a>
                <a href="" className="icons-twitch icon"></a>
                <a href={urlgit} className="icons-github icon"></a>
                <a href="" className="icons-linkedin icon"></a>
            </div>
            <div className="Arrow">
                <div className="icon-arrow"></div>
            </div>
        </div>
    )
  }
  