import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import "../scss/config.scss"
import Select from 'react-select'
import { SwitchThemeContext } from "../contexts/switchtheme"

export default function Config() {
  
    const {menuconfig, openconfig} = useContext(NavbarSelectContext)
    const {optionsTheme} = useContext(SwitchThemeContext)

    return (
        <div className={menuconfig}>
            <div className="menu">
                <div className="close-div"><button onClick={()=>openconfig(2)}>Fechar</button></div>
                <div className="options-div">
                    <div className="options-lingua">
                        <p>Linguas</p>
                        <Select options={optionsTheme}/>
                    </div>
                    <div className="options-tema">
                        <p>Temas</p>
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
  