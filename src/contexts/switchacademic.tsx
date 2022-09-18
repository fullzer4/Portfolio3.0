import { createContext, useState } from "react";

export const SwitchAcademicContext = createContext<any>(()=>{})

export const SwitchAcademicProvider = ({ children }: any) => {
    const [academicoPage, setAcademicoPage] = useState("Academico")
    const [escolarPage, setEscolarPage] = useState("Escolar NonePage")
    const [artigosPage, setArtigosPage] = useState("Artigos NonePage")

    function reset(){
        setAcademicoPage("Academico NonePage")
        setEscolarPage("Escolar NonePage")
        setArtigosPage("Artigos NonePage")
    }

    function chosepage(number:number){
        if(number === 1){
            reset()
            setAcademicoPage("Academico")
        }if(number === 2){
            reset()
            setEscolarPage("Escolar")
        }if(number === 3){
            reset()
            setArtigosPage("Artigos")
        }
    }

    return(
        <SwitchAcademicContext.Provider value={{
            chosepage,
            academicoPage,
            escolarPage,
            artigosPage
            }}> 
            {children}
        </SwitchAcademicContext.Provider>
    )
}