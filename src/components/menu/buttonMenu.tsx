import { useContext, ReactNode } from "react"
import { Link } from "react-router-dom"
import { MenuContext } from "../../contexts/menu"
import "./Menu.css"

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
          <Link to="/" className="links">Home</Link>
          <Link to="/projects" className="links">Projects</Link>
          <Link to="/certificates" className="links">Certificates</Link>
          <Link to="/aboutme" className="links">About me</Link>
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