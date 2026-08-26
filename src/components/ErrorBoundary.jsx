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
        <div className="min-h-screen flex items-center justify-center bg-charcoal text-ink p-6">
          <div className="text-center max-w-md">
            <h1 className="font-heading text-2xl font-semibold mb-3">Something went wrong</h1>
            <p className="text-muted mb-6">Refresh the page to try again.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary"
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
