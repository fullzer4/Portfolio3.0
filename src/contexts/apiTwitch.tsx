import { createContext, useState } from "react";
import axios from "axios"

export const ApiTwitchContext = createContext<any>(()=>{})

export const ApiTwitchProvider = ({ children }:any) => {
    const url = "https://api.twitch.tv/yfullzer4"
    
    function TwitchVars(){  
        axios.get(url)
            .then(response => {
                const Twitchapi = JSON.parse(JSON.stringify((response.data)))
                console.table(Twitchapi)
            })
    ,[]}

    return(
        <ApiTwitchContext.Provider value={{
            TwitchVars
            }}> 
            {children}
        </ApiTwitchContext.Provider>
    )
}