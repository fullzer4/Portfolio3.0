import { createContext, useState } from "react";

export const SwitchLanguageContext = createContext<any>(()=>{})

export const SwitchLanguageProvider = ({ children }: any) => {
    const [lingua, setLingua] = useState("ENG")
    const [titlehome, setTitlehome] = useState("Welcome")
    const [subtitlehome, setSubtitlehome] = useState("Hi, my name is Gabriel, I'm 16 years old, working as FullStack-Developer and that's my portfolio I hope you like it, other ways just contact me on my networks.")
    const [buttonhome, setbuttonhome] = useState("More about me")
    const [cardtexthomediscord, setCardtexthomediscord] = useState("I created this community for people to study and play together, with")
    const [cardtexthomegithub, setCardtexthomegithub] = useState("Where I post my codes and give a summary of my projects, I currently have")
    const [cardtexthomeyoutube, setCardtexthomeyoutube] = useState("I created this channel to help people with coding, today I have posted more than")
    const [cardbutton, setCardbutton] = useState("Join")
    const [tituloaboutme, setTituloaboutme] = useState("More about me")
    const [descricaoaboutme, setDescricaoaboutme] = useState("The one in the white t-shirt is me in 2020 and that's when I started to fall in love with programming, I started studying programming in 2016 with my father and in 2018 I joined a start-up called IDoCode and honestly at first I didn't like programming but in 2019 when I started doing projects together with my friends I ended up deciding that this was going to be the focus for my life.")
    const [buttonaboutme, setButtonaboutme] = useState("View projects")
    const [buttonfooter, setButtonfooter] = useState("🥳 Go up 🥳")
    const [entcontact, setEntcontact] = useState("Contact")
    const [techab, setTechab] = useState("Technical abilities")
    
    function trocarLingua(id:number){
        if(id === 1){
            setLingua("ENG")
            verificarlingua(lingua)
        }else if(id === 2){
            setLingua("PTBR")
            verificarlingua(lingua)
        }else{
            setLingua("ENG")
            verificarlingua(lingua)
        }
    }

    function verificarlingua(ver:any){
        if(ver === "PTBR"){
            setTitlehome("Bem vindo")
            setSubtitlehome("Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.")
            setbuttonhome("Mais sobre mim")
            setCardtexthomediscord("Criei essa comunidade para pessoas estudarem e jogarem juntas, com")
            setCardtexthomegithub("Onde eu posto meus codigos e dou um resumo dos meu projetos, atualmente tenho")
            setCardtexthomeyoutube("Criei esse canal para ajudar pessoas em programação, hoje tenho postado mais de")
            setCardbutton("Entrar")
            setTituloaboutme("Mais sobre mim")
            setDescricaoaboutme("Esse de camiseta branca sou eu em 2020 e foi ai quando eu comecei a me apaixonar por programação, comecei a estudar programação em 2016 junto do meu pai e em 2018 entrei numa start-up chamada IDoCode e sinceramente no início eu não gostava de programação mas em 2019 quando eu comecei a fazer projetos junto com meus amigos acabei decidindo que esse ia ser o foco para a minha vida.")
            setButtonaboutme("Ver projetos")
            setEntcontact("Entre em contato")
            setButtonfooter("🥳 Para cima 🥳")
            setTechab("Habilidades tecnicas")
        }else if(ver === "ENG"){
            setTitlehome("Welcome")
            setSubtitlehome("Hi, my name is Gabriel, I'm 16 years old, working as FullStack-Developer and that's my portfolio I hope you like it, other ways just contact me on my networks.")
            setbuttonhome("More about me")
            setCardtexthomediscord("I created this community for people to study and play together, with")
            setCardtexthomegithub("Where I post my codes and give a summary of my projects, I currently have")
            setCardtexthomeyoutube("I created this channel to help people with coding, today I have posted more than")
            setCardbutton("Join")
            setTituloaboutme("More about me")
            setDescricaoaboutme("The one in the white t-shirt is me in 2020 and that's when I started to fall in love with programming, I started studying programming in 2016 with my father and in 2018 I joined a start-up called IDoCode and honestly at first I didn't like programming but in 2019 when I started doing projects together with my friends I ended up deciding that this was going to be the focus for my life.")
            setButtonaboutme("View projects")
            setEntcontact("Contact")
            setButtonfooter("🥳 Go up 🥳")
            setTechab("Technical abilities")
        }
    }
    
    return(
        <SwitchLanguageContext.Provider value={{
            titlehome,
            subtitlehome,
            buttonhome,
            cardbutton,
            cardtexthomediscord,
            cardtexthomegithub,
            cardtexthomeyoutube,
            tituloaboutme,
            descricaoaboutme,
            buttonaboutme,
            buttonfooter,
            verificarlingua,
            entcontact,
            techab,
            trocarLingua,
            lingua
            }}> 
            {children}
        </SwitchLanguageContext.Provider>
    )
}