import { createContext, ReactNode, useState } from "react";

type MenuContextProps = { //configurar as props
    children: ReactNode;
}

type MenuContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    menuClick: boolean;
    verClick: () => void;
    classB: string;
    classM: string;
}

const MenuinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    menuClick: false,
    verClick: () => {},
    classB: ("botao"),
    classM: ("header-links"),
}

export const MenuContext = createContext<MenuContextType>(MenuinitialValue)

export const MenuProvider = ({ children }: MenuContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(MenuinitialValue.isOpenModal)
    const [menuClick, setMenuClick] = useState(MenuinitialValue.menuClick)
    const [classB, setClassB] = useState(MenuinitialValue.classB)
    const [classM, setClassM] = useState(MenuinitialValue.classM)

    function verClick(){
        if(menuClick === false){
            setMenuClick(true)
            setClassB("botao ativo")
            setClassM("header-links")
            
        }if(menuClick === true){
            setMenuClick(false)
            setClassB("botao")
            setClassM("header-links apareceu")
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
            classB,
            classM
            }}> 
            {children}
        </MenuContext.Provider>
    )
}