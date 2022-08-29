import { useContext } from "react"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/navbar.scss"

export default function Navbar() {
    const {mudarcor, themeativo} = useContext(SwitchThemeContext)
    const {langswitcher, lang, imglang} = useContext(SwitchLanguageContext)

    return (
        <div className="Navbar">
            <div onClick={langswitcher} className="changelang-nav">
                    <div className={imglang}/>
                    <p className="changelang-text">{lang}</p>
                </div>
            <div className="Navbar-nav">
                <h1>foi</h1>
            </div>
            <div className="Theme-button" onClick={()=> mudarcor()}>
                <button className={themeativo}/>
            </div>
        </div>
    )
  }