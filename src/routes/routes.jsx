import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"

export default function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
} 