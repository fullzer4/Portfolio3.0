import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/about.scss"

export default function About() {

    const {pageselector} = useContext(NavbarSelectContext)
    const {tituloaboutme, descricaoaboutme, buttonaboutme} = useContext(SwitchLanguageContext)
    const {themedescricaoabout, themetituloabout, buttonprojetosobre} = useContext(SwitchThemeContext)

    return (
        <div className="About">
            <div className="About-me">
                <div className="About-me-image"/>
                <div className="About-me-texto">
                    <h2 className={themetituloabout}>{tituloaboutme}</h2>
                    <p className={themedescricaoabout}>{descricaoaboutme}</p>
                    <button className={buttonprojetosobre} onClick={() => pageselector(3)}>{buttonaboutme}</button>
                </div>
            </div>
            <div  className="Tencinal-Habilities">
                <div  className="Tencinal-Habilities-title">
                    <p></p>
                </div>
                <div  className="Tencinal-Habilities-itens">
                    <div className="coluna-esq">
                        <div className="iten">
                            <p>HTML</p>
                            <div><div></div></div>
                        </div>
                        <div className="iten">
                            <p>CSS</p>
                            <div><div></div></div>
                        </div>
                        <div className="iten">
                            <p>SCSS</p>
                            <div><div></div></div>
                        </div>
                        <div className="iten">
                            <p>Javascript</p>
                            <div><div></div></div>
                        </div>
                    </div>
                    <div className="coluna-dir">
                        <div className="iten">
                            <p>Typescript</p>
                            <div><div></div></div>
                        </div>
                        <div className="iten">
                            <p>React</p>
                            <div><div></div></div>
                        </div>
                        <div className="iten">
                            <p>Python</p>
                            <div><div></div></div>
                        </div>
                        <div className="iten">
                            <p>Nodejs</p>
                            <div><div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }