import { useContext, useState } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import { SwitchThemeContext } from "../contexts/switchtheme"
import HomeIcon from "../imgs/HomeIcon"
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
                <div onClick={() => pageselector(2)} className={navbarSobre}/>
                <div onClick={() => pageselector(3)} className={navbarProjetos}/>
                <div onClick={() => pageselector(4)} className={navbarLivros}/>
                <div onClick={() => pageselector(5)} className={navbarCertificados}/>
                <div onClick={() => pageselector(6)} className={navbarAcademico}/>
            </div>
            <div className="Theme-button" onClick={()=> mudarcor()}>
                <button className={themeativo}/>
            </div>
        </div>
    )
  }