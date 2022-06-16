import { useContext } from "react"
import {ApiDiscordContext} from "../../contexts/apiDiscord"

export default function SocialCards(){
    const {fdiscord, servername, invite, onlineusers} = useContext(ApiDiscordContext)

    fdiscord()

    return(
        <div className="cards">
            <div className="card-discord">
                <h1>{servername}</h1>
                <h2>usuarios online: {onlineusers}</h2>
                <h3>entrar: <a href={invite}>link</a></h3>
            </div>
            <div className="card-youtube">

            </div>
        </div>
    )
}