import React, { Component } from 'react';
import Arrow from "../imgs/arrow.svg"

export class HomeHover extends Component {
    constructor(props) {
        super(props);
        this.hover = this.hover.bind(this);
        
    }

    hover() {
        document.getElementsByClassName("hover")[0].classList.add("active")
        document.getElementById("botao-hover").style.display = "none"
    }
    fechar() {
        document.getElementsByClassName("hover")[0].classList.remove("active")
        document.getElementById("botao-hover").style.display = "flex"
    }
    render() {
        return(
            <div id="box-hover">
                <div className="hover">
                    <button id="botao-hover-close" onClick={this.fechar}><img src={Arrow} alt="botao"/></button>
                </div>
                <div id="box-botao-hover">
                    <button id="botao-hover" onClick={this.hover}><img src={Arrow} alt="botao"/></button>
                </div>
            </div>
        )
    }
}