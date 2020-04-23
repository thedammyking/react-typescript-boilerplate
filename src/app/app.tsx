import * as React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { INDEX } from './paths';
import { AppliedRoute } from './routes';
import ScrollToTop from 'components/ScrollToTop';
import Loading from 'components/Loading';
import ErrorBoundary from 'components/ErrorBoundary';
import * as actions from './store/actions';
import '../styles/typography.scss';
import { StoreState } from 'store/types';
import { AppReducer } from './store/types';

const Home = React.lazy(() => import('pages/Home'));
const NotFound = React.lazy(() => import('pages/NotFound'));

type Props = ConnectedProps<typeof connector> & RouteComponentProps;

class App extends React.Component<Props, {}> {
  componentDidMount() {
    const { onAppLoad, appLoaded } = this.props;
    if (!appLoaded) onAppLoad();
  }

  componentDidUpdate(prevProps: Props, prevState: {}) {
    const {
      onRedirect,
      redirectTo,
      history: { push },
    } = this.props;
    if (redirectTo && redirectTo !== prevProps.redirectTo) {
      push(redirectTo);
      onRedirect();
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <ScrollToTop>
        <ErrorBoundary>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <AppliedRoute
                path={INDEX}
                exact
                component={Home}
                props={{ isAuthenticated }}
              />
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </React.Suspense>
        </ErrorBoundary>
      </ScrollToTop>
    );
  }
}

const mapStateToProps = ({
  app: { appLoaded, isAuthenticated, redirectTo },
}: StoreState<AppReducer>) => ({ appLoaded, isAuthenticated, redirectTo });

const connector = connect(mapStateToProps, actions);

export default connector(App);
