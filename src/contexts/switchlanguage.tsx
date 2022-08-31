import { createContext, useState } from "react";

export const SwitchLanguageContext = createContext<any>(()=>{})

export const SwitchLanguageProvider = ({ children }: any) => {
    var [lang, setLang] = useState("PT-BR")
    var [imglang, setImglang] = useState("brazil-icon")
    const [titlehome, setTitlehome] = useState("Bem vindo")
    const [subtitlehome, setSubtitlehome] = useState("Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.")
    const [buttonhome, setbuttonhome] = useState("Mais sobre mim")





    function langswitcher(){
        if(lang === "PT-BR"){
            setLang("ENG")
            setImglang("states-icon")
            setTitlehome("Welcome")
            setSubtitlehome("Hi, I'm Gabriel i have 16 years old, I'm FullStack-Developer and that's my portfolio I hope you like it, other ways just contact me on my networks.")
            setbuttonhome("More about me")
        }else if(lang === "ENG"){
            setLang("PT-BR")
            setImglang("brazil-icon")
            setTitlehome("Bem vindo")
            setSubtitlehome("Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.")
            setbuttonhome("Mais sobre mim")
        }else{
            setLang("PT-BR")
            setImglang("brazil-icon")
            setTitlehome("Bem vindo")
            setSubtitlehome("Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.")
            setbuttonhome("Mais sobre mim")
        }
    }

    return(
        <SwitchLanguageContext.Provider value={{
            langswitcher,
            lang,
            imglang,
            titlehome,
            subtitlehome,
            buttonhome
            }}> 
            {children}
        </SwitchLanguageContext.Provider>
    )
}