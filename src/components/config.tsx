import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import "../scss/config.scss"

export default function Config() {
  
    const {menuconfig, openconfig} = useContext(NavbarSelectContext)

    return (
        <div className={menuconfig}>
            <div className="menu">
                <button onClick={()=>openconfig(2)}>fechar</button>
            </div>
        </div>
    )
  }
  