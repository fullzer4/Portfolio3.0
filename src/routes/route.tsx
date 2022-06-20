import { BrowserRouter, Routes, Route} from "react-router-dom"
import Certificados from "../pages/certificados"
import Conhecimentos from "../pages/conhecimentos"
import Home from "../pages/home"
import Projeto from "../pages/projetos"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projetos" element={<Projeto/>}/>
        <Route path="/conhecimentos" element={<Conhecimentos/>}/>
        <Route path="/certificados" element={<Certificados/>}/>
      </Routes>
    </BrowserRouter>
  )
}
