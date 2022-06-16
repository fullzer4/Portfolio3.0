import { useContext } from "react"
import {ApiDiscordContext} from "../../contexts/apiDiscord"

export default function Discord(){

    const {fdiscord} = useContext(ApiDiscordContext)

    fdiscord()

    return(
        <div>
        </div>
    )
}