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
            open: false
        }

        this.changeTurn = this.changeTurn.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
    }
    
    changeTurn(){
        this.setState(prevState => ({
            playerx: !prevState.playerx
        }))
    }

    closeMessage(){
        this.setState({open: false})
    }

    openMessage(){
        this.setState({open: true})
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
                    onClick={this.closeMessage}
                    open={this.state.open}
                    />
                <header className="game-header">
                    <h4 className="title">Es turno de: </h4>
                    <span className="title turn">{turn}</span>
                    
                </header>
                <main className="game">
                    <Board turn={this.state.playerx} changeTurn={this.changeTurn}/>
                </main>
                <footer>
                    <YellowButton text='Salir' link='/'/>
                </footer>
            </Fragment>
        )
    }
}

export default Game;