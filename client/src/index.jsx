import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'

// let randInt = Math.floor(1 + (1 - Math.random() * Math.random()) * 9999999);
let randInt = 9000000 + Math.floor((1 - Math.random() * Math.random()) * 1000000);
ReactDOM.render(<App listing_id={randInt}/>, document.getElementById('reviews'));
