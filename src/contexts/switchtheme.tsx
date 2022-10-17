import { createContext, useState } from "react";

export const SwitchThemeContext = createContext<any>(()=>{})

export const SwitchThemeProvider = ({ children }: any) => {
    var [theme, setTheme] = useState("dark")
    var [themefundo, setThemefundo] = useState("App")
    var [thememenu, setThememenu] = useState("menu")
    var [themeativo, setThemeativo] = useState("Theme-button-button")
    var [themenav, setThemenav] = useState("Navbar-nav")
    var [themelangnav, setThemelangnav] = useState("changelang-nav")
    var [themebuttonnav, setThemebuttonnav] = useState("Theme-button")
    var [themetitulohome, setThemetitulohome] = useState("Resumo-texto-titulo")
    var [themedescricaohome, setThemedescricaohome] = useState("")
    var [buttonsobrehome, setButtonsobrehome] = useState("")
    var [cardhometheme, setCardhometheme] = useState("card")
    var [themetituloabout, setThemetituloabout] = useState("About-me-texto-titulo")
    var [themedescricaoabout, setThemedescricaoabout] = useState("")
    var [buttonprojetosobre, setButtonprojetosobre] = useState("")
    var [buttonupfooter, setButtonupfooter] = useState("Buttonfooter")
    var [themeContact, setThemeContact] = useState("Contact")
    var [iconsImages, setIconsImages] = useState("darkIcon")
    var [techabilities, setTechabilities] = useState("iten")
    var [softskills, setSoftskills] = useState("itens")
    var [projecttext, setProjecttext] = useState("Project-text")
    var [booksTheme, setBooksTheme] = useState("Books")
    var [certTheme, setCertTheme] = useState("Certificados")

    function mudartema(id:number){
        if(id === 1){
            setTheme("dark")
            mudardark()
        }else if(id === 2){
            setTheme("light")
            mudarlight()
        }else if(id === 3){
            setTheme("pink")
            mudarpink()
        }else{
            setTheme("dark")
            mudardark()
        }
    }

    function mudarlight(){
        setThemenav("Navbar-nav navlight")
        setThemefundo("App light")
        setThememenu("menu light")
        setThemetitulohome("Resumo-texto-titulo titulolight")
        setThemedescricaohome("descricaohomelight")
        setCardhometheme("card cardlight")
        setThemeContact("ContactLight")
        setIconsImages("darkIconlight")
        setThemetituloabout("About-me-texto-titulo titulo-light")
        setThemedescricaoabout("lightdescri")
        setTechabilities("iten lightdescri")
        setSoftskills("itens lightdescri")
        setProjecttext("Project-text lightdescri")
        setBooksTheme("Books BooksLight")
        setCertTheme("Certificados CertificadosLight")
    }

    function mudardark(){
        setThemenav("Navbar-nav")
        setThemefundo("App")
        setThememenu("menu")
        setThemetitulohome("Resumo-texto-titulo")
        setThemedescricaohome("")
        setCardhometheme("card")
        setThemeContact("Contact")
        setIconsImages("darkIcon")
        setThemetituloabout("About-me-texto-titulo")
        setThemedescricaoabout("")
        setSoftskills("itens")
        setProjecttext("Project-text")
        setBooksTheme("Books")
        setCertTheme("Certificados")
    }

    function mudarpink(){
        setThemenav("Navbar-nav navlight")
        setThemefundo("App pink")
        setThememenu("menu pink")
        setThemetitulohome("Resumo-texto-titulo titulolight")
        setThemedescricaohome("descricaohomelight")
        setCardhometheme("card cardlight")
        setThemeContact("ContactLight")
        setIconsImages("darkIconlight")
        setThemetituloabout("About-me-texto-titulo titulo-light")
        setThemedescricaoabout("lightdescri")
        setSoftskills("itens lightdescri")
        setProjecttext("Project-text lightdescri")
        setBooksTheme("Books BooksLight")
        setCertTheme("Certificados CertificadosLight")
    }


    return(
        <SwitchThemeContext.Provider value={{
            themeativo,
            themefundo,
            themenav,
            themelangnav,
            themebuttonnav,
            themetitulohome,
            themedescricaohome,
            buttonsobrehome,
            cardhometheme,
            themedescricaoabout,
            themetituloabout,
            buttonprojetosobre,
            buttonupfooter,
            mudartema,
            thememenu,
            themeContact,
            iconsImages,
            techabilities,
            softskills,
            projecttext,
            booksTheme,
            certTheme,
            }}> 
            {children}
        </SwitchThemeContext.Provider>
    )
}