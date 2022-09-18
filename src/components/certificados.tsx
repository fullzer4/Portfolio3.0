import "../scss/certificados.scss"
import CPV from "../imgs/ComputerVision.svg"
import CiscoIBD from "../imgs/CiscoIntroBD.svg"
import IOTScratch from "../imgs/IOTScratchMarket.svg"
import appsIOTREACT from "../imgs/appReactNative.svg"
import Reactjs from "../imgs/CertificadoReact.svg"
import TorneioSeSiFll from "../imgs/sesiroboticaFLL.svg"
import AppsLua from "../imgs/desendeapp.svg"
import Ingles from "../imgs/teddybear.svg"
import Robotica from "../imgs/roboticaidocode.svg"
import Scratch from "../imgs/desendejogosidocode.svg"
import CiscoLinux from "../imgs/certificadolinux.svg"

export default function Certificados() {

    return (
        <div className="Certificados">
            <div className="Cert-titulo">
                <h2>Certificados</h2>
            </div>
            <div className="Cert-box">
                <div className="cert">
                    <div className="cert-text">
                        <p className="title">Modern Computer Vision</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={CPV}/>
                    </div>
                </div>
                <div className="cert reverse">
                    <div className="cert-text">
                        <p className="title">Complete Guide to Build IOT</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={IOTScratch}/>
                    </div>
                </div>
                <div className="cert">
                    <div className="cert-text">
                        <p className="title">Apps com React Native e NodeMCU</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={appsIOTREACT}/>
                    </div>
                </div>
                <div className="cert reverse">
                    <div className="cert-text">
                        <p className="title">Introduction to Cybersecurity</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img badge">
                        <img src={CiscoIBD}/>
                    </div>
                </div>
                <div className="cert">
                    <div className="cert-text">
                        <p className="title">React js zero ao avançado</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={Reactjs}/>
                    </div>
                </div>
                <div className="cert reverse">
                    <div className="cert-text">
                        <p className="title">Linux Unhatched</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={CiscoLinux}/>
                    </div>
                </div>
                <div className="cert">
                    <div className="cert-text">
                        <p className="title">First Lego League</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={TorneioSeSiFll}/>
                    </div>
                </div>
                <div className="cert reverse">
                    <div className="cert-text">
                        <p className="title">Desenvolvimento de apps com lua</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={AppsLua}/>
                    </div>
                </div>
                <div className="cert">
                    <div className="cert-text">
                        <p className="title">Ingles Intermediario A</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img page">
                        <img src={Ingles}/>
                    </div>
                </div>
                <div className="cert reverse">
                    <div className="cert-text">
                        <p className="title">Robotica com raspeberry pi e python</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={Robotica}/>
                    </div>
                </div>
                <div className="cert">
                    <div className="cert-text">
                        <p className="title">Desenvolvimento de jogos Scratch</p>
                        <p className="desc">Nesse curso tive uma introdução de construção de IA para Visão Computacional e me deixou mais interessado ainda em estudar esse área. Aprendi a usar opencv, yolov3-v4-v5, pyTorch, Keras e Tensorflow2.</p>
                    </div>
                    <div className="cert-img">
                        <img src={Scratch}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }