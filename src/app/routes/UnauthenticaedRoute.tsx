import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { querystring } from 'libs';
import { AppRouteComponentProps } from '../store/types';

const UnauthenticaedRoute = ({
  component: C,
  props: cProps,
  ...rest
}: AppRouteComponentProps) => {
  const redirect = querystring().get('redirect');
  return (
    <Route
      {...rest}
      render={(props) =>
        !cProps.isAuthenticated ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect
            to={redirect === '' || redirect === null ? '/' : redirect}
          />
        )
      }
    />
  );
};

export default UnauthenticaedRoute;
