import Bemvindo from "../../components/bemvindo/bemvindo"
import ButtonMenu from "../../components/menu/buttonMenu"
import RedeSocial from "../../components/redesocial/redesocial"
import Slider from "../../components/slider/slider"
import Discord from "../../components/discord/discord"


export default function Home() {
    return(
      <ButtonMenu>
        <Bemvindo/>
        <Slider/>
        <RedeSocial/>
        <Discord/>
      </ButtonMenu>
    )
  }