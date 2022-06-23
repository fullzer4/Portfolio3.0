import { useContext } from "react"
import { Link } from "react-router-dom"
import { MenuContext } from "../../contexts/menu"
import "./header.css"

export default function Header() {
  const { verClick, classN } = useContext(MenuContext)

  return(
    <div className="header">
      <div className={classN} onClick={verClick}>
      </div>
      <div className="header-links">
        <div className="header-links-box">
          <Link to="/projetos" className="header-links-box-texto">Projetos</Link>
        </div>
        <div className="header-links-box">
          <Link to="/sobremim" className="header-links-box-texto">Sobre mim</Link>
        </div>
        <div className="header-links-box">
          <Link to="/certificados" className="header-links-box-texto">Certificados</Link>
        </div>
        <div className="header-links-box">
          <Link to="/contatos" className="header-links-box-texto">Contatos</Link>
        </div>
      </div>
      <div className="Logo">
        <Link to="/" className="logo-texto">Fullzer4</Link>
      </div>
    </div>
  )
}