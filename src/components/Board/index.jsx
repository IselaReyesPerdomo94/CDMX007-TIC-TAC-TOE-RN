import React, {Component} from 'react';
import SquareBox from 'components/SquareBox/';
import PropTypes from 'prop-types';
import './index.css';

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            value: null
        }
    }
    render(){
        const {turn, changeTurn} = this.props;
        
        return(
            <div className="board">
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
                <SquareBox turn={turn} changeTurn={changeTurn} value={this.state.value}/>
            </div>
        )
    }
}

Board.propTypes = {
    turn: PropTypes.bool,
    changeTurn: PropTypes.func
};


export default Board;