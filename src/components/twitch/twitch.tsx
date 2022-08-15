import { useEffect } from "react";
import api from "../../apiTwitch";

function Twitch(){

    useEffect(()=>{
        const fetchData = async () => {
            const datauser = await api.get("https://api.twitch.tv/helix/search/categories")
            console.log(datauser);
            
        } 
        fetchData()
    })

    return(
        <div></div>

    )
}

export default Twitch