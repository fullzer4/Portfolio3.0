import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/home"


export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
} 