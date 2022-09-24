import { useContext } from "react"
import { SwitchLanguageContext } from "../contexts/switchlanguage"
import "../scss/intro.scss"
import { DiscordContext } from "../services/apidiscord"
import { GithubContext } from "../services/apigithub"
import { YoutubeContext } from "../services/apiyotube"
import Aos from "aos"

export default function Intro() {

    Aos.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 3000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
      });

    const {pegardadosgit, urlgit} = useContext(GithubContext)
    const {pegardadosdiscord} = useContext(DiscordContext)
    const {langswitcher, lang, imglang} = useContext(SwitchLanguageContext)
    const {} = useContext(YoutubeContext)
    pegardadosgit()
    pegardadosdiscord()

    var livetexto = ""
    var estilolive = ""
    var live = false

    if(live === false){
        livetexto = "off"
        estilolive = "live-off"

    }else{
        livetexto = "on"
        estilolive = "live-on"
    }

    return (
        <div className="Intro">
            <div className="Twitch" data-aos="fade-dowm">
                <a className="Twitch-box" href="https://www.twitch.tv/yfullzer4">
                    <div className="icon-twitch"></div><p>Live</p><p className={estilolive}>{livetexto}</p>
                </a>
            </div>
            <div className="Titulo">
                <h1 data-aos="fade-up">Fullzer4</h1>
            </div>
            <div className="Icons">
                <a href=""  className="icons-insta icon" data-aos="fade-up" data-aos-delay="50"></a>
                <a href="" className="icons-twitch icon" data-aos="fade-up" data-aos-delay="100"></a>
                <a href={urlgit} className="icons-github icon" data-aos="fade-up" data-aos-delay="150"></a>
                <a href="" className="icons-linkedin icon" data-aos="fade-up" data-aos-delay="200"></a>
            </div>
            <div className="Arrow">
                <a href="#navpush" className="icon-arrow"></a>
            </div>
        </div>
    )
  }
  