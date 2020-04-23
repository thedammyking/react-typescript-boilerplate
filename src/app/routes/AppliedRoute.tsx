import React from 'react';
import { Route } from 'react-router-dom';
import { AppRouteComponentProps } from '../store/types';

const AppliedRoute = ({
  component: C,
  props: cProps,
  ...rest
}: AppRouteComponentProps) => (
  <Route {...rest} render={(props) => <C {...props} {...cProps} />} />
);

export default AppliedRoute;
