
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn('Work section not found');
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 bg-black overflow-hidden pt-24 sm:pt-32 pb-32 sm:pb-48">
      <div className="aurora top-[-5%] right-[-5%] opacity-60"></div>
      <div className="aurora bottom-[5%] left-[-15%] opacity-30"></div>
      
      <div className="max-w-[1600px] w-full mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 sm:gap-6 mb-8 sm:mb-12"
        >
          <span className="w-8 sm:w-12 h-[1px] sm:h-[1.5px] bg-red-600"></span>
          <p className="text-zinc-500 font-black tracking-[0.4em] sm:tracking-[0.8em] uppercase text-[8px] sm:text-[10px]">Visual Experience Designer — 2025 Edition</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-10">
            <h1 className="text-[12vw] sm:text-[14vw] lg:text-[13rem] font-black leading-[0.75] tracking-[-0.08em] text-white uppercase select-none">
              <motion.span 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="block"
              >
                CRAFTING
              </motion.span>
              <motion.span 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="block text-zinc-900 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] sm:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.15)] hover:[-webkit-text-stroke:1px_rgba(255,51,51,0.5)] sm:hover:[-webkit-text-stroke:1.5px_rgba(255,51,51,0.5)] transition-all duration-700 cursor-default"
              >
                EMOTION
              </motion.span>
              <motion.span 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="block text-red-600"
              >
                THRU PIXELS<span className="text-white">.</span>
              </motion.span>
            </h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="lg:col-span-2 lg:pb-8 flex flex-col items-start"
          >
            <div className="w-px h-16 sm:h-24 bg-gradient-to-b from-red-600 to-transparent mb-6 sm:mb-8"></div>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium leading-relaxed max-w-[200px] mb-6 sm:mb-8 uppercase tracking-wide sm:tracking-widest italic opacity-80">
              High-octane UI/UX & Cinematic Post-Production for elite brands.
            </p>
            <button 
              onClick={scrollToWork}
              className="group relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/10 hover:border-red-600 hover:bg-red-600 transition-all duration-500"
              aria-label="Scroll to work section"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-90 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-16 pt-12 sm:pt-16 border-t border-white/5">
          {[
            { label: 'Studio', val: 'REDWHISK®' },
            { label: 'Role', val: 'Creative Director' },
            { label: 'Focus', val: 'UX & Motion' },
            { label: 'Status', val: 'Taking Bookings' }
          ].map((item, idx) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + (idx * 0.1) }}
              className="group text-left"
            >
              <p className="text-zinc-700 uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[7px] sm:text-[8px] font-black mb-2 group-hover:text-red-600 transition-colors">{item.label}</p>
              <p className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wide sm:tracking-widest">{item.val}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 py-8 sm:py-12 bg-black">
        <div className="flex whitespace-nowrap animate-marquee items-center opacity-30">
          {[1,2,3].map(i => (
            <div key={i} className="flex gap-12 sm:gap-24 items-center mx-8 sm:mx-12">
              <span className="text-white text-3xl sm:text-5xl font-black uppercase tracking-tighter">BENTO UI</span>
              <span className="text-red-600 text-xl sm:text-2xl">✦</span>
              <span className="font-serif italic text-3xl sm:text-5xl text-zinc-200 lowercase px-2 sm:px-4">cinematic editing</span>
              <span className="text-red-600 text-xl sm:text-2xl">✦</span>
              <span className="text-white text-3xl sm:text-5xl font-black uppercase tracking-tighter">CONVERSION LOGIC</span>
              <span className="text-red-600 text-xl sm:text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
