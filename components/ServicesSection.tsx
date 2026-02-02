import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-40 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/5 bg-zinc-950">
      <div className="max-w-[1600px] mx-auto">
        <div className="reveal flex flex-col mb-24 sm:mb-32 max-w-4xl">
          <span className="text-red-600 font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase text-[8px] sm:text-[10px] mb-6 sm:mb-8">Specializations</span>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white leading-none uppercase">
            AESTHETIC <br />
            <span className="text-zinc-900 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">INTELLIGENCE</span>.
          </h2>
          <p className="text-zinc-500 text-lg sm:text-xl md:text-2xl mt-8 sm:mt-12 font-medium max-w-2xl">
             Bridging the gap between raw artistic vision and the technical logic of high-performance user systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="reveal group p-8 sm:p-16 glass-card rounded-2xl sm:rounded-[3rem] hover:bg-white/[0.03] transition-all duration-700 relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 p-6 sm:p-12 text-white/[0.02] text-[8rem] sm:text-[12rem] font-black group-hover:text-red-600/[0.05] transition-colors leading-none pointer-events-none">
                0{index + 1}
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-6 sm:mb-8 uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-lg sm:text-xl font-medium mb-12 sm:mb-16 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-8 sm:pt-12 border-t border-white/5 relative z-10">
                {index === 0 && ['UI Design', 'UX Research', 'Architecture', 'Figma Mastery'].map(t => <span key={t} className="px-3 sm:px-5 py-1.5 sm:py-2 border border-white/10 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-zinc-500 rounded-full group-hover:border-red-600 group-hover:text-red-500 transition-all">{t}</span>)}
                {index === 1 && ['Premiere Pro', 'After Effects', 'Cinema 4D', 'Sound design'].map(t => <span key={t} className="px-3 sm:px-5 py-1.5 sm:py-2 border border-white/10 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-zinc-500 rounded-full group-hover:border-red-600 group-hover:text-red-500 transition-all">{t}</span>)}
                {index === 2 && ['Conversion Design', 'Asset Kits', 'Trendspotting'].map(t => <span key={t} className="px-3 sm:px-5 py-1.5 sm:py-2 border border-white/10 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-zinc-500 rounded-full group-hover:border-red-600 group-hover:text-red-500 transition-all">{t}</span>)}
              </div>
              
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-[3px] sm:w-[4px] h-0 group-hover:h-full bg-red-600 transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;