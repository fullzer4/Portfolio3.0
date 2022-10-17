import { useContext } from "react"
import { SwitchAcademicContext } from "../contexts/switchacademic"
import "../scss/academico.scss"

export default function Academico() {

    const {chosepage, academicoPage, escolarPage, artigosPage} = useContext(SwitchAcademicContext)

    return (
        <div className="Academico-page">
            <div className="Chose-academic">
                <button className="Button" onClick={() => chosepage(1)}>Academico</button>
                <button className="Button" onClick={() => chosepage(2)}>Escolar</button>
                <button className="Button" onClick={() => chosepage(3)}>Artigos</button>
            </div> 
            <div className={academicoPage}>
                <h2>Academico</h2>
            </div>
            <div className={escolarPage}>
                <h2>Atividades Escolares</h2>
                <div className="EscolarBox">
                    <p>Disciplinas Técnicas</p>
                    <ul>
                        <li><a href="https://tecsasenaictai.netlify.app/">SA TERMODINÂMICA - CALCULADORA</a></li>
                    </ul>
                    <p>Matemática</p>
                    <ul>
                        <li><a href="https://tecsasenaictai.netlify.app/">Avaliação Trimestral Trabalho Quadrinho</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Vídeo Stop Motion - Geometria</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Ponte de macarrão</a></li>
                    </ul>
                    <p>Ciências da natureza</p>
                    <ul>
                        <li><a href="https://tecsasenaictai.netlify.app/">Relatorio Propriedades Coligativas</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Trimestral - Revista Ambiental</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">SA Termodinâmica - PESQUISAS e EXPERIMENTOS</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Baby Aliens</a></li>
                    </ul>
                    <p>Humanas</p>
                    <ul>
                        <li><a href="https://tecsasenaictai.netlify.app/">Infográfico Grupos Étnicos de SC</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Tabela de Hábitos Culturais</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Quadro pinturas medievais / modernas</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Releitura a Escola de Atenas</a></li>
                    </ul>
                    <p>Linguagens</p>
                    <ul>
                        <li><a href="https://tecsasenaictai.netlify.app/">Projeto de vida</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Trabalho sobre Museus de Santa Catarina</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Trabalho sobre Músicas em inglês;</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">Redação</a></li>
                    </ul>
                    <p>Atividades de 2021/Cronograma escolar</p>
                    <ul>
                        <li><a href="https://docs.google.com/presentation/d/16yrDEjgYVFcQnfRipgOdEEzIsP5Gr7CR/edit?usp=sharing&ouid=112546036290330363303&rtpof=true&sd=true">Portfolio 2021</a></li>
                        <li><a href="https://docs.google.com/presentation/d/16yrDEjgYVFcQnfRipgOdEEzIsP5Gr7CR/edit?usp=sharing&ouid=112546036290330363303&rtpof=true&sd=true">Cronograma2022</a></li>
                    </ul>
                </div>
            </div>
            <div className={artigosPage}>
                <h2>Sem artigos ainda :(</h2>


            </div>
        </div>
    )
  }