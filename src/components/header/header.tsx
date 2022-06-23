import { useContext } from "react"
import { Link } from "react-router-dom"
import { MenuContext } from "../../contexts/menu"
import "./header.css"
import AOS from "aos"

export default function Header() {
  const { verClick, classB1, classB2, classB3, classM } = useContext(MenuContext)
  AOS.init({
    delay: 50,
    duration: 400,
  })
  return(
    <div className="header">
      <div className="box-botao" onClick={verClick}>
        <div className={classB1}></div>
        <div className={classB2}></div>
        <div className={classB3}></div>
      </div>
      <div className={classM}>
        <div className="header-links-box">
          <Link to="/projetos" className="header-links-box-texto" onClick={verClick} data-aos="fade-down">Projetos</Link>
        </div>
        <div className="header-links-box">
          <Link to="/sobremim" className="header-links-box-texto" onClick={verClick} data-aos="fade-down">Sobre mim</Link>
        </div>
        <div className="header-links-box">
          <Link to="/certificados" className="header-links-box-texto" onClick={verClick} data-aos="fade-down">Certificados</Link>
        </div>
        <div className="header-links-box">
          <Link to="/contatos" className="header-links-box-texto" onClick={verClick} data-aos="fade-down">Contatos</Link>
        </div>
      </div>
      <div className="Logo" data-aos="fade-down">
        <Link to="/" className="logo-texto">Fullzer4</Link>
      </div>
    </div>
  )
}