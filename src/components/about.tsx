import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/about.scss"

export default function About() {

    const {pageselector} = useContext(NavbarSelectContext)
    const {tituloaboutme, descricaoaboutme, buttonaboutme} = useContext(SwitchLanguageContext)
    const {themedescricaoabout, themetituloabout, buttonprojetosobre} = useContext(SwitchThemeContext)

    return (
        <div className="About">
            <div className="About-me">
                <div className="About-me-image"/>
                <div className="About-me-texto">
                    <h2 className={themetituloabout}>{tituloaboutme}</h2>
                    <p className={themedescricaoabout}>{descricaoaboutme}</p>
                    <button className={buttonprojetosobre} onClick={() => pageselector(3)}>{buttonaboutme}</button>
                </div>
            </div>
        </div>
    )
  }