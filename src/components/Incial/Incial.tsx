import Github from "../../imgs/github.svg"
import Linkedin from "../../imgs/linkedin.svg"
import Instagram from "../../imgs/instagram.svg"
import Seta from "../../imgs/seta.svg"
import "./Incial.css"

export default function Inicial() {

    return(
      <div id="box-inicial">
        <div className="box-fundo">
          <h1>Portfolio</h1>
          <hr/>
          <h2>Gabriel Pelizzaro PereiraFull-Stack Developer</h2>
          <div className="box-icons">
            <a href="https://github.com/fullzer4"><img className="box-icons-img" src={Github}/></a>
            <a href="https://www.linkedin.com/in/gabrielpereira-sc/"><img className="box-icons-img" src={Linkedin}/></a>
            <a href="https://www.instagram.com/yfullzer4.exe/"><img className="box-icons-img" src={Instagram}/></a>
          </div>
          <div className="box-seta"> 
            <img src={Seta}></img>
          </div>
        </div>
      </div>
    )
  }