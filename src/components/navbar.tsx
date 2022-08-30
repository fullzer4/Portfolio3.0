import { useContext, useState } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import AboutIcon from "../imgs/AboutIcon"
import BooksIcon from "../imgs/booksIcon"
import CertificadosIcon from "../imgs/certificateIcon"
import HomeIcon from "../imgs/HomeIcon"
import ProjectIcon from "../imgs/projectIcon"
import SchoolIcon from "../imgs/schoolIcon"
import "../scss/navbar.scss"

export default function Navbar() {
    const {mudarcor, themeativo} = useContext(SwitchThemeContext)
    const {langswitcher, lang, imglang} = useContext(SwitchLanguageContext)
    const {pageselector, navbarSobre, navbarProjetos, navbarLivros, navbarCertificados, navbarAcademico} = useContext(NavbarSelectContext)

    return (
        <div className="Navbar">
            <div onClick={langswitcher} className="changelang-nav">
                    <div className={imglang}/>
                    <p className="changelang-text">{lang}</p>
                </div>
            <div className="Navbar-nav">
                <div onClick={() => pageselector(1)}><HomeIcon/></div>
                <div onClick={() => pageselector(2)}><AboutIcon/></div>
                <div onClick={() => pageselector(3)}><ProjectIcon/></div>
                <div onClick={() => pageselector(4)}><BooksIcon/></div>
                <div onClick={() => pageselector(5)}><CertificadosIcon/></div>
                <div onClick={() => pageselector(6)}><SchoolIcon/></div>
            </div>
            <div className="Theme-button" onClick={()=> mudarcor()}>
                <button className={themeativo}/>
            </div>
        </div>
    )
  }