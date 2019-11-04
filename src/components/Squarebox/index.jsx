import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SquareBox extends Component{

   render(){
       const {value, handleClick, id, key} = this.props;
       const colors = `square-box ${value==="X"? 'green' :'pink' }`
        return( 
           <button 
                className='square-box' 
                onClick={handleClick}
                id={id}
                key={key}
                className={colors}>{value}</button>
        )
   }
}

SquareBox.protoTypes={
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    handleClick: PropTypes.func,
    id: PropTypes.number,
    key: PropTypes.number
}

export default SquareBox;