import { useContext } from "react"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import "../scss/about.scss"

export default function About() {

    const {tituloaboutme, descricaoaboutme, buttonaboutme} = useContext(SwitchLanguageContext)

    return (
        <div className="About">
            <div className="About-me">
                <div className="About-me-image"/>
                <div className="About-me-texto">
                    <h2 className="About-me-texto-titulo">{tituloaboutme}</h2>
                    <p>{descricaoaboutme}</p>
                    <button>{buttonaboutme}</button>
                </div>
            </div>
        </div>
    )
  }