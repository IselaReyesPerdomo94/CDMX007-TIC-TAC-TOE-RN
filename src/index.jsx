import React from 'react';
import ReactDom from 'react-dom';
import Home from 'views/Home/';
import Game from 'views/Game/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return(
        <Router  basename={window.location.pathname || ''}>
            <Switch>
                <Route exact path="/" ><Home/></Route>
                <Route exact path="/Game"><Game/></Route>
            </Switch>
        </Router>
    )
}


const container = document.querySelector('#root');

ReactDom.render(<App/>, container);