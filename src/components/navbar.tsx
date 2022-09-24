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
import Aos from "aos"
export default function Navbar() {
    const {mudarcor, themeativo,themenav, themelangnav, themebuttonnav} = useContext(SwitchThemeContext)
    const {langswitcher, lang, imglang} = useContext(SwitchLanguageContext)
    const {pageselector, openconfig} = useContext(NavbarSelectContext)

    Aos.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 3000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
      });


    return (
        <div className="Navbar" id="navpush" data-aos="fade-up">
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