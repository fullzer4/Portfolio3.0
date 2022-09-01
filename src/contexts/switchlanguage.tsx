import { createContext, useState } from "react";

export const SwitchLanguageContext = createContext<any>(()=>{})

export const SwitchLanguageProvider = ({ children }: any) => {
    var [lang, setLang] = useState("PT-BR")
    var [imglang, setImglang] = useState("brazil-icon")
    const [titlehome, setTitlehome] = useState("Bem vindo")
    const [subtitlehome, setSubtitlehome] = useState("Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.")
    const [buttonhome, setbuttonhome] = useState("Mais sobre mim")
    const [cardtexthomediscord, setCardtexthomediscord] = useState("Criei essa comunidade para pessoas estudarem e jogarem juntas, com")
    const [cardtexthomegithub, setCardtexthomegithub] = useState("Onde eu posto meus codigos e dou um resumo dos meu projetos, atualmente tenho")
    const [cardtexthomeyoutube, setCardtexthomeyoutube] = useState("Criei esse canal para ajudar pessoas em programação, hoje tenho postado mais de")
    const [cardbutton, setCardbutton] = useState("Entrar")



    function langswitcher(){
        if(lang === "PT-BR"){
            setLang("ENG")
            setImglang("states-icon")
            setTitlehome("Welcome")
            setSubtitlehome("Hi, my name is Gabriel, I'm 16 years old, working as FullStack-Developer and that's my portfolio I hope you like it, other ways just contact me on my networks.")
            setbuttonhome("More about me")
            setCardtexthomediscord("I created this community for people to study and play together, with")
            setCardtexthomegithub("Where I post my codes and give a summary of my projects, I currently have")
            setCardtexthomeyoutube("I created this channel to help people with coding, today I have posted more than")
            setCardbutton("Join")
        }else if(lang === "ENG"){
            setLang("PT-BR")
            setImglang("brazil-icon")
            setTitlehome("Bem vindo")
            setSubtitlehome("Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.")
            setbuttonhome("Mais sobre mim")
            setCardtexthomediscord("Criei essa comunidade para pessoas estudarem e jogarem juntas, com")
            setCardtexthomegithub("Onde eu posto meus codigos e dou um resumo dos meu projetos, atualmente tenho")
            setCardtexthomeyoutube("Criei esse canal para ajudar pessoas em programação, hoje tenho postado mais de")
            setCardbutton("Entrar")
        }else{
            setLang("PT-BR")
            setImglang("brazil-icon")
            setTitlehome("Bem vindo")
            setSubtitlehome("Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.")
            setbuttonhome("Mais sobre mim")
            setCardtexthomediscord("Criei essa comunidade para pessoas estudarem e jogarem juntas, com")
            setCardtexthomegithub("Onde eu posto meus codigos e dou um resumo dos meu projetos, atualmente tenho")
            setCardtexthomeyoutube("Criei esse canal para ajudar pessoas em programação, hoje tenho postado mais de")
            setCardbutton("Entrar")
        }
    }

    return(
        <SwitchLanguageContext.Provider value={{
            langswitcher,
            lang,
            imglang,
            titlehome,
            subtitlehome,
            buttonhome,
            cardbutton,
            cardtexthomediscord,
            cardtexthomegithub,
            cardtexthomeyoutube,
            }}> 
            {children}
        </SwitchLanguageContext.Provider>
    )
}