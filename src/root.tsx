import * as React from 'react';
import App from 'app';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import 'styles/generic.scss';
interface Props {
  store: Store<any, any>;
}

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

export default Root;
