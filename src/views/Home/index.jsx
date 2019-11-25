import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Home = () => {
    return(
        <Fragment>
            <header>
                <figure>
                    <img alt="michi-face" src="./img/ocuppied.png" className="michi-face"/>
                </figure>
                <h1>Michi</h1>
            </header>
            <main className="home">
                <figure>
                    <img alt="demo" src="./img/demo.png" className="demo"/>
                </figure>
            </main>
            <footer>
                <Link to="/Score" className="yellow-button">Mejores puntajes</Link>
                <Link to="/Player" className="yellow-button">Nueva partida</Link>
            </footer>
        </Fragment>
    )
}

export default Home;