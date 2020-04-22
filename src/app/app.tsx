import React, { lazy, Suspense, Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { INDEX } from './paths';
import { AppliedRoute } from './routes';
import ScrollToTop from 'components/ScrollToTop';
import Loading from 'components/Loading';
import ErrorBoundary from 'components/ErrorBoundary';
import * as actions from './store/actions';
import '../styles/typography.scss';

const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));

const mapStateToProps = ({
  app: { appLoaded, isAuthenticated, redirectTo },
}) => ({ appLoaded, isAuthenticated, redirectTo });

class App extends Component {
  componentDidMount() {
    const { onAppLoad, appLoaded } = this.props;
    if (!appLoaded) onAppLoad();
  }

  componentDidUpdate(prevProps, prevState) {
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
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </ErrorBoundary>
      </ScrollToTop>
    );
  }
}

export default connect(mapStateToProps, actions)(App);
