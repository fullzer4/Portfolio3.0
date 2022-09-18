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
                <h2>Escolar</h2>
            </div>
            <div className={artigosPage}>
                <h2>Artigos</h2>
            </div>
        </div>
    )
  }