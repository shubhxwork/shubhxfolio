
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import ImageWithLoading from './ImageWithLoading';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isVideo = project.category === 'Video Editing';
  const isWebApp = project.category === 'Web Apps' && project.liveUrl;
  const cursorLabel = isVideo ? 'PLAY' : isWebApp ? 'LAUNCH' : 'VIEW';

  const handleClick = () => {
    // If it's a web app with live URL, open it directly
    if (isWebApp && project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
    // Otherwise, let the Link component handle navigation to project detail
  };

  return (
    <>
      {isWebApp && project.liveUrl ? (
        // For web apps with live URLs, use a button that opens the app directly
        <button
          onClick={handleClick}
          data-cursor={cursorLabel}
          className={`reveal group relative block project-card overflow-hidden rounded-[2.5rem] bg-zinc-950 transition-all duration-1000 border border-white/5 hover:border-red-600/30 w-full text-left`}
        >
          <ProjectCardContent />
        </button>
      ) : (
        // For other projects, use Link to navigate to project detail page
        <Link 
          to={`/project/${project.id}`}
          data-cursor={cursorLabel}
          className={`reveal group relative block project-card overflow-hidden rounded-[2.5rem] bg-zinc-950 transition-all duration-1000 border border-white/5 hover:border-red-600/30`}
        >
          <ProjectCardContent />
        </Link>
      )}
    </>
  );

  function ProjectCardContent() {
    return (
      <div className="relative aspect-[16/12] overflow-hidden">
        {/* Main Background Image */}
        <ImageWithLoading
          src={project.thumbnail} 
          alt={`${project.title} - ${project.category} project`}
          className="w-full h-full object-cover transition-all duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0"
        />
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Category Badge */}
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 z-20">
          <div className="flex flex-col gap-2">
             <span className="text-white font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[7px] sm:text-[8px] border border-white/20 px-2 sm:px-3 py-1 rounded-full group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-500">
                {project.category}
             </span>
             {project.subcategory && (
               <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-[6px] sm:text-[7px] bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {project.subcategory}
               </span>
             )}
          </div>
        </div>

        {/* Decorative Icons for Different Categories */}
        {isVideo && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current translate-x-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {isWebApp && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}

        {/* Project Meta Info */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex justify-between items-end">
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-[-0.06em] uppercase leading-[0.8]">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className="block overflow-hidden h-[1em]">
                    <span className="block translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" style={{ transitionDelay: `${i * 0.05}s` }}>
                      {word}
                    </span>
                  </span>
                ))}
              </h3>
              <span className="text-zinc-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-1">
                {project.year}
              </span>
            </div>
            <div className="w-0 group-hover:w-full h-[1px] sm:h-[1.5px] bg-gradient-to-r from-red-600 to-transparent transition-all duration-1000 mt-2 sm:mt-4"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectCard;
