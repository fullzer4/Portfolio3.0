import { useContext  } from "react"
import About from "./components/about"
import Academico from "./components/academico"
import Books from "./components/books"
import Certificados from "./components/certificados"
import Config from "./components/config"
import Home from "./components/home"
import Intro from "./components/intro"
import Navbar from "./components/navbar"
import Projects from "./components/projects"
import Rodape from "./components/rodape"
import { NavbarSelectContext } from "./contexts/navbarpageselect"
import { SwitchThemeContext } from "./contexts/switchtheme"
import "./scss/index.scss"
import "./scss/pages.scss"

export default function App() {

  const {pageHome, pageSobre, pageProjetos, pageLivros, pageCertificados, pageAcademico} = useContext(NavbarSelectContext)
  const {themefundo} = useContext(SwitchThemeContext)

  return (
      <div className={themefundo}>
        <Intro/>
        <div id="Page">
          <Config/>
          <Navbar/>
          <div className={pageHome}>
            <Home/>
          </div>
          <div className={pageSobre}>
            <About/>
          </div>
          <div className={pageProjetos}>
            <Projects/>
          </div>
          <div className={pageLivros}>
            <Books/>
          </div>
          <div className={pageCertificados}>
            <Certificados/>
          </div>
          <div className={pageAcademico}>
            <Academico/>
          </div>
          <Rodape/>
        </div>
      </div>
  )
}
