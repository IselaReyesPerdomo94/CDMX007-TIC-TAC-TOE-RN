import React from 'react';
import Table from 'components/Table/';
import YellowButton from 'components/YellowButton/'
import './style.css';

const ScoreBoard = () => (
    <main className="score">
        <header>Mejores Puntajes</header>
        <article>
            <Table/>
        </article>
        <footer>
            <YellowButton text={'Regresar'} link={'/'}/>
        </footer>
    </main>
)

export default ScoreBoard;