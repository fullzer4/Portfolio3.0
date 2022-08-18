import "../scss/intro.scss"
import live from "../services/apitwitch"

export default function Intro() {
    var livetexto = ""

    if(live === false){
        var livetexto = "off"
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
  