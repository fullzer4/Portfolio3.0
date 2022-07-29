import Entrada from "./components/entrada/entrada";
import Sobremim from "./components/sobremim/sobremim";

export default function App() {
  return(
    <div id="conteudo">
      <div id="tela-inicial">
        <Entrada/>
      </div>
      <div id="telas">
        <div className="tela 1">
          <Sobremim/>
        </div>
        <div className="tela 2">
          
        </div>
        <div className="tela 3">

        </div>
      </div>
    </div>
  )
}