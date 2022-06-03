import React, { Component} from 'react';
import FotoH from "../imgs/HomeFoto.svg";

export class HomeFoto extends Component {
    render() {
        return(
            <div id="Home-Foto">
                <img alt="foto minha" src={FotoH}></img>
            </div>
        )
    }
}