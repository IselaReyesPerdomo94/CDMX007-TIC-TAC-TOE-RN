import React, {Component} from 'react';
import SquareBox from 'components/SquareBox/';
import PropTypes from 'prop-types';
import './index.css';

class Board extends Component{
    constructor(props){
        super(props);

        this.state={
            value: Array(9).fill(null)
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const boxes = this.state.value.slice()
        const turn = this.props.turn;
        boxes[e.target.id] = `${turn ? 'X': 'O'}`
        this.setState({value: boxes})
        this.props.changeTurn()
    }

    render(){
        return(
            <div className="board">
                {this.state.value.map((squareState, index)=>
                    <SquareBox 
                        value={squareState} 
                        handleClick={this.handleClick} 
                        key={index}
                        id={index}/>
                )}
            </div>
        )
    }
}

Board.propTypes = {
    turn: PropTypes.bool,
    changeTurn: PropTypes.func
};


export default Board;