import React from 'react';

import './styles.css';

class Folders extends React.Component {
    render() {
        return(
            <div className="index">
                <div className="wrapper">
                    <h1>Ódio bot</h1>
                    <div className="lista-specs">
                        <input type="checkbox" className="trigger-input" id="spec-1"/>
                        <div className="trigger-wrapper">
                            <label htmlFor="spec-1">
                                <h2 className="titulo-spec"> <img src={require("../../assets/robot.svg")} alt="imagem de robô"/>Sobre o Bot</h2>
                            </label>
                            <p className="conteudo-spec">O bot surgiu a partir idéia de estudar Node.js e JavaScript, por Felipe Pierotti e Murilo Neves. Vimos na internet alguns tutorias que ensinavam a criar esses bots para o twitter e então, decedimos também criar o nosso, o que nos rendeu um bom tempo de estudos e práticas de programação que acabaram alem de Node e JS.</p> 
                        </div>
                    </div>

                    <div className="lista-specs">
                        <input type="checkbox" className="trigger-input" id="spec-2" />
                        <div className="trigger-wrapper">
                            <label htmlFor="spec-2">
                                <h2 className="titulo-spec"> <img src={require("../../assets/question-mark.svg")} alt="imagem de pesquisa"/>O porque do bot</h2>
                            </label>
                            <p className="conteudo-spec">O bot do ódio basicamente, está no ar para nada além de uma brincadeira, que objetiva apenas compartilhar tweets aleatórios, de pessoas que tweetaram a palavra "ódio".</p>
                        </div>
                    </div>

                    <div className="lista-specs">
                        <input type="checkbox" className="trigger-input" id="spec-3" />
                        <div className="trigger-wrapper">
                            <label htmlFor="spec-3">
                                <h2 className="titulo-spec"><img src={require("../../assets/science.svg")} alt="imagem de atomo"/>Tecnologias usadas</h2>
                            </label>
                            <p className="conteudo-spec">Como uma aplicação backend, optamos por utilizar o JavaScript, por ser uma linguagem multiparadigma, e de fácil entendimento/uso, juntamente com o framework Node.js, para fazer a conexão com servidores/biliotecas. O deploy da aplicação foi feito no Heroku pois tinha suporte ao Node.js e um CLI de facil entendimento</p>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <a href="https://github.com/EffEmPee/OdioBot" target="_blank" className="gitilogo"><img src={require("../../assets/githubImage.png")} alt="imagem de github" width="50px" height="50px" className="img1"/></a>
                    <a href="https://twitter.com/odio_bot" target="_blank" className="gitilogo"><img src={require("../../assets/twitter.png")} alt="imagem de twitter" width="50px" height="50px" className="img2"/></a>
                </div>
            </div>
        );
    }
}

export default Folders