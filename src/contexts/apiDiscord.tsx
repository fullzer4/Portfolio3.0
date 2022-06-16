import { createContext, ReactNode, useEffect, useState } from "react";

type ApiDiscordContextProps = { //configurar as props
    children: ReactNode;
}

type ApiDiscordContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    fdiscord: () => void;
}

const discordinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    fdiscord: () => {},
}

export const ApiDiscordContext = createContext<ApiDiscordContextType>(discordinitialValue)

export const ApiDiscordProvider = ({ children }: ApiDiscordContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(discordinitialValue.isOpenModal)
    const [discord, setDiscord] = useState([])
    
    function fdiscord(){
        useEffect(()=>{
            fetch("https://discordapp.com/api/guilds/985861782788800522/widget.json")
                .then(response => response.json())
                .then(data => {
                    setDiscord(data)
                    console.log(discord);
                })
        },[])
    }

    return(
        <ApiDiscordContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            fdiscord
            }}> 
            {children}
        </ApiDiscordContext.Provider>
    )
}