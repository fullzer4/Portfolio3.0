import "../scss/projects.scss"
import SA from "../imgs/SAtermo.svg"
import TD from "../imgs/Todolist.svg"

export default function Projects() {

    return (
        <div className="Projects">
            <div className="Project-card">
                <div className="Project-apresentation">
                    <div className="Project-text">
                        <p className="titulo">Situação de aprendizagem Calculadora Termodinamica</p>
                        <p className="texto">Nesse projeto nos foi proposto realizar apenas uma calculadora com calculos de termodinamica mas decidimos realizar um site onde podemos ver a teoria por tras desses calculos e ver analises em tempo real dos calculos que são mais usados em nosso site. Tecnologias usadas: Typescript, React, Css, Html, Nodejs, Firebase e mais alguns frameworks.</p>
                        <p className="descri">Site feito abaixo:</p>
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
                    <div className="Project-text">
                        <p className="titulo">Lista de afazeres</p>
                        <p className="texto">Nessa atividade de sala foi proposto criar uma lista de afazeres, decidi realizar com banco de dados ao invés de usar localstorage por conta de que se usasse localstorage eu não poderia acessar pelo meu celular então decidi criar esse site com uma criação de usuário para guardar os dados desse dentro de um banco nosql (firebase) assim possibilitando o usuário acessar em outras plataformas. Tecnologias usadas: React, javascript, html, css e Firebase</p>
                        <p className="descri">Site feito abaixo:</p>
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