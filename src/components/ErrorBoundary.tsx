import React, { Component, ErrorInfo } from 'react';

interface State {
  hasError: boolean;
}
class ErrorBoundary extends Component<{}, State> {
  state = { hasError: false };

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
          <h1 style={{ margin: 'auto' }}>
            Sorry, there was a problem loading the page.
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
