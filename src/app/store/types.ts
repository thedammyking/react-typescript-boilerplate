import * as React from 'react';
import { RouteProps } from 'react-router-dom';
export const LOG_ERROR = 'LOG_ERROR';
export const APP_LOAD = 'APP_LOAD';
export const REDIRECT = 'REDIRECT';
export const ASYNC_START = 'ASYNC_START';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface AppReducer {
  isAuthenticated?: boolean;
  appLoaded?: boolean;
  redirectTo?: string;
}
export interface AppRouteComponentProps extends RouteProps {
  component: React.ComponentType<any>;
  props: AppReducer;
}
