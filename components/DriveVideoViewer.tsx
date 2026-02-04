import React, { useState, useEffect, useRef } from 'react';

interface DriveVideoViewerProps {
  driveUrl: string;
  title: string;
  thumbnail?: string;
  autoPlayOnHover?: boolean;
  isVertical?: boolean;
}

const DriveVideoViewer: React.FC<DriveVideoViewerProps> = ({ 
  driveUrl, 
  title, 
  thumbnail, 
  autoPlayOnHover = true,
  isVertical = false
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHoverPlayer, setShowHoverPlayer] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Extract file ID from Google Drive URL
  const getFileId = (url: string): string => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    return fileIdMatch ? fileIdMatch[1] : '';
  };

  // Get Drive video thumbnail URL
  const getDriveThumbnail = (url: string): string => {
    const fileId = getFileId(url);
    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200-h675`;
    }
    return thumbnail || '';
  };

  // Get direct view URL
  const getViewUrl = (url: string): string => {
    const fileId = getFileId(url);
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/view`;
    }
    return url;
  };

  // Get Drive embed URL for hover preview
  const getEmbedUrl = (url: string): string => {
    const fileId = getFileId(url);
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
  };

  const videoThumbnail = getDriveThumbnail(driveUrl);
  const viewUrl = getViewUrl(driveUrl);
  const embedUrl = getEmbedUrl(driveUrl);

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
        <div className={`relative overflow-hidden rounded-2xl bg-zinc-900 ${
          isVertical ? 'aspect-[9/16]' : 'aspect-video'
        }`}>
          {/* Hover Video Player */}
          {autoPlayOnHover && showHoverPlayer && (
            <div className="absolute inset-0 z-10">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
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
          
          {/* Play Button Overlay (hidden during hover video) - Applied Fitts's Law with larger target */}
          {!(autoPlayOnHover && showHoverPlayer) && (
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-20">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg className="w-10 h-10 text-white fill-current translate-x-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Drive Badge */}
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 z-30">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.5 2L3 6.5L6.5 11H17.5L21 6.5L17.5 2H6.5Z"/>
              <path d="M11.5 13L8 17.5L11.5 22H22.5L19 17.5L22.5 13H11.5Z"/>
              <path d="M2.5 13L6 17.5L2.5 22H13.5L10 17.5L13.5 13H2.5Z"/>
            </svg>
            Drive
          </div>

          {/* Hover indicator - Applied Doherty Threshold with clear feedback */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
            <div className="bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-lg font-bold text-sm text-center border border-white/20 transform translate-y-2 group-hover:translate-y-0">
              {autoPlayOnHover && showHoverPlayer ? '🎬 Playing preview...' : 
               autoPlayOnHover && isHovered ? '🎬 Loading preview...' : 
               '▶ Hover to preview • Click for full screen'}
            </div>
          </div>
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
                allow="autoplay; encrypted-media"
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

export default DriveVideoViewer;