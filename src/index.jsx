import React from 'react';
import ReactDom from 'react-dom';

const App = () => <div>App from react</div>

const container = document.querySelector('#root');

ReactDom.render(<App/>, container);