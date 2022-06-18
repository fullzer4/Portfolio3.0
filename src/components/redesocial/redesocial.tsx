import github from "../../imgs/github.svg"
import instagram from "../../imgs/instagram.svg"
import linkedin from "../../imgs/linkedin.svg"
import twitch from "../../imgs/twitch.svg"
import "./redesocial.css"
import AOS from "aos"

export default function RedeSocial() {
  AOS.init({
    delay: 100,
    duration: 200
  })
  return(
    <div className="box-icons">
      <img src={github} alt="github" className="icons" data-aos="fade-up"/>
      <img src={instagram} alt="instagram" className="icons" data-aos="fade-up"/>
      <img src={linkedin} alt="linkedin" className="icons" data-aos="fade-up"/>
      <img src={twitch} alt="twitch" className="icons" data-aos="fade-up"/>
    </div>
  )
}