import React, {Component, Fragment} from 'react';
import YellowButton from 'components/YellowButton/';
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
            message: false
        }

        this.changeTurn = this.changeTurn.bind(this);
        this.chooseWinner = this.chooseWinner.bind(this);
        this.closeDrawMessage = this.closeDrawMessage.bind(this);
        this.openDrawMessage = this.openDrawMessage.bind(this);
        this.openWinnerMessage = this.openWinnerMessage.bind(this);
        this.closeWinnerMessage = this.closeWinnerMessage.bind(this);
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

    chooseWinner(player){
        this.setState({winner: player})
    }
    render(){
        const turn = `${this.state.playerx? 'X' : 'O'}`;
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
                    body="¡Felicidades haz ganado!"
                    winner={this.state.winner}
                    buttonText="Cerrar"
                    alt="Empate"
                    img="./img/michi.png"
                    onClick={this.closeWinnerMessage}
                    open={this.state.message}
                    />
                <header className="game-header">
                    <h4 className="title">Es turno de: </h4>
                    <span className="title turn">{turn}</span>
                    
                </header>
                <main className="game">
                    <Board 
                        turn={this.state.playerx} 
                        changeTurn={this.changeTurn}
                        openDrawMessage={this.openDrawMessage}
                        openWinnerMessage={this.openWinnerMessage}
                        chooseWinner={this.chooseWinner}
                        winner={this.state.winner}
                        />
                </main>
                <footer>
                    <YellowButton text='Salir' link='/'/>
                </footer>
            </Fragment>
        )
    }
}

export default Game;