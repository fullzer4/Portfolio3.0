import { useContext, ReactNode } from "react"
import { Link } from "react-router-dom"
import { MenuContext } from "../contexts/menu"
import "../pages/home/home.css"

type MenuProps = { //configurar as props
  children: ReactNode;
}

export default function ButtonMenu({children}: MenuProps) {

  const {OpenMenu} = useContext(MenuContext)

  return(
    <div className="pagina">
      <div>
        <div className="conteudo">
        {children}
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certificates">Certificates</Link>
          <Link to="/abouteme">About me</Link>
        </div>
        <div className="box-botao" onClick={OpenMenu}>
          <div className="traco-botao"></div> 
          <div className="traco-botao"></div> 
          <div className="traco-botao"></div> 
        </div>
      </div>
    </div>
  )
}