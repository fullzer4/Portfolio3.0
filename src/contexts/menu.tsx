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
    const menu = document.getElementsByClassName("menu")
    const conteudo = document.getElementsByClassName("conteudo")
    const tracoBotao = document.getElementsByClassName("traco-botao")

    function OpenMenu(){
        if(click === false){
            setClick(true)
            menu[0].classList.add("translate")
            conteudo[0].classList.add("translate")
            tracoBotao[0].classList.add("translate-botao1")
            tracoBotao[1].classList.add("translate-botao2")
            tracoBotao[2].classList.add("translate-botao3")
        }if(click === true){
            setClick(false)
            menu[0].classList.remove("translate")
            conteudo[0].classList.remove("translate")
            tracoBotao[0].classList.remove("translate-botao1")
            tracoBotao[1].classList.remove("translate-botao2")
            tracoBotao[2].classList.remove("translate-botao3")
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