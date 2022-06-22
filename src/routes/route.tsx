import { BrowserRouter, Routes, Route} from "react-router-dom"
import Certificados from "../pages/conhecimentos"
import Contatos from "../pages/contatos"
import Home from "../pages/home"
import Projeto from "../pages/projetos"
import Sobremim from "../pages/sobremim"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projetos" element={<Projeto/>}/>
        <Route path="/sobremim" element={<Sobremim/>}/>
        <Route path="/certificados" element={<Certificados/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
      </Routes>
    </BrowserRouter>
  )
}
