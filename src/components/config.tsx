import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import "../scss/config.scss"
import Select from 'react-select'
import { SwitchThemeContext } from "../contexts/switchtheme"
import { SwitchLanguageContext } from "../contexts/switchlanguage"

export default function Config() {
  
    const {menuconfig, openconfig} = useContext(NavbarSelectContext)
    const {mudartema, thememenu} = useContext(SwitchThemeContext)
    const {optionsLanguage, setLangval, langval, verificarlingua} = useContext(SwitchLanguageContext)

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
                    </div>
                    <div>
                        <p>Linguagens usadas:</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  