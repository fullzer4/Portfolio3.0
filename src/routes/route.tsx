import { BrowserRouter, Routes, Route} from "react-router-dom"
import Certificados from "../pages/certificados"
import Contatos from "../pages/contatos"
import Home from "../pages/home"
import Projetos from "../pages/projetos"
import Sobremim from "../pages/sobremim"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="/sobremim" element={<Sobremim/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
        <Route path="/certificados" element={<Certificados/>}/>
      </Routes>
    </BrowserRouter>
  )
}