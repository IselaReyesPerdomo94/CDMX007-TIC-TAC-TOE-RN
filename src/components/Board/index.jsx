import React, {Component} from 'react';
import SquareBox from 'components/SquareBox/';
import PropTypes from 'prop-types';
import './index.css';

class Board extends Component{
    render(){
        const {turn, changeTurn} = this.props;
        console.log(changeTurn)
        return(
            <div className="board">
                <SquareBox turn={turn} changeTurn={changeTurn}/>
                <SquareBox turn={turn} changeTurn={changeTurn}/>
                <SquareBox turn={turn} changeTurn={changeTurn}/>
                <SquareBox turn={turn} changeTurn={changeTurn}/>
                <SquareBox turn={turn} changeTurn={changeTurn}/>
                <SquareBox turn={turn} changeTurn={changeTurn}/>
                <SquareBox turn={turn} changeTurn={changeTurn}/>
                <SquareBox turn={turn} changeTurn={changeTurn}/>
                <SquareBox turn={turn} changeTurn={changeTurn}/>
            </div>
        )
    }
}

Board.propTypes = {
    turn: PropTypes.bool
};


export default Board;