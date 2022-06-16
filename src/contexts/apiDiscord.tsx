import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios"

type ApiDiscordContextProps = { //configurar as props
    children: ReactNode;
}

type ApiDiscordContextType ={ //tipo
    isOpenModal: boolean;
    servername: string;
    onlineusers: string;
    invite: string;
    setInvite: (newState: string) => void;
    setOnlineusers: (newState: string) => void;
    setServername: (newState: string) => void;
    setIsOpenModal: (newState: boolean) => void;
    fdiscord: () => void;
}

const discordinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    servername: "",
    onlineusers: "",
    invite: "",
    setInvite: () => {},
    setOnlineusers: () => {},
    setServername: () => {},
    setIsOpenModal: () => {},
    fdiscord: () => {},
}

export const ApiDiscordContext = createContext<ApiDiscordContextType>(discordinitialValue)

export const ApiDiscordProvider = ({ children }: ApiDiscordContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(discordinitialValue.isOpenModal)
    let [servername, setServername] = useState("")
    let [onlineusers, setOnlineusers] = useState("")
    let [invite, setInvite] = useState("")
    const url = "https://discordapp.com/api/guilds/985861782788800522/widget.json"
    
    function fdiscord(){
        axios.get(url)
            .then(response => {
                const discordapi = JSON.parse(JSON.stringify((response.data)))
                setServername(discordapi.name)
                setOnlineusers(discordapi.presence_count)
                setInvite(discordapi.instant_invite)
            })
    ,[]}

    return(
        <ApiDiscordContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            fdiscord,
            servername,
            setServername,
            onlineusers,
            setOnlineusers,
            invite,
            setInvite
            }}> 
            {children}
        </ApiDiscordContext.Provider>
    )
}