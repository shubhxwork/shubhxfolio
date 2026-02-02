import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-6xl sm:text-8xl font-black mb-6 sm:mb-8 tracking-tighter uppercase">404<span className="text-red-600">.</span></h2>
        <Link to="/" className="text-white font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black transition-all">Back to Reality</Link>
      </div>
    </div>
  );

  const handleLaunchPreview = () => {
    // If it's a web app with a live URL, open that instead of the thumbnail
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Open the high-res thumbnail in a new tab as a placeholder for a live preview
      window.open(project.thumbnail, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Space */}
      <div className="pt-24 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <Link to="/" className="group inline-flex items-center gap-3 sm:gap-4 text-zinc-500 hover:text-white transition-colors mb-16 sm:mb-24 uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px] font-black">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 transition-colors">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </div>
          Back to Index
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-8 text-left">
            <div className="reveal flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <span className="text-red-600 font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[8px] sm:text-[10px] bg-red-600/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                {project.category}
              </span>
              <span className="text-zinc-600 font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">
                {project.year}
              </span>
            </div>
            
            <h1 className="reveal text-5xl sm:text-7xl md:text-[10rem] font-black mb-12 sm:mb-16 tracking-[-0.08em] leading-[0.8] uppercase">
              {project.title}<span className="text-red-600">.</span>
            </h1>

            <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 py-12 sm:py-16 border-y border-white/5 mb-12 sm:mb-16">
              <div>
                <p className="text-zinc-700 uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[7px] sm:text-[8px] font-black mb-3 sm:mb-4">Partner</p>
                <p className="text-white text-lg sm:text-xl font-bold uppercase tracking-tight">{project.client || 'Confidential'}</p>
              </div>
              <div>
                <p className="text-zinc-700 uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[7px] sm:text-[8px] font-black mb-3 sm:mb-4">Discipline</p>
                <p className="text-white text-lg sm:text-xl font-bold uppercase tracking-tight">{project.category}</p>
              </div>
              <div>
                <p className="text-zinc-700 uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[7px] sm:text-[8px] font-black mb-3 sm:mb-4">Timeline</p>
                <p className="text-white text-lg sm:text-xl font-bold uppercase tracking-tight">{project.year}</p>
              </div>
            </div>

            <div className="reveal space-y-8 sm:space-y-12 max-w-3xl">
              <p className="text-zinc-400 text-xl sm:text-2xl md:text-3xl font-medium leading-[1.3] tracking-tight">
                Developing the visual DNA for {project.title} required a deep dive into <span className="text-white">user psychology</span> and technical precision. We architected a system that prioritizes aesthetic longevity over fleeting trends.
              </p>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-40 space-y-8 sm:space-y-10">
             <div className="reveal p-6 sm:p-10 glass-card rounded-2xl sm:rounded-[3rem] border border-white/5 text-left">
                <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-red-600 mb-8 sm:mb-10">Deliverables</h4>
                <ul className="space-y-3 sm:space-y-4 text-zinc-300 text-sm sm:text-base">
                   <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                      Visual Identity System
                   </li>
                   <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                      Interactive Prototypes
                   </li>
                   <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                      Design Documentation
                   </li>
                   <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                      Asset Library
                   </li>
                </ul>
             </div>
             
             <button 
               onClick={handleLaunchPreview}
               className="reveal w-full group relative px-8 sm:px-12 py-6 sm:py-8 bg-red-600 text-white font-black uppercase text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-105 transition-all shadow-2xl active:scale-95"
             >
               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               <span className="relative z-10 group-hover:text-black transition-colors">
                 {project.liveUrl ? 'Launch Live App ↗' : 'Launch Preview ↗'}
               </span>
             </button>
          </div>
        </div>
      </div>

      <section className="reveal w-full px-4 sm:px-6 md:px-12 lg:px-24 pb-32 sm:pb-48">
         <div className="aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-[4rem] overflow-hidden relative group">
            <img 
              src={project.thumbnail} 
              alt={`${project.title} showcase`}
              className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
         </div>
      </section>
    </div>
  );
};

export default ProjectDetail;