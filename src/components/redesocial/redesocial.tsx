import github from "../../imgs/github.svg"
import instagram from "../../imgs/instagram.svg"
import linkedin from "../../imgs/linkedin.svg"
import twitch from "../../imgs/twitch.svg"
import "./redesocial.css"

export default function RedeSocial() {
  return(
    <div className="box-icons">
      <img src={github} alt="github" className="icons"/>
      <img src={instagram} alt="instagram" className="icons"/>
      <img src={linkedin} alt="linkedin" className="icons"/>
      <img src={twitch} alt="twitch" className="icons"/>
    </div>
  )
}