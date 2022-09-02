import { createContext, useState } from "react";

export const SwitchThemeContext = createContext<any>(()=>{})

export const SwitchThemeProvider = ({ children }: any) => {
    var [theme, setTheme] = useState("dark")
    var [themeativo, setThemeativo] = useState("Theme-button-button")
    var [themefundo, setThemefundo] = useState("App")
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


    function mudarcor(){
        if(theme === "dark"){
            setTheme("light")
            setThemeativo("Theme-button-button temaAtivo")
            setThemefundo("App Applight")
            setThemenav("Navbar-nav navlight")
            setThemelangnav("changelang-nav changelanglight")
            setThemebuttonnav("Theme-button themebuttonlight")
            setThemetitulohome("Resumo-texto-titulo titulolight")
            setThemedescricaohome("descricaohomelight")    
            setButtonsobrehome("buttonsobrehomelight")
            setCardhometheme("card cardlight")
            setButtonprojetosobre("button-light")
            setThemetituloabout("About-me-texto-titulo titulo-light")
            setThemedescricaoabout("lightdescri")
        }else{
            setTheme("dark")
            setThemeativo("Theme-button-button")
            setThemefundo("App")
            setThemenav("Navbar-nav")
            setThemelangnav("changelang-nav")
            setThemebuttonnav("Theme-button")
            setThemetitulohome("Resumo-texto-titulo")
            setThemedescricaohome("")
            setButtonsobrehome("")
            setCardhometheme("card")
            setButtonprojetosobre("")
            setThemetituloabout("About-me-texto-titulo")
            setThemedescricaoabout("")
        }   
    }
    
    return(
        <SwitchThemeContext.Provider value={{
            mudarcor,
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
            buttonprojetosobre                      
            }}> 
            {children}
        </SwitchThemeContext.Provider>
    )
}