import { createContext, useState, useEffect } from "react";
import api from "../../apiTwitch";

export const TwitchContext = createContext<any>(()=>{})

export const TwitchProvider = ({ children }: any) => {
    const [datauser, setDatauser] = useState("")

    useEffect(()=>{
        const fetchDatauser = async () =>{
            setDatauser( await api.get("GET https://api.twitch.tv/helix/channels/yfullzer4") )
            console.log(datauser)
        }
        fetchDatauser()
    })

    return(
        <TwitchContext.Provider value={{
            datauser
            }}> 
            {children}
        </TwitchContext.Provider>
    )
}