import { useContext, ReactNode } from "react"
import { MenuContext } from "../contexts/menu"
import "../pages/home/home.css"

type MenuProps = { //configurar as props
  children: ReactNode;
}

export default function ButtonMenu({children}: MenuProps) {

  const {OpenMenu} = useContext(MenuContext)

  return(
    <div className="pagina">
      <div className="menu">
        <ul>
          <li>foi</li>
        </ul>
      </div>
      <div className="box-botao" onClick={OpenMenu}>
        <div className="traco-botao"></div> 
        <div className="traco-botao"></div> 
        <div className="traco-botao"></div> 
      </div>
      <div className="conteudo">
      {children}
      </div>
    </div>
  )
}