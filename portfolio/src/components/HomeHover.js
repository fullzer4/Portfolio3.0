import React, { Component} from 'react';
import Arrow from "../imgs/arrow.svg"

export class HomeHover extends Component {
    render() {
        return(
            <div id="botao-Hover">
                <button><img src={Arrow} alt="botao"></img></button>
            </div>
        )
    }
}