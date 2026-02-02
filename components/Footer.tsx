import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 sm:py-48 px-4 sm:px-6 md:px-12 lg:px-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="aurora top-[40%] right-[-10%] opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 sm:gap-24 mb-32 sm:mb-48">
          <div className="max-w-5xl text-left">
             <div className="reveal flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <span className="w-8 sm:w-12 h-[1px] bg-red-600"></span>
                <p className="text-zinc-600 font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase text-[8px] sm:text-[10px]">Open for collaboration</p>
             </div>
             <h2 className="reveal text-[10vw] sm:text-[13vw] lg:text-[11rem] font-black mb-12 sm:mb-16 tracking-[-0.08em] leading-[0.7] text-white uppercase select-none">
               READY TO <br />
               <span className="text-zinc-900 [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] sm:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.1)]">COMMAND</span><br />
               THE VIEW<span className="text-red-600">?</span>
             </h2>
             
             <a href="mailto:shubhxwork@gmail.com" className="reveal inline-flex items-center gap-6 sm:gap-12 group">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-white/10 group-hover:border-red-600 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-red-600">
                   <svg className="w-8 h-8 sm:w-10 sm:h-10 transform group-hover:rotate-45 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className="flex flex-col">
                   <p className="text-white text-3xl sm:text-5xl font-black uppercase tracking-tighter group-hover:text-red-600 transition-colors">Start Brief</p>
                   <p className="text-zinc-500 text-lg sm:text-2xl font-medium tracking-tight">shubhxwork@gmail.com</p>
                </div>
             </a>
          </div>
          
          <div className="lg:text-right reveal text-left lg:text-right">
             <p className="text-zinc-800 font-black uppercase tracking-[0.6em] sm:tracking-[0.8em] text-[8px] sm:text-[9px] mb-8 sm:mb-12">Digital Footprint</p>
             <div className="flex flex-col gap-4 sm:gap-6 text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
               {[
                 { name: 'Instagram', url: 'https://instagram.com/' },
                 { name: 'LinkedIn', url: 'https://linkedin.com/' },
                 { name: 'Dribbble', url: 'https://dribbble.com/' }
               ].map(social => (
                 <a 
                   key={social.name} 
                   href={social.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-red-600 transition-colors duration-500 hover:translate-x-4 inline-block"
                 >
                   {social.name}
                 </a>
               ))}
             </div>
          </div>
        </div>

        <div className="reveal flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12 pt-16 sm:pt-24 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <Link to="/" className="text-2xl sm:text-3xl font-black tracking-[-0.05em] text-white uppercase">
              SHUBH<span className="text-red-600">.</span>CREATES
            </Link>
            <p className="text-zinc-800 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] hidden md:block">
              © 2025 // Aesthetic Intelligence // Built in 4K
            </p>
          </div>
          <div className="flex gap-6 sm:gap-10 text-zinc-800 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Work</Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 -z-10 opacity-[0.01] pointer-events-none select-none">
         <p className="text-[40vw] sm:text-[60vw] font-black text-white leading-none tracking-tighter uppercase">CREATIVE</p>
      </div>
    </footer>
  );
};

export default Footer;