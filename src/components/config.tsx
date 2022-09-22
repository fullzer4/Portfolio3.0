import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import "../scss/config.scss"
import Select from 'react-select'
import { SwitchThemeContext } from "../contexts/switchtheme"
import { SwitchLanguageContext } from "../contexts/switchlanguage"

export default function Config() {
  
    const {menuconfig, openconfig} = useContext(NavbarSelectContext)
    const {optionsTheme, setThmval, thmval, verificartema} = useContext(SwitchThemeContext)
    const {optionsLanguage, setLangval, langval, verificarlingua} = useContext(SwitchLanguageContext)

    function mudarlingua(e:any){
        setLangval(e)
        verificarlingua(e.value)
    }

    function mudartema(e:any){
        setThmval(e)
        verificartema(e.value)
    }

    return (
        <div className={menuconfig}>
            <div className="menu">
                <div className="close-div"><button onClick={()=>openconfig(2)}>Fechar</button></div>
                <div className="options-div">
                    <div className="options-lingua">
                        <p>Temas</p>
                        <Select options={optionsTheme} defaultValue={optionsTheme[0]} value={thmval} onChange={(e)=>mudartema(e)}/>
                    </div>
                    <div className="options-tema">
                        <p>Linguas</p>
                        <Select options={optionsLanguage} defaultValue={optionsLanguage[1]} value={langval} onChange={(e)=>mudarlingua(e)}/>
                    </div>
                </div>
                <div className="preview-div">
                </div>
                <div className="tec-div">
                </div>
            </div>
        </div>
    )
  }
  