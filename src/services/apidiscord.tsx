import axios from "axios";

import { createContext, useState } from "react";

export const DiscordContext = createContext<any>(()=>{})

export const DiscordProvider = ({ children }: any) => {

    const [urldiscord, setUrldiscord] = useState("")
    const [onlinediscord, setOnlinediscord] = useState("")

    function pegardadosdiscord(){
        axios.get('https://discord.com/api/guilds/985861782788800522/widget.json').then(resp => {
        setUrldiscord(resp.data.instant_invite)
        setOnlinediscord(resp.data.presence_count)
        });
    }

    return(
        <DiscordContext.Provider value={{
            pegardadosdiscord,
            urldiscord,
            onlinediscord
            }}> 
            {children}
        </DiscordContext.Provider>
    )
}