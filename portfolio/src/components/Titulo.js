import React, { Component} from 'react';

export class Titulo extends Component {
    render() {
        return(
            <div id="Home-Titulo">
                <h1>{this.props.conteudo}</h1>
            </div>
        )
    }
}