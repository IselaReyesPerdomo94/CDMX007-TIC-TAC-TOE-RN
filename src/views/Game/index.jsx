import React, {Component, Fragment} from 'react';
import Board from 'components/Board';
import YellowButton from 'components/YellowButton/';

import './index.css';

class Game extends Component{
    constructor(props){
        super(props);

        this.state = {
            playerx: true
        }

        this.changeTurn = this.changeTurn.bind(this);
    }
    
    changeTurn(){
        this.setState(prevState => ({
            playerx: !prevState.playerx
        }))
    }

    render(){
        const turn = `${this.state.playerx? 'X' : 'O'}`;
        return(
            <Fragment>
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