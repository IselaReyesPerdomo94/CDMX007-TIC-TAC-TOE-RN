import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Home, Game, ScoreBoard, NewPlayer} from './views';

const App = () => {
    return(
        <Router basename={window.location.pathname || ''}>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/Game"><Game/></Route>
                <Route exact path="/Player"><NewPlayer/></Route>
                <Route exact path="/Score"><ScoreBoard/></Route>
            </Switch>
        </Router>
    )
}


const container = document.querySelector('#root');

ReactDom.render(<App/>, container);