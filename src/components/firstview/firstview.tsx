import "./firstview.scss"
import Twitchsvg from "../../assets/Twitch.svg"
import Twitch from "../twitch/twitch"

export default function Firstview(){
    return(
        <div id="fundo">
            <div className="box-Twitch">
                <Twitch/>
            </div>
            <div className="Titulo-intro">
                <h2>Fullzer4</h2>
            </div>
            <div className="Icons-intro">
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </div> 
        </div>
    )
}