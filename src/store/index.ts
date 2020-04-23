import {
  applyMiddleware,
  createStore,
  Middleware,
  StoreEnhancer,
  Dispatch,
  AnyAction,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';
import localStorageMiddleware from './middlewares/localStorage';

const getMiddleware = (): StoreEnhancer<{ dispatch: Dispatch }, any> => {
  let middleware: Middleware<{}, any, Dispatch<AnyAction>>[] = [
    thunk,
    localStorageMiddleware,
  ];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export default () => createStore(reducer, getMiddleware());
