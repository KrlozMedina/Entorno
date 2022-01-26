import React from 'react';
import reactDom from 'react-dom';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import './styles/global.scss';

// ReactDom.render(<h1>Hola Mundo</h1>, document.getElementById('root'));
reactDom.render(<App />, document.getElementById('app'));