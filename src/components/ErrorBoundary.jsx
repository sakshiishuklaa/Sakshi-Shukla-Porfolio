import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-supply-background text-supply-dark p-6">
          <div className="text-center max-w-md">
            <h1 className="font-heading text-2xl mb-3">Something went wrong</h1>
            <p className="text-supply-gray mb-6">Refresh the page to try again.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-full bg-supply-dark text-white text-sm font-semibold"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
