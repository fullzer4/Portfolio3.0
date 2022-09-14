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
    var [buttonupfooter, setButtonupfooter] = useState("Buttonfooter")
    const optionsTheme = [
        { value: 'dark', label: 'Dark'},
        { value: 'light', label: 'Light' },
        { value: 'pink', label: 'Pink' }
    ]
    var [thmval, setThmval] = useState(optionsTheme[0])
    function test2(){
        console.log(thmval)
    }
    const dark =  optionsTheme[0]
    const Fdark:any =  dark.value
    const light =  optionsTheme[1]
    const Flight:any =  light.value
    const pink =  optionsTheme[2]
    const Fpink:any =  pink.value

    function verificartema(ver:any){
        if(ver == Fdark){
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
            setButtonupfooter("Buttonfooter")
        }if(ver == Flight){
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
            setButtonupfooter("Buttonfooter buttonlight")
        }if(ver == Fpink){
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
            setButtonupfooter("Buttonfooter")
        }
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
            optionsTheme,
            thmval,
            setThmval,
            test2,
            verificartema,
            }}> 
            {children}
        </SwitchThemeContext.Provider>
    )
}