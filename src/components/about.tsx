import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/about.scss"

export default function About() {

    const {pageselector} = useContext(NavbarSelectContext)
    const {tituloaboutme, descricaoaboutme, buttonaboutme, techab, Comunicativo, Organizado, Criativo, Empatico, Flexivel, Resilencia, Resolverproblemas, Coordenar,Colaborativo,video} = useContext(SwitchLanguageContext)
    const {themedescricaoabout, themetituloabout, buttonprojetosobre, techabilities, softskills} = useContext(SwitchThemeContext)
    return (
        <div className="About">
            <div className="About-me">
                <div className="About-me-image"/>
                <div className="About-me-texto">
                    <h2 className={themetituloabout} >{tituloaboutme}</h2>
                    <p className={themedescricaoabout} >{descricaoaboutme}</p>
                    <button className={buttonprojetosobre} onClick={() => pageselector(3)} >{buttonaboutme}</button>
                </div>
            </div>
            <div  className="Tencinal-Habilities">
                <div  className="Tencinal-Habilities-title" >
                    <p className={themetituloabout}>{techab}</p>
                </div>
                <div  className="Tencinal-Habilities-itens">
                    <div className="coluna-esq">
                        <div className={techabilities}>
                            <p>HTML</p>
                            <div className="iten-porcentagem"><div className="porcentagem-Html"></div></div>
                        </div>
                        <div className={techabilities}>
                            <p>CSS</p>
                            <div className="iten-porcentagem"><div className="porcentagem-Css"></div></div>
                        </div>
                        <div className={techabilities}>
                            <p>SCSS</p>
                            <div className="iten-porcentagem"><div className="porcentagem-Scss"></div></div>
                        </div>
                        <div className={techabilities}>
                            <p>Javascript</p>
                            <div className="iten-porcentagem"><div className="porcentagem-Javascript"></div></div>
                        </div>
                    </div>
                    <div className="coluna-dir">
                        <div className={techabilities}>
                            <p>Typescript</p>
                            <div className="iten-porcentagem"><div className="porcentagem-Typescript"></div></div>
                        </div>
                        <div className={techabilities}>
                            <p>React</p>
                            <div className="iten-porcentagem"><div className="porcentagem-React"></div></div>
                        </div>
                        <div className={techabilities}>
                            <p>Python</p>
                            <div className="iten-porcentagem"><div className="porcentagem-Python"></div></div>
                        </div>
                        <div className={techabilities}>
                            <p>Nodejs</p>
                            <div className="iten-porcentagem"><div className="porcentagem-Nodejs"></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="Tencinal-Softskills">
                <div  className="Tencinal-Softskills-title">
                    <p className={themetituloabout}>SoftSkills</p>
                </div>
                <div  className="Tencinal-Softskills-itens">
                    <div className={softskills}>
                        <p>{Comunicativo}</p>
                        <p>{Organizado}</p>
                        <p>{Criativo}</p>
                        <p>{Flexivel}</p>
                        <p>{Empatico}</p>
                        <p>{Resilencia}</p>
                        <p>{Resolverproblemas}</p>
                        <p>{Coordenar}</p>
                        <p>{Colaborativo}</p>
                    </div>
                </div>
            </div>
            <div className="Video-sobremim">
                <p className={themetituloabout}>{video}</p>
                <div className="Video-sobremim-video">
                    <iframe src="https://www.youtube.com/embed/sE-PTexvWLQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
  }