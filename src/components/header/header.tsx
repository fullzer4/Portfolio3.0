import { Link } from "react-router-dom";
import "./header.css"

export default function Header() {
    return(
        <div className="header">
            <ul className="itens">
                <li className="itens-caixa">
                    <a href="Index.html" className="itens-caixa-texto">Projetos</a>
                </li>
                <li className="itens-caixa">
                    <a href="" className="itens-caixa-texto">Serviços</a>
                </li>
                <li className="itens-caixa">
                    <a href="" className="itens-caixa-texto">Sobre</a>
                </li>
                <li className="itens-caixa">
                    <a href="" className="itens-caixa-texto">Contato</a>
                </li>
            </ul>
            <div className="header-logo">
                <Link to="/" className="header-logo-texto">Fullzer4</Link>
            </div>
        </div>
    )
  }