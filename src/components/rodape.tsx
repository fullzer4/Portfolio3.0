import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/rodape.scss"

export default function Rodape() {

    const {buttonfooter} = useContext(SwitchLanguageContext)
    const {buttonupfooter} = useContext(SwitchThemeContext)
    const {goup} = useContext(NavbarSelectContext)

    return (
        <div className="Rodape">
            <button onClick={goup} className={buttonupfooter}>{buttonfooter}</button>
        </div>
    )
  }