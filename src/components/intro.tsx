import { useContext } from "react"
import "../scss/intro.scss"
import { GithubContext } from "../services/apigithub"

export default function Intro() {

    const {pegardados} = useContext(GithubContext)

    var livetexto = ""
    var live = false

    pegardados()

    if(live === false){
        var livetexto = "off"
    }else{
        var livetexto = "on"
    }

    return (
        <div className="Intro">
            <div className="Twitch">
                <div className="icon-twitch"></div><p>Live</p><p>{livetexto}</p>
            </div>
            <div className="Titulo">
                <h1>Fullzer4</h1>
            </div>
            <div className="Icons">
                <div className="icon-insta icon"></div>
                <div className="icon-twitch icon"></div>
                <div className="icon-github icon"></div>
                <div className="icon-linkedin icon"></div>
            </div>
            <div className="Arrow">
                <div className="icon-arrow"></div>
            </div>
        </div>
    )
  }
  