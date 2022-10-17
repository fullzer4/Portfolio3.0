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
                    <p className="book-text-titulo">O que me ajudou:</p>
                    <p className="book-text-descri">Com o livro "Scrum: A arte de fazer o dobro do trabalho na metade do tempo” aprendi a melhorar meu desempenho em entregas e projetos tanto como consegui melhorar entregas em equipe aplicando o método Scrum em grupos de amigos e também em coisas simples que eu realizo na minha vida. Se você busca melhorar como profissional e pessoa este livro é ótimo para isso.</p>
                </div>
            </div>
            <div className="books-card reverse">
                <div className="card-book">
                    <img src={cleancode}/>
                </div>
                <div className="book-text">
                    <p className="book-text-titulo">O que me ajudou:</p>
                    <p className="book-text-descri">Com o livro "Clean Code” ou código limpo aprendi a refatorar meu códigos e melhorei o entendimento dos meus proprios codigos hoje aplico com meus amigos  o próprio método, com ele conseguimos chegar a uma padronização do nosso código assim melhoramento o nosso trabalho em equipe.</p>
                </div>
            </div>
        </div>
    )
  }