import { createContext, useState } from "react";

export const NavbarSelectContext = createContext<any>(()=>{})

export const NavbarSelectProvider = ({ children }: any) => {
    const [navbarHome, setNavbarHome] = useState("icon-nav")
    const [navbarSobre, setNavbarSobre] = useState("icon-nav")
    const [navbarProjetos, setNavbarProjetos] = useState("icon-nav")
    const [navbarLivros, setNavbarLivros] = useState("icon-nav")
    const [navbarCertificados, setNavbarCertificados] = useState("icon-nav")
    const [navbarAcademico, setNavbarAcademico] = useState("icon-nav")

    function resetselects(){
        setNavbarHome("icon-nav")
        setNavbarSobre("icon-nav")
        setNavbarProjetos("icon-nav")
        setNavbarLivros("icon-nav")
        setNavbarCertificados("icon-nav")
        setNavbarAcademico("icon-nav")
    }

    function pageselector(number:number){
        if(number === 1){ resetselects(), setNavbarHome("icon-nav icon-ativo")}
        if(number === 2){ resetselects(), setNavbarSobre("icon-nav icon-ativo")}
        if(number === 3){ resetselects(), setNavbarProjetos("icon-nav icon-ativo")}
        if(number === 4){ resetselects(), setNavbarLivros("icon-nav icon-ativo")}
        if(number === 5){ resetselects(), setNavbarCertificados("icon-nav icon-ativo")}
        if(number === 6){ resetselects(), setNavbarAcademico("icon-nav icon-ativo")}
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