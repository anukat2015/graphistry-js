import React from 'react';
import ReactDOM from 'react-dom';
import Timebar from '../src/index.js';
const app = document.getElementById('main');

const data = require('./data.json');
const bins = [];
for (var i = 0; i < data.bins.length; i++) {
    bins.push(data.bins[i]);
}

ReactDOM.render(
    <Timebar
        width={800}
        height={150}
        bins={bins}
        onHighlight={bar => null}
        setSelection={selection => console.log('currently selected:', selection)}
    />,
    app
);
