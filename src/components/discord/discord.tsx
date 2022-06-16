import { useContext } from "react"
import {ApiDiscordContext} from "../../contexts/apiDiscord"

export default function Discord(){
    const {fdiscord, servername, invite, onlineusers} = useContext(ApiDiscordContext)

    fdiscord()

    return(
        <div>
            <div className="card-discord">
                <h1>{servername}</h1>
                <h2>usuarios online: {onlineusers}</h2>
                <h3>entrar: <a href={invite}>link</a></h3>
            </div>
        </div>
    )
}