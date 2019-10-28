import React, {Fragment} from 'react';
import YellowButton from 'components/YellowButton/';
import './index.css';

const Home = () => {
    return(
        <Fragment>
            <header>
                <figure>
                    <img alt="michi-face" src="./img/michi.png" className="michi-face"/>
                </figure>
                <h1>Michi</h1>
            </header>
            <main className="home">
                <figure>
                    <img alt="demo" src="./img/demo.png" className="demo"/>
                </figure>
            </main>
            <footer>
                <YellowButton text="Nueva partida" link="/Game"/>
            </footer>
        </Fragment>
    )
}

export default Home;