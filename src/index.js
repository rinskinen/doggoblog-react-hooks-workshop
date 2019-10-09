import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layout/App';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot) {
    module.hot.accept('./Layout/App', () => {
        const NextApp = require('./Layout/App').default;
        ReactDOM.render(<NextApp />, rootEl);
    });
}
