import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="header">
            <div className="header-links">
                <Link to="/projetos" className="header-links-texto">Projetos</Link>
                <Link to="/conhecimentos" className="header-links-texto">Conhecimentos</Link>
                <Link to="/diario" className="header-links-texto">Diario</Link>
            </div>
            <div className="header-logo">
                <Link to="/" className="header-logo-texto">Fullzer4</Link>
            </div>
        </div>
    )
  }