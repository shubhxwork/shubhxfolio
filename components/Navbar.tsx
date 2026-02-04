import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AGENCY } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-1000 ${scrolled ? 'pt-2 sm:pt-4' : 'pt-4 sm:pt-8'} px-4 sm:px-6 pointer-events-none`}>
      <nav className={`mx-auto max-w-[1600px] flex items-center justify-between transition-all duration-700 pointer-events-auto overflow-hidden
        ${scrolled 
          ? 'bg-zinc-950/40 backdrop-blur-3xl py-3 sm:py-4 px-6 sm:px-12 rounded-full border border-white/5 shadow-2xl' 
          : 'py-3 sm:py-4 px-2 sm:px-4'
        }`}>
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 sm:gap-4 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 bg-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-lg sm:text-2xl transition-all duration-500 group-hover:rotate-[360deg] shadow-[0_0_20px_rgba(255,51,51,0.4)]">
            S
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition-opacity"></div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-white font-black uppercase text-lg sm:text-2xl tracking-tighter">shubh</span>
            <span className="text-zinc-600 font-bold uppercase text-[7px] sm:text-[8px] tracking-[0.3em] sm:tracking-[0.5em] group-hover:text-red-500 transition-colors">visual director</span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {['Work', 'About', 'Services'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const targetId = item.toLowerCase();
                
                // Reset any active category/subcategory filters if clicking Work
                if (targetId === 'work') {
                  // Dispatch a custom event to reset work section filters
                  window.dispatchEvent(new CustomEvent('resetWorkFilters'));
                }
                
                // Small delay to allow any state resets to complete
                setTimeout(() => {
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 100);
              }}
              className="px-10 py-3.5 text-[9px] font-black text-zinc-500 hover:text-white transition-all uppercase tracking-[0.2em] rounded-full hover:bg-white/5"
            >
              {item}
            </a>
          ))}
          <div className="w-[1px] h-6 bg-white/5 mx-3"></div>
          <a 
            href={AGENCY.url} 
            target="_blank" 
            className="px-10 py-3.5 text-[9px] font-black text-red-500 hover:text-red-400 uppercase tracking-[0.2em] group flex items-center gap-2"
          >
            {AGENCY.name} <span className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">↗</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600/50 rounded-lg"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop CTA */}
        <a 
          href="mailto:shubhxwork@gmail.com"
          className="hidden lg:block group relative px-8 xl:px-12 py-4 xl:py-5 bg-white text-black font-black uppercase text-[9px] xl:text-[10px] tracking-[0.2em] xl:tracking-[0.3em] rounded-full overflow-hidden hover:scale-105 transition-all shadow-2xl active:scale-95"
        >
          <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 group-hover:text-white transition-colors">Book Brief</span>
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[90] pt-24">
          <div className="flex flex-col items-center justify-center min-h-screen px-6">
            <div className="space-y-8 text-center">
              {['Work', 'About', 'Services'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const targetId = item.toLowerCase();
                    
                    // Reset any active category/subcategory filters if clicking Work
                    if (targetId === 'work') {
                      // Dispatch a custom event to reset work section filters
                      window.dispatchEvent(new CustomEvent('resetWorkFilters'));
                    }
                    
                    // Small delay to allow menu close and any state resets to complete
                    setTimeout(() => {
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'start',
                          inline: 'nearest'
                        });
                      }
                    }, 300);
                  }}
                  className="block text-4xl sm:text-5xl font-black text-white hover:text-red-600 transition-colors uppercase tracking-tighter"
                >
                  {item}
                </a>
              ))}
              
              <div className="pt-8 border-t border-white/10 space-y-6">
                <a 
                  href={AGENCY.url} 
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl font-black text-red-500 hover:text-red-400 uppercase tracking-tight"
                >
                  {AGENCY.name} ↗
                </a>
                
                <a 
                  href="mailto:shubhxwork@gmail.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block px-8 py-4 bg-red-600 text-white font-black uppercase text-sm tracking-[0.2em] rounded-full hover:bg-red-700 transition-all shadow-xl"
                >
                  Book Brief
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;