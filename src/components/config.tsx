import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import "../scss/config.scss"
import Select from 'react-select'
import { SwitchThemeContext } from "../contexts/switchtheme"
import { SwitchLanguageContext } from "../contexts/switchlanguage"

export default function Config() {
  
    const {menuconfig, openconfig} = useContext(NavbarSelectContext)
    const {optionsTheme, setThmval, thmval, test2} = useContext(SwitchThemeContext)
    const {optionsLanguage, setLangval, test, langval} = useContext(SwitchLanguageContext)

    return (
        <div className={menuconfig}>
            <div className="menu">
                <div className="close-div"><button onClick={()=>openconfig(2)}>Fechar</button></div>
                <div className="options-div">
                    <div className="options-lingua">
                        <p>Temas</p>
                        <Select options={optionsTheme} defaultValue={optionsTheme[0]} value={thmval} onChange={(e)=>setThmval(e)}/>
                    </div>
                    <div className="options-tema">
                        <p>Linguas</p>
                        <Select options={optionsLanguage} defaultValue={optionsLanguage[0]} value={langval} onChange={(e)=>setLangval(e)}/>
                    </div>
                </div>
                <div className="preview-div">
                    <button onClick={()=>test()}>teste</button>
                </div>
                <div className="tec-div">
                <button onClick={()=>test2()}>teste</button>
                </div>
            </div>
        </div>
    )
  }
  