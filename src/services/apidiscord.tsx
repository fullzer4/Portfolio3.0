import axios from "axios";

import { createContext, useState } from "react";

export const DiscordContext = createContext<any>(()=>{})

export const DiscordProvider = ({ children }: any) => {

    const [urldiscord, setUrldiscord] = useState("")
    const [onlinediscord, setOnlinediscord] = useState("")
    const [avatardiscord, setAvatardiscord] = useState("")

    function pegardadosdiscord(){
        axios.get('https://discord.com/api/guilds/985861782788800522/widget.json').then(resp => {
        setUrldiscord(resp.data.instant_invite)
        console.log(resp.data);
        console.log(urldiscord);
        });
    }

    return(
        <DiscordContext.Provider value={{
            pegardadosdiscord,
            }}> 
            {children}
        </DiscordContext.Provider>
    )
}