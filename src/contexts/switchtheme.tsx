import { createContext, useState } from "react";

export const SwitchThemeContext = createContext<any>(()=>{})

export const SwitchThemeProvider = ({ children }: any) => {
    var [theme, setTheme] = useState("dark")

    function mudarcor(){
        if(theme === "dark"){
            setTheme("light")
        }else{
            setTheme("dark")
            alert("foi")
        }
    }
    
    return(
        <SwitchThemeContext.Provider value={{
            mudarcor
            }}> 
            {children}
        </SwitchThemeContext.Provider>
    )
}