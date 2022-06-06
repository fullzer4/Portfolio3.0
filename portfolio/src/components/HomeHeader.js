import React, { Component} from 'react';
import github from "../imgs/github.svg"

export class HomeHeader extends Component {
    render() {
        return(
            <div id="Home-Header">
                <div className="site-nome">
                    <h1>Fullzer4s Website</h1>
                </div>
                <div className="header-github">
                    <img src={github} alt="github"/>
                </div>
            </div>
        )
    }
}