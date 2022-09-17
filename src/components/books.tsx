import scrum from "../imgs/scrum.svg"
import cleancode from "../imgs/cleancode.svg"
import "../scss/books.scss"

export default function Books() {

    return (
        <div className="Books">
            <div className="Books-titulo">
                <h2>Livros que ja li e recomendo</h2>
            </div>
            <div className="books-card">
                <div className="card-book">
                    <img src={scrum}/>
                </div>
                <div className="book-text">
                    <p className="book-text-titulo">Sinopse:</p>
                    <p className="book-text-descri">Neste livro você conhecerá histórias de sucesso relacionadas a cultura ágil. Existe uma espécie de método, chamado de Framework Ágil, que reúne uma série de técnicas, conceitos e ferramentas pré-definidas para resolver problemas de modo rápido e eficaz. E, diante dessa metodologia, milhares de empresas de sucesso conseguem agilizar processos, melhorando a gestão e a organização da instituição.</p>
                </div>
            </div>
            <div className="books-card reverse">
                <div className="card-book">
                    <img src={cleancode}/>
                </div>
                <div className="book-text">
                    <p className="book-text-titulo">Sinopse:</p>
                    <p className="book-text-descri">Neste livro você conhecerá histórias de sucesso relacionadas a cultura ágil. Existe uma espécie de método, chamado de Framework Ágil, que reúne uma série de técnicas, conceitos e ferramentas pré-definidas para resolver problemas de modo rápido e eficaz. E, diante dessa metodologia, milhares de empresas de sucesso conseguem agilizar processos, melhorando a gestão e a organização da instituição.</p>
                </div>
            </div>
        </div>
    )
  }