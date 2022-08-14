import { useContext } from "react";
import Firstview from "../../components/firstview/firstview";
import { TwitchContext } from "../../contexts/Twitch/apiTwitchdata";


export default function home(){
    const {datauser} = useContext(TwitchContext)
    return(
        <div id="container">
            <Firstview/>
            <button onClick={datauser}></button>
        </div>
    )
}