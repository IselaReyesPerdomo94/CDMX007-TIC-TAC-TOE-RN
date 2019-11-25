import React from 'react';
import Table from 'components/Table/';
import {Link} from 'react-router-dom';
import './style.css';

const ScoreBoard = () => (
    <main className="score">
        <header>Mejores Puntajes</header>
        <article>
            <Table/>
        </article>
        <footer>
            <Link className="yellow-button" to="/">Regresar</Link>
            <YellowButton text={'Regresar'} link={'/'}/>
        </footer>
    </main>
)

export default ScoreBoard;