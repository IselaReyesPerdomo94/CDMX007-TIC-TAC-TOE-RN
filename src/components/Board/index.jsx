import React, {Component, Fragment} from 'react';
import SquareBox from 'components/SquareBox/index.jsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import './index.css';

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            value: Array(9).fill(null),
            alert: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.startAgain= this.startAgain.bind(this)
        this.turnOffAlert = this.turnOffAlert.bind(this)
    }

    handleClick(e){
        
        const boxes = this.state.value.slice()
        const turn = this.props.turn;
        if(boxes[e.target.id]!== null){
            this.setState({alert: "¡Esta casilla ya está ocupada!"})
            setTimeout(this.turnOffAlert, 1500)
            return
        }
        boxes[e.target.id] = `${turn ? 'X': 'O'}`
        this.setState({value: boxes})
        this.props.changeTurn()
    }

    startAgain(){
        this.setState({value: Array(9).fill(null)})
    }

    turnOffAlert (){
        this.setState({alert: ''})
    }

    render(){
        return(
            <Fragment>
                <label className="alert">{this.state.alert}</label>
                <span className="undo">
                    <FontAwesomeIcon className="title" icon={faUndo} onClick={this.startAgain}/>
                </span>
                
                <div className="board">
                    {this.state.value.map((squareState, index)=>
                        <SquareBox 
                            value={squareState} 
                            handleClick={this.handleClick} 
                            key={index}
                            id={index}/>
                    )}
                </div>
            </Fragment>
        )
    }
}

Board.propTypes = {
    turn: PropTypes.bool,
    changeTurn: PropTypes.func
};


export default Board;