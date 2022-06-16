import Bemvindo from "../../components/bemvindo/bemvindo"
import ButtonMenu from "../../components/menu/buttonMenu"
import RedeSocial from "../../components/redesocial/redesocial"
import Slider from "../../components/slider/slider"
import Divisor from "../../components/divisor/divisor"
import SocialCards from "../../components/socialCards/socialCards"


export default function Home() {
    return(
      <ButtonMenu>
        <Bemvindo/>
        <Slider/>
        <RedeSocial/>
        <Divisor/>
        <SocialCards/>
      </ButtonMenu>
    )
  }