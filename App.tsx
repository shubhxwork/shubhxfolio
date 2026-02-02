import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ServicesSection from './components/ServicesSection';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import UXPrinciples from './components/UXPrinciples';
import NotFound from './components/NotFound';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import { AGENCY } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <main id="main-content" className="overflow-hidden bg-zinc-950">
    <Hero />
    
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
      <ProjectGrid />
    </section>

    <UXPrinciples />

    <section className="py-24 sm:py-40 bg-red-600 relative group overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 relative z-10">
          <div className="max-w-4xl text-left">
             <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
                <span className="w-12 sm:w-16 h-[2px] sm:h-[2.5px] bg-white"></span>
                <span className="text-white/80 font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">Strategic Vertical</span>
             </div>
             <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 sm:mb-12 leading-[0.8] uppercase">
                SCALING <br />
                <span className="text-black">DOMINANCE.</span>
             </h2>
             <p className="text-red-50 text-lg sm:text-2xl md:text-3xl font-medium max-w-xl leading-tight tracking-tight opacity-90 mb-8 sm:mb-10">
                {AGENCY.name} represents our elite collective, pushing the boundaries of visual engineering and post-production using systematic UX methodologies.
             </p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-6 sm:gap-10">
             <a 
               href={AGENCY.url} 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative px-12 sm:px-16 py-6 sm:py-8 bg-black text-white font-black uppercase text-xs tracking-[0.4em] rounded-full hover:scale-105 transition-all shadow-2xl block text-center"
             >
               Visit Agency Site ↗
               <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full animate-ping"></div>
             </a>
             <span className="text-black/30 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em]">Enterprise Tier Solutions</span>
          </div>
       </div>
    </section>
    
    <ServicesSection />
    
    <section id="about" className="py-24 sm:py-40 px-4 sm:px-6 md:px-12 lg:px-24 bg-zinc-900/30">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24 items-center">
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="absolute inset-0 bg-red-600 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 rounded-2xl sm:rounded-3xl -z-10 opacity-20"></div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-3xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
              alt="Shubh - Creative Director" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
        <div className="lg:col-span-7 text-left order-1 lg:order-2">
          <span className="text-red-600 font-black tracking-[0.6em] sm:tracking-[0.8em] uppercase text-[8px] sm:text-[10px] mb-8 sm:mb-10 block underline underline-offset-8 decoration-2">Designer Profile</span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 sm:mb-12 leading-[0.8] tracking-tighter text-white uppercase">
            CRAFTED BY <br />
            <span className="text-zinc-800 [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]">LOGIC.</span>
          </h2>
          <div className="space-y-8 sm:space-y-10 text-zinc-400 text-lg sm:text-2xl font-medium leading-relaxed max-w-2xl tracking-tight">
            <p>
              I build products and visual narratives that live at the intersection of technical excellence and artistic impact, utilizing cognitive bias and mental models to drive user intent.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 pt-8 sm:pt-12 border-t border-white/5">
              <div>
                <h4 className="text-3xl sm:text-5xl font-black text-white mb-2">05+</h4>
                <p className="text-zinc-600 uppercase text-[8px] sm:text-[9px] font-black tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl sm:text-5xl font-black text-white mb-2">50+</h4>
                <p className="text-zinc-600 uppercase text-[8px] sm:text-[9px] font-black tracking-widest">Global Brands</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-3xl sm:text-5xl font-black text-red-600 mb-2">1k+</h4>
                <p className="text-zinc-600 uppercase text-[8px] sm:text-[9px] font-black tracking-widest">Designs Shipped</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        {/* Skip to Main Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only fixed top-4 left-4 z-[200] bg-red-600 text-white px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest"
        >
          Skip to main content
        </a>
        <div className="min-h-screen selection:bg-red-600 selection:text-white bg-zinc-950">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AIAssistant />
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;