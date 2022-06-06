import React, { Component} from 'react';

export class Titulo extends Component {
    render() {
        return(
            <div id="Home-Titulo">
                <h2>{this.props.conteudo}</h2>
            </div>
        )
    }
}