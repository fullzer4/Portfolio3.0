import { createContext, useState } from "react";

export const SwitchLanguageContext = createContext<any>(()=>{})

export const SwitchLanguageProvider = ({ children }: any) => {
    var [lang, setLang] = useState("PT-BR")

    function langswitcher(){
        if(lang === "PT-BR"){
            setLang("ENG")
            alert(lang)
        }else if(lang === "ENG"){
            setLang("PT-BR")
            alert(lang)
        }else{
            setLang("PT-BR")
            alert(lang)
        }
    }

    return(
        <SwitchLanguageContext.Provider value={{
            langswitcher
            }}> 
            {children}
        </SwitchLanguageContext.Provider>
    )
}