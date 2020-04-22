import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Root from 'root';
import * as serviceWorker from './serviceWorker';
import configureStore from 'store';

const store = configureStore();

ReactDOM.render(
  <StrictMode>
    <Root store={store} />
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
