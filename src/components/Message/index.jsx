import React from 'react';
import './style.css';

const Message = (props) => {
    const {title, body, img, alt, buttonText} = props;
    return(
        <main className="layer">
            <section className="message">
                <header>
                    <h3>{title}</h3>
                    <span>X</span>
                </header>
                <article>
                    <p>{body}</p>
                    <figure>
                        <img src={img} alt={alt}/>
                    </figure>
                </article>
                <footer>
                    <input 
                        className="yellow-button" 
                        type="button" 
                        value={buttonText}
                    />
                </footer>
            </section>
        </main>
    )
}

export default Message;