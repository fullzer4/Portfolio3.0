import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import "../scss/config.scss"
import { SwitchThemeContext } from "../contexts/switchtheme"
import { SwitchLanguageContext } from "../contexts/switchlanguage"

export default function Config() {
  
    const {menuconfig, openconfig} = useContext(NavbarSelectContext)
    const {mudartema, thememenu} = useContext(SwitchThemeContext)
    const {trocarLingua} = useContext(SwitchLanguageContext)

    return (
        <div className={menuconfig}>
            <div className={thememenu}>
                <div className="close-div"><button onClick={()=>openconfig(2)}>Fechar</button></div>
                <div>
                    <div>
                        <p>Temas:</p>
                        <button onClick={()=>mudartema(1)}>Dark</button>
                        <button onClick={()=>mudartema(2)}>Light</button>
                        <button onClick={()=>mudartema(3)}>Pink</button>
                    </div>
                    <div>
                        <p>Linguas:</p>
                        <button onClick={()=>trocarLingua(1)}>English</button>
                        <button onClick={()=>trocarLingua(2)}>Portugues</button>
                    </div>
                    <div>
                        <p>Ver repositorio no Github:</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  