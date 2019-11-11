import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Message = (props) => {
    const {title, body, img, alt, buttonText, onClick, open, winner} = props;
     const modal = `layer ${open ? "": "hide"}`;
    return(
        <main className={modal}>
            <section className="message">
                <header>
                    <h3>{title}</h3>
                    <span onClick={onClick}>X</span>
                </header>
                <article>
                    <p className="winner">{winner}</p>
                    <p>{body}</p>
                    <figure className="figure-message">
                        <img src={img} alt={alt} />
                    </figure>
                </article>
                <footer>
                    <input 
                        className="yellow-button" 
                        type="button" 
                        value={buttonText}
                        onClick={onClick}
                    />
                </footer>
            </section>
        </main>
    )
}

Message.propTypes = {
    buttonText: PropTypes.string,
    handleXButton: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    open: PropTypes.bool
};

export default Message;