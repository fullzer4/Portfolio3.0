import { Link } from "react-router-dom";
import "./header.css"
import AOS from "aos"

export default function Header() {
    AOS.init({
        delay: 0,
        duration: 500
    })
    return(
        <div className="header" data-aos="fade-down">
            <ul className="itens" >
                <li className="itens-caixa">
                    <Link to="/projetos" className="itens-caixa-texto">Projetos</Link>
                </li>
                <li className="itens-caixa">
                    <Link to="/conhecimentos" className="itens-caixa-texto">Conhecimentos</Link>
                </li>
                <li className="itens-caixa">
                    <Link to="/certificados" className="itens-caixa-texto">Certificados</Link>
                </li>
            </ul>
            <div className="header-logo">
                <Link to="/" className="header-logo-texto">Fullzer4</Link>
            </div>
        </div>
    )
  }