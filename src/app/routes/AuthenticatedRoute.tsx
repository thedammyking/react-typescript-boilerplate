import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppRouteComponentProps } from '../store/types';

const AuthenticatedRoute = ({
  component: C,
  props: cProps,
  ...rest
}: AppRouteComponentProps) => (
  <Route
    {...rest}
    render={(props) =>
      cProps.isAuthenticated ? (
        <C {...props} {...cProps} />
      ) : (
        <Redirect
          to={`/login?redirect=${props.location.pathname}${props.location.search}`}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
