import { createContext, useState } from "react";

export const SwitchLanguageContext = createContext<any>(()=>{})

export const SwitchLanguageProvider = ({ children }: any) => {
    const [titlehome, setTitlehome] = useState("Bem vindo")
    const [subtitlehome, setSubtitlehome] = useState("Sou o Gabriel tenho 16 anos sou FullStack-Developer e este é o meu portfólio espero que goste, qualquer coisa só entrar em contato comigo em minhas redes.")
    const [buttonhome, setbuttonhome] = useState("Mais sobre mim")
    const [cardtexthomediscord, setCardtexthomediscord] = useState("Criei essa comunidade para pessoas estudarem e jogarem juntas, com")
    const [cardtexthomegithub, setCardtexthomegithub] = useState("Onde eu posto meus codigos e dou um resumo dos meu projetos, atualmente tenho")
    const [cardtexthomeyoutube, setCardtexthomeyoutube] = useState("Criei esse canal para ajudar pessoas em programação, hoje tenho postado mais de")
    const [cardbutton, setCardbutton] = useState("Entrar")
    const [tituloaboutme, setTituloaboutme] = useState("Mais sobre mim")
    const [descricaoaboutme, setDescricaoaboutme] = useState("Esse de camiseta branca sou eu em 2020 e foi ai quando eu comecei a me apaixonar por programação, comecei a estudar programação em 2016 junto do meu pai e em 2018 entrei numa start-up chamada IDoCode e sinceramente no início eu não gostava de programação mas em 2019 quando eu comecei a fazer projetos junto com meus amigos acabei decidindo que esse ia ser o foco para a minha vida.")
    const [buttonaboutme, setButtonaboutme] = useState("Ver projetos")
    const [buttonfooter, setButtonfooter] = useState("🥳 Para cima 🥳")
    const optionsLanguage = [
        { value: 'ptbr', label: 'Portugues'},
        { value: 'eng', label: 'English' },
        { value: 'esp', label: 'Español' },
    ] 
    const [langval, setLangval] = useState(optionsLanguage[0])
    const ptbr =  optionsLanguage[0]
    const Fptbr:any =  ptbr.value
    const eng =  optionsLanguage[1]
    const Feng:any =  eng.value
    const esp =  optionsLanguage[2]
    const Fesp:any =  esp.value

    function verificarlingua(ver:any){
        if(ver == Fptbr){
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
            setButtonfooter("🥳 Para cima 🥳")
        }if(ver == Feng){
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
            setButtonfooter("🥳 Go up 🥳")
        }if(ver == Fesp){
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
            setButtonfooter("🥳 Para cima 🥳")
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
            optionsLanguage,
            setLangval,
            langval,
            verificarlingua
            }}> 
            {children}
        </SwitchLanguageContext.Provider>
    )
}