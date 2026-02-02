import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-12">
          <h1 className="text-8xl md:text-9xl font-black mb-8 tracking-tighter uppercase">
            404<span className="text-red-600">.</span>
          </h1>
          <p className="text-zinc-400 text-xl font-medium mb-8">
            This page doesn't exist in our creative universe.
          </p>
          <p className="text-zinc-600 text-sm mb-12">
            The URL you're looking for might have been moved, deleted, or never existed.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 bg-red-600 text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-red-700 transition-all"
          >
            Back to Home
          </Link>
          <Link
            to="/#work"
            className="px-8 py-4 border border-white/20 text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all"
          >
            View Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;