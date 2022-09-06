import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/rodape.scss"

export default function Rodape() {

    const {buttonfooter} = useContext(SwitchLanguageContext)
    const {buttonupfooter} = useContext(SwitchThemeContext)

    return (
        <div className="Rodape">
            <a href="#navpush"><button className={buttonupfooter}>{buttonfooter}</button></a>
        </div>
    )
  }