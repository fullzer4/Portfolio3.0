import { useContext } from "react"
import { ApiDiscordContext } from "../../contexts/apiDiscord"
export default function Comunidade() {
    const {onlineusers, fdiscord} = useContext(ApiDiscordContext)

    fdiscord()
    
    return(
        <div className="comunidade">
            <div className="comunidade-container-texto">
                <h3>Criei uma comunidade onde as pessoas podem jogar se divertir, conversar e estudar juntos se quiser fazer parte entre no server do discord. membros online agora: {onlineusers} </h3>
            </div>
            <div>

            </div>
        </div>
    
    )
  }