import { createContext, ReactNode, useState } from "react";

type MenuContextProps = { //configurar as props
    children: ReactNode;
}

type MenuContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    menuClick: boolean;
    verClick: () => void;
    classB1: string;
    classB2: string;
    classB3: string;
    classM: string;
}

const MenuinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    menuClick: false,
    verClick: () => {},
    classB1: ("botao1"),
    classB2: ("botao2"),
    classB3: ("botao3"),
    classM: ("header-links"),
}

export const MenuContext = createContext<MenuContextType>(MenuinitialValue)

export const MenuProvider = ({ children }: MenuContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(MenuinitialValue.isOpenModal)
    const [menuClick, setMenuClick] = useState(MenuinitialValue.menuClick)
    const [classB1, setClassB1] = useState(MenuinitialValue.classB1)
    const [classB2, setClassB2] = useState(MenuinitialValue.classB2)
    const [classB3, setClassB3] = useState(MenuinitialValue.classB3)
    const [classM, setClassM] = useState(MenuinitialValue.classM)

    function verClick(){
        if(menuClick === false){
            setMenuClick(true)
            setClassB1("botao1 ativo1")
            setClassB2("botao2 ativo2")
            setClassB3("botao3 ativo3")
            setClassM("header-links")
            
        }if(menuClick === true){
            setMenuClick(false)
            setClassB1("botao1")
            setClassB2("botao2")
            setClassB3("botao3")
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
            classB1,
            classB2,
            classB3,
            classM
            }}> 
            {children}
        </MenuContext.Provider>
    )
}