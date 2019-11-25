import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Board from 'components/Board';
import Message from 'components/Message';
import './index.css';

class Game extends Component{
    constructor(props){
        super(props);

        this.state = {
            playerx: true,
            draw: false,
            winner: null,
            message: false,
            looser: false,
        }

        this.changeTurn = this.changeTurn.bind(this);
        this.chooseWinner = this.chooseWinner.bind(this);
        this.closeDrawMessage = this.closeDrawMessage.bind(this);
        this.openDrawMessage = this.openDrawMessage.bind(this);
        this.openWinnerMessage = this.openWinnerMessage.bind(this);
        this.closeWinnerMessage = this.closeWinnerMessage.bind(this);
        this.openLooserMessage = this.openLooserMessage.bind(this);
        this.closeLooserMessage =  this.closeLooserMessage.bind(this);
    }
    
    changeTurn(){
        this.setState(prevState => ({
            playerx: !prevState.playerx
        }))
    }

    closeDrawMessage(){
        this.setState({draw: false})
    }

    openDrawMessage(){
        this.setState({draw: true})
    }

    closeWinnerMessage(){
        this.setState({message: false})
        this.setState({winner: null})
    }

    openWinnerMessage(){
        this.setState({message: true})
    }

    closeLooserMessage(){
        this.setState({looser: false})
        this.setState({winner: null})
    }

    openLooserMessage(){
        this.setState({looser: true})
    }

    chooseWinner(player){
        this.setState({winner: player})
    }
    render(){
        const turn = `${this.state.playerx? 'X' : 'O'}`;
        const userName = localStorage.getItem('userName')
        return(
            <Fragment>
                <Message 
                    title="Empate"
                    body="Upps!! Quedaron empatados :c"
                    buttonText="Cerrar"
                    alt="Empate"
                    img="./img/empate.png"
                    onClick={this.closeDrawMessage}
                    open={this.state.draw}
                    />
                <Message 
                    title="¡Ganador!"
                    body={`¡Felicidades ${userName} haz ganado!`}
                    winner={this.state.winner}
                    buttonText="Cerrar"
                    alt="Empate"
                    img="./img/michi.png"
                    onClick={this.closeWinnerMessage}
                    open={this.state.message}
                    />
                    <Message 
                    title="¡Uy, perdiste!"
                    body={`¡Mejor suerte para la próxima!`}
                    buttonText="Cerrar"
                    alt="Empate"
                    img="./img/empate.png"
                    onClick={this.closeLooserMessage}
                    open={this.state.looser}
                    />
                <header className="game-header">
                    <p className="user-name">{userName}</p>
                    <h4 className="title">Es turno de: </h4>
                    <span className="title turn">{turn}</span>
                </header>
                <main className="game">
                    <Board 
                        turn={this.state.playerx} 
                        changeTurn={this.changeTurn}
                        openDrawMessage={this.openDrawMessage}
                        openWinnerMessage={this.openWinnerMessage}
                        openLooserMessage={this.openLooserMessage}
                        chooseWinner={this.chooseWinner}
                        winner={this.state.winner}
                        />
                </main>
                <footer>
                    <Link className="yellow-button" to="/">Salir</Link>
                </footer>
            </Fragment>
        )
    }
}

export default Game;