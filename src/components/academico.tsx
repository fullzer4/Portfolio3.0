import { useContext } from "react"
import { SwitchAcademicContext } from "../contexts/switchacademic"
import "../scss/academico.scss"

export default function Academico() {

    const {chosepage, academicoPage, escolarPage, artigosPage} = useContext(SwitchAcademicContext)

    return (
        <div className="Academico-page">
            <div className="Chose-academic">
                <button className="Button" onClick={() => chosepage(1)}>Academico</button>
                <button className="Button" onClick={() => chosepage(2)}>Escolar</button>
                <button className="Button" onClick={() => chosepage(3)}>Artigos</button>
            </div> 
            <div className={academicoPage}>
                <h2>Academico</h2>
            </div>
            <div className={escolarPage}>
                <h2>Atividades Escolares</h2>
                <div className="EscolarBox">
                    <p>Disciplinas Técnicas</p>
                    <p>Matemática</p>
                    <p>Ciências da natureza</p>
                    <p>Humanas</p>
                    <p>Linguagens</p>
                    <p>Plano pessoal de estudos</p>
                </div>
            </div>
            <div className={artigosPage}>
                <h2>Sem artigos ainda :(</h2>


            </div>
        </div>
    )
  }