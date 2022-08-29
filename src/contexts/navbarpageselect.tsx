import { createContext, useState } from "react";

export const NavbarSelectContext = createContext<any>(()=>{})

export const NavbarSelectProvider = ({ children }: any) => {
    const [navbarHome, setNavbarHome] = useState("icon-nav-home")
    const [navbarSobre, setNavbarSobre] = useState("icon-nav-sobre")
    const [navbarProjetos, setNavbarProjetos] = useState("icon-nav-projetos")
    const [navbarLivros, setNavbarLivros] = useState("icon-nav-livros")
    const [navbarCertificados, setNavbarCertificados] = useState("icon-nav-certificados")
    const [navbarAcademico, setNavbarAcademico] = useState("icon-nav-academico")

    function resetselects(){
        setNavbarHome("icon-nav-home")
        setNavbarSobre("icon-nav-sobre")
        setNavbarProjetos("icon-nav-projetos")
        setNavbarLivros("icon-nav-livros")
        setNavbarCertificados("icon-nav-certificados")
        setNavbarAcademico("icon-nav-academico")
    }

    function pageselector(number:number){
        if(number === 1){ resetselects(), setNavbarHome("icon-nav-home icon-ativo")}
        if(number === 2){ resetselects(), setNavbarSobre("icon-nav-sobre icon-ativo")}
        if(number === 3){ resetselects(), setNavbarProjetos("icon-nav-projetos icon-ativo")}
        if(number === 4){ resetselects(), setNavbarLivros("icon-nav-livros icon-ativo")}
        if(number === 5){ resetselects(), setNavbarCertificados("icon-nav-certificados icon-ativo")}
        if(number === 6){ resetselects(), setNavbarAcademico("icon-nav-academico icon-ativo")}
    }

    return(
        <NavbarSelectContext.Provider value={{
            pageselector,
            navbarHome,
            navbarSobre,
            navbarProjetos,
            navbarLivros,
            navbarCertificados,
            navbarAcademico
            }}> 
            {children}
        </NavbarSelectContext.Provider>
    )
}