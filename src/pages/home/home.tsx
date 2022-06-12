import Bemvindo from "../../components/bemvindo/bemvindo"
import ButtonMenu from "../../components/menu/buttonMenu"
import Slider from "../../components/slider/slider"

export default function Home() {
    return(
      <ButtonMenu>
        <Bemvindo/>
        <Slider/>
      </ButtonMenu>
    )
  }