import { createContext, useState } from "react";

export const SwitchLanguageContext = createContext<any>(()=>{})

export const SwitchLanguageProvider = ({ children }: any) => {
    var [lang, setLang] = useState("PT-BR")
    var [imglang, setImglang] = useState("brazil-icon")

    function langswitcher(){
        if(lang === "PT-BR"){
            setLang("ENG")
            setImglang("states-icon")
        }else if(lang === "ENG"){
            setLang("PT-BR")
            setImglang("brazil-icon")
        }else{
            setLang("PT-BR")
            setImglang("brazil-icon")
        }
    }

    return(
        <SwitchLanguageContext.Provider value={{
            langswitcher,
            lang,
            imglang
            }}> 
            {children}
        </SwitchLanguageContext.Provider>
    )
}