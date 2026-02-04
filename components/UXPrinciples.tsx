import React from 'react';
import { UX_LAWS } from '../constants';

const UXPrinciples: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Services section not found');
    }
  };

  return (
    <section className="py-24 sm:py-40 px-4 sm:px-6 md:px-12 lg:px-24 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="reveal flex flex-col mb-24 sm:mb-32 max-w-4xl text-left">
          <span className="text-red-600 font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase text-[8px] sm:text-[10px] mb-6 sm:mb-8">Design Ethos</span>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white leading-none uppercase">
            GOVERNED BY <br />
            <span className="text-zinc-900 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">UX LAWS</span>.
          </h2>
          <p className="text-zinc-500 text-lg sm:text-xl md:text-2xl mt-8 sm:mt-12 font-medium max-w-2xl">
            Aesthetic excellence is only half the battle. Every pixel is placed with psychological precision to ensure peak performance and usability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {UX_LAWS.map((law, index) => (
            <div 
              key={law.title} 
              className="reveal p-8 sm:p-16 bg-black hover:bg-zinc-950 transition-all duration-500 group relative overflow-hidden text-left hover-lift"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
            >
              <div className="text-2xl sm:text-4xl mb-8 sm:mb-12 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-125 inline-block">
                {law.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter group-hover:text-red-400 transition-colors">
                {law.title}
              </h3>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">
                {law.description}
              </p>
              
              {/* Applied indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-green-400 text-xs font-bold uppercase tracking-wider bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                  Applied ✓
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-[1px] sm:h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            </div>
          ))}
          
          <div className="reveal p-8 sm:p-16 bg-red-600 flex flex-col justify-between group text-left hover-lift">
             <div className="text-4xl mb-6">🎯</div>
             <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter">
               Ready for precision?
             </h3>
             <p className="text-red-100 text-base sm:text-lg font-bold mb-8 sm:mb-10">We apply these laws to every project at REDWHISK.</p>
             <button 
               onClick={scrollToServices}
               className="self-start px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-black uppercase text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] rounded-full hover:scale-105 transition-all shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
               aria-label="View our services and methodology"
             >
               Our Method ↗
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXPrinciples;