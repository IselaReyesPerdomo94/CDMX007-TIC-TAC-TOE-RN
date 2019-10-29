import React, {Component} from 'react';
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
       
       return( 
           <button className="square-box" onClick={()=> this.printAndChangeTurn()}>{this.state.value}</button>
       )
   }
}

export default SquareBox;