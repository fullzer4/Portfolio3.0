import { useContext } from "react"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/navbar.scss"

export default function Navbar() {
    const {mudarcor} = useContext(SwitchThemeContext)
    const {langswitcher, lang, imglang} = useContext(SwitchLanguageContext)

    return (
        <div className="Navbar">
            <div onClick={langswitcher}>
                    <div className={imglang}/>
                    <p>{lang}</p>
                </div>
            <div className="Navbar-nav">
                <h1>foi</h1>
            </div>
            <div className="Theme-button">
                <button className="Theme-button-button" onClick={()=> mudarcor()}/>
            </div>
        </div>
    )
  }