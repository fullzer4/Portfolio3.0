import { createContext, ReactNode, useState } from "react";

type ApiDiscordContextProps = { //configurar as props
    children: ReactNode;
}

type ApiDiscordContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
}

const discordinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
}

export const ApiDiscordContext = createContext<ApiDiscordContextType>(discordinitialValue)

export const ApiDiscordProvider = ({ children }: ApiDiscordContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(discordinitialValue.isOpenModal)
    return(
        <ApiDiscordContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            }}> 
            {children}
        </ApiDiscordContext.Provider>
    )
}