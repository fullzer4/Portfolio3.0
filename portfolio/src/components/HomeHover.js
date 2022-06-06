import React, { Component } from 'react';
import Arrow from "../imgs/arrow.svg"

export class HomeHover extends Component {
    constructor(props) {
        super(props);
        this.hover = this.hover.bind(this);
        
    }

    hover() {
        alert("puta")
        document.getElementsByClassName("hover")[0].classList.add("active")
    }
    fechar() {
        alert("puta")
        document.getElementsByClassName("hover")[0].classList.remove("active")
    }
    render() {
        return(
            <div id="box-hover">
                <div className="hover">
                    <button id="botao-hover-close" onClick={this.fechar}></button>
                </div>
                <div id="box-botao-hover">
                    <button id="botao-hover" onClick={this.hover}><img src={Arrow} alt="botao"></img></button>
                </div>
            </div>
        )
    }
}