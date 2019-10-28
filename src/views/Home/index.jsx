import React from 'react';
import {Link} from 'react-router-dom'
import './index.css';

const Home = () => {
    return(
        <main className="home">
            <figure>
                <img alt="michi-face" src="/img/michi.png" className="michi-face"/>
            </figure>
            <h1>Michi</h1>
            <figure>
                <img alt="demo" src="/img/demo.png" className="demo"/>
            </figure>
            <Link className="yellow-button" to='/Game'>Nueva partida</Link>
        </main>
    )
}

export default Home;