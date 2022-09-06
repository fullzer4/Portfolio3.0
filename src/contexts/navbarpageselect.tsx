import { createContext, useState } from "react";

export const NavbarSelectContext = createContext<any>(()=>{})

export const NavbarSelectProvider = ({ children }: any) => {
    const [navbarHome, setNavbarHome] = useState("icon-nav-home icon-ativo")
    const [navbarSobre, setNavbarSobre] = useState("icon-nav-sobre")
    const [navbarProjetos, setNavbarProjetos] = useState("icon-nav-projetos")
    const [navbarLivros, setNavbarLivros] = useState("icon-nav-livros")
    const [navbarCertificados, setNavbarCertificados] = useState("icon-nav-certificados")
    const [navbarAcademico, setNavbarAcademico] = useState("icon-nav-academico")
    const [pageHome, setPageHome] = useState("pagina-ativada")
    const [pageSobre, setPageSobre] = useState("pagina-desativada")
    const [pageProjetos, setPageProjetos] = useState("pagina-desativada")
    const [pageLivros, setPageLivros] = useState("pagina-desativada")
    const [pageCertificados, setPageCertificados] = useState("pagina-desativada")
    const [pageAcademico, setPageAcademico] = useState("pagina-desativada")

    function resetall(){
        setNavbarHome("icon-nav-home")
        setNavbarSobre("icon-nav-sobre")
        setNavbarProjetos("icon-nav-projetos")
        setNavbarLivros("icon-nav-livros")
        setNavbarCertificados("icon-nav-certificados")
        setNavbarAcademico("icon-nav-academico")
        setPageHome("pagina-desativada")
        setPageSobre("pagina-desativada")
        setPageProjetos("pagina-desativada")
        setPageLivros("pagina-desativada")
        setPageCertificados("pagina-desativada")
        setPageAcademico("pagina-desativada")
    }

    function pageselector(number:number){
        if(number === 1){ resetall(), setNavbarHome("icon-nav-home icon-ativo"), setPageHome("pagina-ativada")}
        if(number === 2){ resetall(), setNavbarSobre("icon-nav-sobre icon-ativo"), setPageSobre("pagina-ativada")}
        if(number === 3){ resetall(), setNavbarProjetos("icon-nav-projetos icon-ativo"), setPageProjetos("pagina-ativada")}
        if(number === 4){ resetall(), setNavbarLivros("icon-nav-livros icon-ativo"), setPageLivros("pagina-ativada")}
        if(number === 5){ resetall(), setNavbarCertificados("icon-nav-certificados icon-ativo-stroke"), setPageCertificados("pagina-ativada")}
        if(number === 6){ resetall(), setNavbarAcademico("icon-nav-academico icon-ativo-stroke"), setPageAcademico("pagina-ativada")}
    }

    return(
        <NavbarSelectContext.Provider value={{
            pageselector,
            navbarHome,
            navbarSobre,
            navbarProjetos,
            navbarLivros,
            navbarCertificados,
            navbarAcademico,
            pageHome,
            pageSobre,
            pageProjetos,
            pageLivros,
            pageCertificados,
            pageAcademico,
            }}> 
            {children}
        </NavbarSelectContext.Provider>
    )
}