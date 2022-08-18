import "./firstview.scss"
import Twitchsvg from "../../assets/Twitch.svg"
import Fullzer4 from "../../assets/fullzer4/fuller4"

export default function Firstview(){
    return(
        <div id="fundo">
            <div className="box-Twitch">
            </div>
            <div className="Titulo-intro">
                <Fullzer4/>
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