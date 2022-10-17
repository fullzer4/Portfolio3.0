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
                        <li><a href="https://www.canva.com/design/DAFKVkyiQEY/Bu3WCwhEG_dxHYol3M_5Ww/view?utm_content=DAFKVkyiQEY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Avaliação Trimestral Trabalho Quadrinho</a></li>
                        <li><a href="https://drive.google.com/file/d/1Hu0gDCOJs9v9S2Y8l9jMNImohfqclxdJ/view?usp=sharing">Vídeo Stop Motion - Geometria</a></li>
                        <li><a href="https://drive.google.com/file/d/1zuhRaGDs91MIHQiHkaq_qAsYT4W2km_Q/view?usp=sharing">Ponte de macarrão</a></li>
                    </ul>
                    <p>Ciências da natureza</p>
                    <ul>
                        <li><a href="https://docs.google.com/document/d/1ZiqKR8yakXwVBnYT-OPwaA4oORYTtc6l_tAUPLryA9w/edit?usp=sharing">Relatorio Propriedades Coligativas</a></li>
                        <li><a href="https://www.canva.com/design/DAFKI_mti0U/ouSQVYOcw0VCesI733ZXSg/view?utm_content=DAFKI_mti0U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Trimestral - Revista Ambiental</a></li>
                        <li><a href="https://tecsasenaictai.netlify.app/">SA Termodinâmica - PESQUISAS e EXPERIMENTOS</a></li>
                        <li><a href="">Baby Aliens</a></li>
                    </ul>
                    <p>Humanas</p>
                    <ul>
                        <li><a href="https://docs.google.com/presentation/d/1-Fi7qjk1ckOPwkBatmVQTlDmvYhwv2h7_wA4bj0CD_E/edit?usp=sharing">Infográfico Grupos Étnicos de SC</a></li>
                        <li><a href="">Tabela de Hábitos Culturais</a></li>
                        <li><a href="">Quadro pinturas medievais / modernas</a></li>
                        <li><a href="">Releitura a Escola de Atenas</a></li>
                    </ul>
                    <p>Linguagens</p>
                    <ul>
                        <li><a href="">Projeto de vida</a></li>
                        <li><a href="">Trabalho sobre Museus de Santa Catarina</a></li>
                        <li><a href="">Trabalho sobre Músicas em inglês</a></li>
                        <li><a href="">Redação</a></li>
                    </ul>
                    <p>Atividades de 2021/Cronograma escolar</p>
                    <ul>
                        <li><a href="https://docs.google.com/presentation/d/16yrDEjgYVFcQnfRipgOdEEzIsP5Gr7CR/edit?usp=sharing&ouid=112546036290330363303&rtpof=true&sd=true">Portfolio 2021</a></li>
                        <li><a href="">Cronograma2022</a></li>
                    </ul>
                </div>
            </div>
            <div className={artigosPage}>
                <h2>Sem artigos ainda :(</h2>


            </div>
        </div>
    )
  }