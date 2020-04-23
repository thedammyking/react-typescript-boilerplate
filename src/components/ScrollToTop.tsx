import { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class ScrollToTop extends Component<RouteComponentProps> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
