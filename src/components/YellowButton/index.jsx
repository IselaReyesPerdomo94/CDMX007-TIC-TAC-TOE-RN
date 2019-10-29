import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const YellowButton = ({link, text}) => {
    return(
        <Link className="yellow-button" to={link}>{text}</Link>
    )
}

YellowButton.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string 
};

export default YellowButton;