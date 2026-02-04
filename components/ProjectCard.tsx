
import React from 'react';
import { Project } from '../types';
import ImageWithLoading from './ImageWithLoading';
import DriveVideoViewer from './DriveVideoViewer';
import YouTubeViewer from './YouTubeViewer';
import InstagramViewer from './InstagramViewer';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isVideo = project.category === 'Video Editing';
  const isWebApp = project.category === 'Web Apps' && project.liveUrl;
  const isUIUXWithLiveUrl = project.category === 'UI/UX' && project.liveUrl;
  const hasDriveVideo = project.driveVideoUrl;
  const hasYouTubeVideo = project.youtubeUrl;
  const hasInstagramVideo = project.instagramUrl;
  const isReel = project.subcategory === 'Reels';
  const isThumbnail = project.subcategory === 'Thumbnails';
  
  const handleClick = () => {
    // If it's a web app or UI/UX with live URL, open it directly
    if ((isWebApp || isUIUXWithLiveUrl) && project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
    // For Drive videos, YouTube videos, and Instagram videos, their respective viewers handle the click
    // For other projects, do nothing (no detail page)
  };

  // If project has Drive video, use DriveVideoViewer
  if (hasDriveVideo) {
    return (
      <div className={`reveal group relative project-card ${isReel ? 'max-w-sm mx-auto' : ''}`}>
        <DriveVideoViewer 
          driveUrl={project.driveVideoUrl!}
          title={project.title}
          thumbnail={project.thumbnail}
          isVertical={isReel} // Pass vertical flag for reels
        />
        
        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex justify-between items-end">
              <h3 className={`font-black text-white tracking-[-0.06em] uppercase leading-[0.8] ${
                isReel ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl md:text-4xl'
              }`}>
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className="block overflow-hidden h-[1em]">
                    <span className="block translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" style={{ transitionDelay: `${i * 0.05}s` }}>
                      {word}
                    </span>
                  </span>
                ))}
              </h3>
              <span className="text-zinc-500 text-[8px] sm:text-[9px] font-black uppercase tracking-widest mb-1">
                {project.year}
              </span>
            </div>
            <div className="w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-red-600 to-transparent transition-all duration-1000 mt-1 sm:mt-2"></div>
          </div>
        </div>
      </div>
    );
  }

  // If project has Instagram video, use InstagramViewer
  if (hasInstagramVideo) {
    return (
      <div className={`reveal group relative project-card ${isReel ? 'max-w-sm mx-auto' : ''}`}>
        <InstagramViewer 
          instagramUrl={project.instagramUrl!}
          title={project.title}
          thumbnail={project.thumbnail}
          autoPlayOnHover={true} // Enable auto-play on hover for Instagram videos
        />
        
        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex justify-between items-end">
              <h3 className={`font-black text-white tracking-[-0.06em] uppercase leading-[0.8] ${
                isReel ? 'text-lg sm:text-xl' : 'text-2xl sm:text-3xl md:text-4xl'
              }`}>
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className="block overflow-hidden h-[1em]">
                    <span className="block translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" style={{ transitionDelay: `${i * 0.05}s` }}>
                      {word}
                    </span>
                  </span>
                ))}
              </h3>
              <span className="text-zinc-500 text-[8px] sm:text-[9px] font-black uppercase tracking-widest mb-1">
                {project.year}
              </span>
            </div>
            <div className="w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-pink-600 to-transparent transition-all duration-1000 mt-1 sm:mt-2"></div>
          </div>
        </div>
      </div>
    );
  }

  // If project has YouTube video, use YouTubeViewer
  if (hasYouTubeVideo) {
    return (
      <div className="reveal group relative project-card">
        <YouTubeViewer 
          youtubeUrl={project.youtubeUrl!}
          title={project.title}
          thumbnail={project.thumbnail}
          autoPlayOnHover={true} // Enable auto-play on hover for all YouTube videos
        />
        
        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none">
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex justify-between items-end">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-[-0.06em] uppercase leading-[0.8]">
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

  // For web apps with live URLs, make compact logo card - Applied Aesthetic-Usability Effect
  if (isWebApp && project.liveUrl) {
    return (
      <div className="reveal group relative project-card">
        <button
          onClick={handleClick}
          data-cursor="LAUNCH"
          className="relative block overflow-hidden rounded-2xl bg-zinc-950 transition-all duration-700 border border-white/5 hover:border-blue-500/50 w-full text-left group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          aria-label={`Launch ${project.title} web application`}
        >
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 p-8">
            {/* Logo Container - Applied Law of Proximity and Visual Hierarchy */}
            <div className="relative w-full h-full flex items-center justify-center">
              <ImageWithLoading
                src={project.thumbnail} 
                alt={`${project.title} logo`}
                className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              {/* Subtle glow effect - Applied Aesthetic-Usability Effect */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
            </div>

            {/* Web App Badge */}
            <div className="absolute top-3 left-3 z-20">
              <span className="text-white font-black uppercase tracking-[0.2em] text-[6px] border border-blue-500/30 bg-blue-500/10 px-2 py-1 rounded-full group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-500">
                App
              </span>
            </div>

            {/* Launch Icon - Applied Fitts's Law with larger click target */}
            <div className="absolute top-3 right-3 z-20 opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>

          {/* Project Title - Applied Serial Position Effect with clear hierarchy */}
          <div className="p-4 text-center">
            <h3 className="text-sm font-black text-white uppercase tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
              {project.year}
            </p>
            
            {/* Launch CTA - Applied Goal-Gradient Effect */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-blue-400 text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                Launch 
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </div>
        </button>
      </div>
    );
  }

  // For UI/UX projects with live URLs (like REDWHISK)
  if (isUIUXWithLiveUrl && project.liveUrl) {
    return (
      <div className="reveal group relative project-card">
        <button
          onClick={handleClick}
          data-cursor="VISIT"
          className="relative block overflow-hidden rounded-[2.5rem] bg-zinc-950 transition-all duration-1000 border border-white/5 hover:border-red-600/50 w-full text-left group-hover:scale-[1.02]"
        >
          <div className="relative aspect-[16/12] overflow-hidden">
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
              <span className="text-white font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[7px] sm:text-[8px] border border-white/20 px-2 sm:px-3 py-1 rounded-full group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-500">
                {project.category}
              </span>
            </div>

            {/* Launch Icon */}
            <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>

            {/* Project Info */}
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.06em] uppercase leading-[0.8]">
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
                
                {/* Visit CTA */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">
                    Click to Visit Site ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }

  // For other projects (UI/UX, Graphics Design without Drive video)
  const cursorLabel = isVideo ? 'PLAY' : 'VIEW';

  return (
    <div className="reveal group relative project-card">
      <div
        data-cursor={cursorLabel}
        className="relative block overflow-hidden rounded-[2.5rem] bg-zinc-950 transition-all duration-1000 border border-white/5 hover:border-red-600/30"
      >
        <ProjectCardContent />
      </div>
    </div>
  );

  function ProjectCardContent() {
    // Use 16:9 aspect ratio for thumbnails, otherwise use default
    const aspectRatio = isThumbnail ? 'aspect-video' : 'aspect-[16/12]';
    
    return (
      <div className={`relative ${aspectRatio} overflow-hidden`}>
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

        {/* Thumbnail Dimensions Badge for Thumbnail projects */}
        {isThumbnail && (
          <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20">
            <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-[6px] sm:text-[7px] bg-blue-600/80 px-2 py-1 rounded-full backdrop-blur-sm border border-blue-400/30">
              1920×1080
            </span>
          </div>
        )}

        {/* Project Meta Info */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex justify-between items-end">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-[-0.06em] uppercase leading-[0.8]">
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