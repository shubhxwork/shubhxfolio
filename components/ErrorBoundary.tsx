import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
          <div className="text-center max-w-2xl">
            <div className="mb-12">
              <h1 className="text-8xl md:text-9xl font-black mb-8 tracking-tighter uppercase text-red-600">
                ERROR<span className="text-white">.</span>
              </h1>
              <p className="text-zinc-400 text-xl font-medium mb-8">
                Something went wrong. The creative process hit a snag.
              </p>
              <p className="text-zinc-600 text-sm font-mono mb-12 bg-zinc-900 p-4 rounded-lg">
                {this.state.error?.message || 'Unknown error occurred'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-red-600 text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-red-700 transition-all"
              >
                Reload Page
              </button>
              <Link
                to="/"
                className="px-8 py-4 border border-white/20 text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;