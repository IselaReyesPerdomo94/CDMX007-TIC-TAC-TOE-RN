import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SquareBox extends Component{

   render(){
       const {value, handleClick, id} = this.props;
       const colors = `square-box ${value==="X"? 'green' :'pink' }`
        return( 
           <button 
                onClick={handleClick}
                id={id}
                className={colors}
                value={value}>{value}</button>
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