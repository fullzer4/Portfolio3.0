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
import config from "../imgs/config.svg"

export default function Navbar() {
    const {mudarcor, themeativo,themenav, themelangnav, themebuttonnav} = useContext(SwitchThemeContext)
    const {langswitcher, lang, imglang} = useContext(SwitchLanguageContext)
    const {pageselector, openconfig} = useContext(NavbarSelectContext)

    return (
        <div className="Navbar" id="navpush">
            <div className={themenav}>
                <div onClick={() => pageselector(1)}><HomeIcon/></div>
                <div onClick={() => pageselector(2)}><AboutIcon/></div>
                <div onClick={() => pageselector(3)}><ProjectIcon/></div>
                <div onClick={() => pageselector(4)}><BooksIcon/></div>
                <div onClick={() => pageselector(5)}><CertificadosIcon/></div>
                <div onClick={() => pageselector(6)}><SchoolIcon/></div>
                <div className="config" onClick={() => openconfig(1)}><img src={config} className="config-img"></img></div>
            </div>
        </div>
    )
  }