import React from 'react';
import {Link} from 'react-router-dom';

const YellowButton = ({link, text}) => {
    return(
        <Link className="yellow-button" to={link}>{text}</Link>
    )
}

export default YellowButton;