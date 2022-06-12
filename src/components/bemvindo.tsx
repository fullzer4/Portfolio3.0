import Me from "../imgs/me.svg"

export default function Bemvindo() {
    return(
      <div className="bemvindo">
        <div className="bemvindo-titulo">
          <h1 className="bemvindo-titulo-texto">cert</h1>
        </div>
        <div>
          <img src={Me} alt="me"/>
        </div>
      </div>
    )
  }