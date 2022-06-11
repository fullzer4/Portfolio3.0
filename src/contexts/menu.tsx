import { createContext, ReactNode, useState } from "react";

type MenuContextProps = { //configurar as props
    children: ReactNode;
}

type MenuContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    click: boolean;
    setClick: (newState: boolean) => void;
    OpenMenu: () => void;
}

const initialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    click: false,
    setClick: () => {},
    OpenMenu: () => {},
}

export const MenuContext = createContext<MenuContextType>(initialValue)

export const MenuContextProvider = ({ children }: MenuContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
    const [click, setClick] = useState(initialValue.click)

    function OpenMenu(){
        if(click === false){
            setClick(true)
            alert("true")
            const menu = document.getElementsByClassName("menu")
        }if(click === true){
            setClick(false)
            alert("false")
        }
    }

    return(
        <MenuContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            click,
            setClick,
            OpenMenu
            }}> 
            {children}
        </MenuContext.Provider>
    )
}