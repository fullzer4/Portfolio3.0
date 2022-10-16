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
    const [Comunicativo, setComunicativo] = useState("Communicative")
    const [Organizado, setOrganizado] = useState("Organized")
    const [Criativo, setCriativo] = useState("Creative")
    const [Flexivel, setFlexivel] = useState("Flexible")
    const [Empatico, setEmpatico] = useState("Empathetic")
    const [Resilencia, setResilencia] = useState("Resilience")
    const [Resolverproblemas, setResolverproblemas] = useState("Solve problems")
    const [Coordenar, setCoordenar] = useState("Coordinate")
    const [Colaborativo, setColaborativo] = useState("Collaborative")
    const [video, setVideo] = useState("Trajectory Video")
    const [calctitulo, setCalctitulo] = useState("Thermodynamic Calculator")
    const [calcdesc, setCalcdesc] = useState("In this project it was proposed to create only a calculator with thermodynamic calculations but we decided to create a website where we can see the theory behind these calculations and see real-time analysis of the calculations that are most used on our website. Technologies used: Typescript, React, CSS, Html, Nodejs, Firebase and a few more frameworks.")
    const [descb, setDescb] = useState("Website below:")
    const [buttom, setButtom] = useState("See Repository")
    const [tdtitulo, setTdtitulo] = useState("To Do List")
    const [tddesc, setTddesc] = useState("In this room activity it was proposed to create a to-do list, I decided to do it with a database instead of using localstorage because if I used localstorage I could not access it from my cell phone so I decided to create this site with a user creation to store the data inside a nosql database (firebase) thus enabling the user to access on other platforms. Technologies used: React, javascript, html, css and Firebase.")

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
            setComunicativo("Comunicativo")
            setOrganizado("Organizado")
            setCriativo("Criativo")
            setFlexivel("Flexivel")
            setEmpatico("Empatico")
            setResilencia("Resilencia")
            setResolverproblemas("Resolver problemas")
            setCoordenar("Coordenar")
            setColaborativo("Colaborativo")
            setVideo("Video Trajetória")
            setCalctitulo("Calculadora Termodinamica")
            setCalcdesc("Nesse projeto nos foi proposto realizar apenas uma calculadora com calculos de termodinamica mas decidimos realizar um site onde podemos ver a teoria por tras desses calculos e ver analises em tempo real dos calculos que são mais usados em nosso site. Tecnologias usadas: Typescript, React, Css, Html, Nodejs, Firebase e mais alguns frameworks.")
            setDescb("Site feito abaixo:")
            setButtom("Ver Repositorio")
            setTdtitulo("Lista de afazeres")
            setTddesc("Nessa atividade de sala foi proposto criar uma lista de afazeres, decidi realizar com banco de dados ao invés de usar localstorage por conta de que se usasse localstorage eu não poderia acessar pelo meu celular então decidi criar esse site com uma criação de usuário para guardar os dados desse dentro de um banco nosql (firebase) assim possibilitando o usuário acessar em outras plataformas. Tecnologias usadas: React, javascript, html, css e Firebase.")
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
            setComunicativo("Communicative")
            setOrganizado("Organized")
            setCriativo("Creative")
            setFlexivel("Flexible")
            setEmpatico("Empathetic")
            setResilencia("Resilience")
            setResolverproblemas("Solve problems")
            setCoordenar("Coordinate")
            setColaborativo("Collaborative")
            setVideo("Trajectory Video")
            setCalctitulo("Thermodynamic Calculator")
            setCalcdesc("In this project it was proposed to create only a calculator with thermodynamic calculations but we decided to create a website where we can see the theory behind these calculations and see real-time analysis of the calculations that are most used on our website. Technologies used: Typescript, React, CSS, Html, Nodejs, Firebase and a few more frameworks.")
            setDescb("Website below:")
            setButtom("See Repository")
            setTdtitulo("To Do List")
            setTddesc("In this room activity it was proposed to create a to-do list, I decided to do it with a database instead of using localstorage because if I used localstorage I could not access it from my cell phone so I decided to create this site with a user creation to store the data inside a nosql database (firebase) thus enabling the user to access on other platforms. Technologies used: React, javascript, html, css and Firebase.")
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
            lingua,
            Comunicativo,
            Organizado,
            Criativo,
            Flexivel,
            Empatico,
            Resilencia,
            Resolverproblemas,
            Coordenar,
            Colaborativo,
            video,
            calctitulo,
            calcdesc,
            descb,
            buttom,
            tdtitulo,
            tddesc
            }}> 
            {children}
        </SwitchLanguageContext.Provider>
    )
}