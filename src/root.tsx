import React from 'react';
import App from 'app/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import 'styles/generic.scss';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

export default Root;
