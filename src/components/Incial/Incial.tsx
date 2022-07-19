import Github from "../../imgs/github.svg"
import Linkedin from "../../imgs/linkedin.svg"
import Instagram from "../../imgs/instagram.svg"
import "./Incial.css"
import { Link } from "react-router-dom"

export default function Inicial() {

    return(
      <div id="box-inicial">
        <div className="box-fundo">
          <h1>Portfolio</h1>
          <h2>Gabriel Pelizzaro PereiraFull-Stack Developer</h2>
          <div className="box-icons">
            <img className="box-icons-img" src={Github}></img>
            <img className="box-icons-img" src={Linkedin}></img>
            <img className="box-icons-img" src={Instagram}></img>
          </div>
        </div>
      </div>
    )
  }