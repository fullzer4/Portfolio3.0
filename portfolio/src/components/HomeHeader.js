import React, { Component} from 'react';
import github from "../imgs/github.svg"

export class HomeHeader extends Component {
    render() {
        return(
            <div id="Home-Header">
                <div className="header-github">
                    <img src={github} alt="github"/>
                </div>
            </div>
        )
    }
}