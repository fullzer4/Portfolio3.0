import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios"

type ApiDiscordContextProps = { //configurar as props
    children: ReactNode;
}

type ApiDiscordContextType ={ //tipo
    isOpenModal: boolean;
    servername: string;
    setServername: (newState: string) => void;
    setIsOpenModal: (newState: boolean) => void;
    fdiscord: () => void;
}

const discordinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    servername: "",
    setServername: () => {},
    setIsOpenModal: () => {},
    fdiscord: () => {},
}

export const ApiDiscordContext = createContext<ApiDiscordContextType>(discordinitialValue)

export const ApiDiscordProvider = ({ children }: ApiDiscordContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(discordinitialValue.isOpenModal)
    const [discord, setDiscord] = useState([])
    let [servername, setServername] = useState("")
    const url = "https://discordapp.com/api/guilds/985861782788800522/widget.json"
    
    function fdiscord(){
        axios.get(url)
            .then(response => {
                const discordapi = JSON.parse(JSON.stringify((response.data)))
                setDiscord(discordapi);
                setServername(discordapi.name)
                //console.log(servername);
            })
    }

    return(
        <ApiDiscordContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            fdiscord,
            servername,
            setServername,
            }}> 
            {children}
        </ApiDiscordContext.Provider>
    )
}