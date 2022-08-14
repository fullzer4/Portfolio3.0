import { createContext, useState, useEffect } from "react";
import api from "../../apiTwitch";

export const TwichContext = createContext<any>(()=>{})

export const MenuProvider = ({ children }: any) => {
    const [datauser, setDatauser] = useState("")

    useEffect(()=>{
        const fetchDatauser = async () =>{
            setDatauser( await api.get("GET https://api.twitch.tv/helix/channels/yfullzer4") )
            console.log(datauser)
        }
        fetchDatauser()
    })

    return(
        <MenuContext.Provider value={{
            datauser
            }}> 
            {children}
        </MenuContext.Provider>
    )
}