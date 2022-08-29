import { createContext, useState } from "react";

export const SwitchThemeContext = createContext<any>(()=>{})

export const SwitchThemeProvider = ({ children }: any) => {
    var [theme, setTheme] = useState("dark")
    var [themeativo, setThemeativo] = useState("Theme-button-button")

    function mudarcor(){
        if(theme === "dark"){
            setTheme("light")
            setThemeativo("Theme-button-button temaAtivo")
        }else{
            setTheme("dark")
            setThemeativo("Theme-button-button")
        }
    }
    
    return(
        <SwitchThemeContext.Provider value={{
            mudarcor,
            themeativo,
            }}> 
            {children}
        </SwitchThemeContext.Provider>
    )
}