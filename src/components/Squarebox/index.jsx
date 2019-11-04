import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SquareBox extends Component{

   render(){
       const {value, handleClick, id, key} = this.props;
        return( 
           <button 
                className='square-box' 
                onClick={handleClick}
                id={id}
                key={key}
                >{value}</button>
        )
   }
}

// SquareBox.protoTypes={
//     turn: PropTypes.bool,
//     changeTurn: PropTypes.func
// }

export default SquareBox;