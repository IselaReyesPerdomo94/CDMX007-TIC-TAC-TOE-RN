import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {Oplayer, Xplayer} from 'components/Player/';
import './index.css';

class SquareBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };

        this.printAndChangeTurn = this.printAndChangeTurn.bind(this)
    }
    printAndChangeTurn(){
        const {turn, changeTurn} = this.props;
        const symbol = `${turn ? 'X': 'O'}`
        this.setState({value: symbol})
        changeTurn()
    }
   render(){
        const symbol = this.state.value;
        const turnColor = `square-box ${symbol === 'X' ? 'green': 'pink'}`
        return( 
           <button className={turnColor} onClick={()=> this.printAndChangeTurn()}>{this.state.value}</button>
        )
   }
}

SquareBox.protoTypes={
    turn: PropTypes.bool,
    changeTurn: PropTypes.func
}

export default SquareBox;