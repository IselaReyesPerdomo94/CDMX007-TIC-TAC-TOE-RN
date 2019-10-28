import React, {Component} from 'react';
import SquareBox from 'components/SquareBox/';
import './index.css';

class Board extends Component{
    render(){
        return(
            <div className="board">
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
                <SquareBox/>
            </div>
        )
    }
}

export default Board;