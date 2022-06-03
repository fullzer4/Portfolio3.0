import React, { Component} from 'react';
import "./styles/reset.css";
import "./styles/Home.css";
import { Titulo } from './components/Titulo';
import { HomeFoto } from './components/HomeFoto';

class Home extends Component {
    render() {
        return(
            <div id="pagina">
                <div className="conteudo">
                    <div className="conteudo-Pr">
                        <Titulo/>
                        <HomeFoto></HomeFoto>
                    </div>
                    <div className="conteudo-Hover">

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;