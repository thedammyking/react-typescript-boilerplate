import { APP_LOAD, REDIRECT, LOGIN, LOGOUT } from './types';
import omit from 'lodash/omit';
import { AppReducer, StoreAction } from 'store/types';

const initState: AppReducer = {
  isAuthenticated: false,
  appLoaded: false,
  redirectTo: '',
};

export default (
  state = initState,
  { type, isAuthenticated }: AppReducer & StoreAction
) => {
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
        redirectTo: '',
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
