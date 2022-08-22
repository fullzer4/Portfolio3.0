import { useContext } from "react"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/navbar.scss"

export default function Navbar() {
    const {mudarcor} = useContext(SwitchThemeContext)
    return (
        <div className="Navbar">
            <div className="Navbar-nav">
                <h1>foi</h1>
            </div>
            <div className="Theme-button">
                <button className="Theme-button-button" onClick={()=> mudarcor()}/>
            </div>
        </div>
    )
  }