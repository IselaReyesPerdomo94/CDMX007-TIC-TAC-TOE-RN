import React, {Component, Fragment} from 'react';
import Board from 'components/Board';
import YellowButton from 'components/YellowButton/';
import './index.css';

class Game extends Component{
    render(){
        return(
            <Fragment>
                <header>
                <h4 className="title">Es turno de </h4><span></span>
                </header>
                <main className="game">
                    <Board/>
                </main>
                <footer>
                    <YellowButton text='Salir' link='/'/>
                </footer>
            </Fragment>
        )
    }
}

export default Game;