import { createContext, ReactNode, useState } from "react";

type MenuContextProps = { //configurar as props
    children: ReactNode;
}

type MenuContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    menuClick: boolean;
    verClick: () => void;
    classN: string;
}

const MenuinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    menuClick: false,
    verClick: () => {},
    classN: ("botao"),
}

export const MenuContext = createContext<MenuContextType>(MenuinitialValue)

export const MenuProvider = ({ children }: MenuContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(MenuinitialValue.isOpenModal)
    const [menuClick, setMenuClick] = useState(MenuinitialValue.menuClick)
    const [classN, setClassN] = useState(MenuinitialValue.classN)

    function verClick(){
        if(menuClick === false){
            setMenuClick(true)
            setClassN("botao ativo")
            
        }if(menuClick === true){
            setMenuClick(false)
            setClassN("botao")
        }else{
            console.log("erro menu back");
        }
    }

    return(
        <MenuContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            menuClick,
            verClick,
            classN
            }}> 
            {children}
        </MenuContext.Provider>
    )
}