import "../scss/projects.scss"
import { useContext } from "react"
import SA from "../imgs/SAtermo.svg"
import TD from "../imgs/Todolist.svg"
import { SwitchThemeContext } from "../contexts/switchtheme"
import { SwitchLanguageContext } from "../contexts/switchlanguage"

export default function Projects() {

    const {projecttext} = useContext(SwitchThemeContext)
    const {tddesc,tdtitulo,descb,buttom,calcdesc,calctitulo} = useContext(SwitchLanguageContext)
    return (
        <div className="Projects">
            <div className="Project-card">
                <div className="Project-apresentation">
                    <div className={projecttext}>
                        <p className="titulo">{calctitulo}</p>
                        <p className="texto">{calcdesc}</p>
                        <p className="descri">{descb}</p>
                        <a href="https://github.com/fullzer4/TEC-SA-Senai-CTAI">{buttom}</a>
                    </div>
                    <div className="Project-img">
                        <img src={SA}></img>
                    </div>
                </div>
                <div className="Project-website">
                    <iframe src="https://tecsasenaictai.netlify.app/" scrolling="no"></iframe>
                </div>
            </div>
            
            <hr/>

            <div className="Project-card">
                <div className="Project-apresentation">
                    <div className={projecttext}>
                        <p className="titulo">{tdtitulo}</p>
                        <p className="texto">{tddesc}</p>
                        <p className="descri">{descb}</p>
                        <a href="https://github.com/fullzer4/ToDoList">{buttom}</a>
                    </div>
                    <div className="Project-img">
                        <img src={TD}></img>
                    </div>
                </div>
                <div className="Project-website">
                    <iframe src="https://todolist-yfullzer4.netlify.app/" scrolling="no"></iframe>
                </div>
            </div>
        </div>
    )
}