import { BrowserRouter, Routes, Route} from "react-router-dom"
import Certificates from "../pages/certificates/certificates"
import Home from "../pages/home/home"
import Projects from "../pages/projects/projects"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/certificates" element={<Certificates/>}/>
      </Routes>
    </BrowserRouter>
  )
}
