import idcSlide from "../../imgs/idcSlide.svg"
import "./slider.css"

export default function Slider() {
    return(
        <div className="slider">
            <div className="slides">
                <div className="slide1">
                    <img src={idcSlide} alt="imagem Bone para defecientes visuais feito na idocode" className="img"/>
                    <div className="slide-content-box">
                        <h2 className="slide-Titulo">Bone para deficientes visuais</h2>
                        <div className="slide-Divisor"></div>
                        <h3 className="slide-Descricao">Esse projeto foi feito na start up Idocode com o foco de ajudar deficientes visuais. Para realizar foi usado raspeberripy e sonar com a linguagem python.</h3>
                        <button className="slide-Botao">Ver mais</button>
                    </div>
                </div>
            </div>
            <div className="slide-change-button">

            </div>
        </div>
    )
}