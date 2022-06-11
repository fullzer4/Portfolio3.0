import { useContext } from "react"
import { MenuContext } from "../contexts/menu"

export default function ButtonMenu() {

  const {OpenMenu} = useContext(MenuContext)

  return(
    <div id="box-botao" onClick={OpenMenu}>
      <div className="traco-botao"></div> 
      <div className="traco-botao"></div> 
      <div className="traco-botao"></div> 
    </div>
  )
}