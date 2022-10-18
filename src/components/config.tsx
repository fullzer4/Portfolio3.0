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
                <div className="options-div">
                    <div>
                        <p>Temas:</p>
                        <div>
                            <button onClick={()=>mudartema(1)}>Dark</button>
                            <button onClick={()=>mudartema(2)}>Light</button>
                            <button onClick={()=>mudartema(3)}>Pink</button>
                        </div>
                    </div>
                    <div>
                        <p>Linguas:</p>
                        <div>
                            <button onClick={()=>trocarLingua(1)}>English</button>
                            <button onClick={()=>trocarLingua(2)}>Portugues</button>
                        </div>
                    </div>
                    <div>
                        <p>Ver repositorio no Github:</p>
                        <div>
                            <a href="https://github.com/fullzer4/Portfolio3.0">Repositorio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  