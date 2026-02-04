import React, { useState, useEffect, useRef } from 'react';

interface YouTubeViewerProps {
  youtubeUrl: string;
  title: string;
  thumbnail?: string;
  autoPlayOnHover?: boolean;
}

const YouTubeViewer: React.FC<YouTubeViewerProps> = ({ 
  youtubeUrl, 
  title, 
  thumbnail, 
  autoPlayOnHover = false 
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHoverPlayer, setShowHoverPlayer] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  // Get YouTube thumbnail URL
  const getYouTubeThumbnail = (url: string): string => {
    const videoId = getVideoId(url);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return thumbnail || '';
  };

  // Get YouTube embed URL
  const getEmbedUrl = (url: string, autoplay: boolean = false): string => {
    const videoId = getVideoId(url);
    if (videoId) {
      const autoplayParam = autoplay ? '&autoplay=1' : '';
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&mute=1${autoplayParam}`;
    }
    return url;
  };

  const videoThumbnail = getYouTubeThumbnail(youtubeUrl);
  const embedUrl = getEmbedUrl(youtubeUrl, true);
  const hoverEmbedUrl = getEmbedUrl(youtubeUrl, true);

  // Handle hover events for auto-play
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (autoPlayOnHover) {
      hoverTimeoutRef.current = setTimeout(() => {
        setShowHoverPlayer(true);
      }, 500); // 500ms delay before starting video
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (autoPlayOnHover) {
      setShowHoverPlayer(false);
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Thumbnail */}
      <div 
        className="relative group cursor-pointer" 
        onClick={handlePlayClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900">
          {/* Hover Video Player */}
          {autoPlayOnHover && showHoverPlayer && (
            <div className="absolute inset-0 z-10">
              <iframe
                src={hoverEmbedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title={`${title} - Hover Preview`}
              />
            </div>
          )}

          {/* Thumbnail (hidden when hover video is playing) */}
          <div className={`relative w-full h-full transition-opacity duration-300 ${
            autoPlayOnHover && showHoverPlayer ? 'opacity-0' : 'opacity-100'
          }`}>
            {videoThumbnail ? (
              <div className="relative w-full h-full">
                {/* Blurred background */}
                <img 
                  src={videoThumbnail} 
                  alt={`${title} - Video thumbnail`}
                  className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-60"
                />
                {/* Sharp foreground */}
                <img 
                  src={videoThumbnail} 
                  alt={`${title} - Video thumbnail`}
                  className="relative w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎬</div>
                  <p className="text-white font-bold">{title}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Play Button Overlay (hidden during hover video) - Applied Fitts's Law */}
          {!(autoPlayOnHover && showHoverPlayer) && (
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-20">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg className="w-10 h-10 text-white fill-current translate-x-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* YouTube Badge */}
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 z-30">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </div>

          {/* Hover indicator for auto-play - Applied clear feedback */}
          {autoPlayOnHover && !showHoverPlayer && (
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
              <div className="bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-lg font-bold text-sm text-center border border-white/20 transform translate-y-2 group-hover:translate-y-0">
                {isHovered ? '🎬 Loading preview...' : '▶ Hover to preview • Click for full screen'}
              </div>
            </div>
          )}

          {/* Regular click instruction - Applied clear affordances */}
          {!autoPlayOnHover && (
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
              <div className="bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-lg font-bold text-sm text-center border border-white/20 transform translate-y-2 group-hover:translate-y-0">
                ▶ Click to Play Video
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              />
            </div>

            {/* Video Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm">Press ESC to close</p>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={handleCloseModal}
          />
        </div>
      )}
    </>
  );
};

export default YouTubeViewer;