import { useContext } from "react"
import {ApiDiscordContext} from "../../contexts/apiDiscord"

export default function Discord(){

    const {fdiscord, servername} = useContext(ApiDiscordContext)

    fdiscord()

    return(
        <div>
            <h1>{servername}</h1>
        </div>
    )
}