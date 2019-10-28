import React, {Component, Fragment} from 'react';
import Board from 'components/Board';
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
            </Fragment>
        )
    }
}

export default Game;