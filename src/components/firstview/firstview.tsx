import "./firstview.scss"
import Twitch from "../../assets/Twitch.svg"

export default function Firstview(){
    return(
        <div id="fundo">
            <div className="box-Twitch">
                <img src={Twitch}></img><h1>Live<p>on</p></h1>
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