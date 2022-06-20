import Bemvindo from "../components/bemvindo/bemvindo";
import Comunidade from "../components/comunidade/comunidade";
import Header from "../components/header/header";

export default function Home() {
  return(
    <div id="pagina">
      <Header/>
      <Bemvindo/>
      <Comunidade/>
    </div>
  )
}