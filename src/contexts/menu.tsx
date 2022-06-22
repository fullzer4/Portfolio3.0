import { createContext, ReactNode, useState } from "react";

type MenuContextProps = { //configurar as props
    children: ReactNode;
}

type MenuContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    menuClick: boolean;
    setMenuClick: (newState: boolean) => void;
    verClick: () => void;
}

const MenuinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    menuClick: false,
    setMenuClick: () => {},
    verClick: () => {},
}

export const MenuContext = createContext<MenuContextType>(MenuinitialValue)

export const MenuProvider = ({ children }: MenuContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(MenuinitialValue.isOpenModal)
    const [menuClick, setMenuClick] = useState(MenuinitialValue.menuClick)
    
    function verClick(){
        if(menuClick === false){
            setMenuClick(true)
            alert("true")
        }else{
            setMenuClick(false)
            alert("false")
        }
    }

    return(
        <MenuContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            menuClick,
            setMenuClick,
            verClick
            }}> 
            {children}
        </MenuContext.Provider>
    )
}