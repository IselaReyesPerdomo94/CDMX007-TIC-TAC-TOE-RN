import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {Oplayer, Xplayer} from 'components/Player/';
import './index.css';

class SquareBox extends Component{

   render(){
       const {value} = this.props;
        return( 
           <button className='square-box' >{value}</button>
        )
   }
}

// SquareBox.protoTypes={
//     turn: PropTypes.bool,
//     changeTurn: PropTypes.func
// }

export default SquareBox;