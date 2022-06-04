import React, { Component} from 'react';
import "./styles/reset.css";
import "./styles/Home.css";
import { Titulo } from './components/Titulo';
import { HomeFoto } from './components/HomeFoto';
import { HomeHover } from './components/HomeHover';

class Home extends Component {
    render() {
        return(
            <div id="pagina">
                <div className="conteudo">
                    <div className="conteudo-Pr">
                        <Titulo/>
                        <HomeFoto/>
                    </div>
                    <div className="conteudo-Hover">
                        <HomeHover/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;