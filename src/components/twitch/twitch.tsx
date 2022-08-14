import { useEffect } from "react";
import api from "../../apiTwitch";

export default function Twitch(){

    useEffect(()=>{
        const fetchDatauser = async () => {
            const datauser = await api.get("https://api.twitch.tv/helix/search/channels?query=yfullzer4")
            console.log(datauser);
            
        } 
        fetchDatauser()
    })

    return(
        <div></div>

    )
}