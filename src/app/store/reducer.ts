import { APP_LOAD, REDIRECT, LOGIN, LOGOUT } from './types';
import omit from 'lodash/omit';

const initState = {
  isAuthenticated: false,
  appLoaded: false,
  redirectTo: null,
};

export default (state = initState, { type, isAuthenticated }) => {
  switch (type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
        isAuthenticated,
      };
    case REDIRECT:
      return {
        ...state,
        redirectTo: null,
      };
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        ...omit(initState, ['appLoaded']),
      };
    default:
      return state;
  }
};
