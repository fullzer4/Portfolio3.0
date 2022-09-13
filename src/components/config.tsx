import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import "../scss/config.scss"

export default function Config() {
  
    const {menuconfig, openconfig} = useContext(NavbarSelectContext)

    return (
        <div className={menuconfig}>
            <div className="menu">
                <div className="close-div"><button onClick={()=>openconfig(2)}>Fechar</button></div>
                <div className="options-div">
                    <div className="options-lingua">

                    </div>
                    <div className="options-tema">

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
  