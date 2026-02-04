import React, { useState, useEffect, useRef } from 'react';

interface InstagramViewerProps {
  instagramUrl: string;
  title: string;
  thumbnail?: string;
  autoPlayOnHover?: boolean;
}

const InstagramViewer: React.FC<InstagramViewerProps> = ({ 
  instagramUrl, 
  title, 
  thumbnail, 
  autoPlayOnHover = true 
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHoverPlayer, setShowHoverPlayer] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Extract post ID from Instagram URL
  const getPostId = (url: string): string => {
    const match = url.match(/\/p\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : '';
  };

  // Get Instagram embed URL
  const getEmbedUrl = (url: string): string => {
    const postId = getPostId(url);
    if (postId) {
      return `https://www.instagram.com/p/${postId}/embed/`;
    }
    return url;
  };

  // Get Instagram thumbnail (placeholder since Instagram doesn't provide direct thumbnail API)
  const getInstagramThumbnail = (url: string): string => {
    // Instagram doesn't provide a direct thumbnail API like YouTube
    // We'll use the provided thumbnail or a placeholder
    return thumbnail || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200';
  };

  const embedUrl = getEmbedUrl(instagramUrl);
  const instagramThumbnail = getInstagramThumbnail(instagramUrl);

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

  const handleOpenInInstagram = () => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
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
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900"> {/* Instagram aspect ratio */}
          {/* Hover Instagram Embed */}
          {autoPlayOnHover && showHoverPlayer && (
            <div className="absolute inset-0 z-10">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="encrypted-media"
                title={`${title} - Hover Preview`}
                style={{ border: 'none' }}
              />
            </div>
          )}

          {/* Thumbnail (hidden when hover embed is showing) */}
          <div className={`relative w-full h-full transition-opacity duration-300 ${
            autoPlayOnHover && showHoverPlayer ? 'opacity-0' : 'opacity-100'
          }`}>
            {instagramThumbnail ? (
              <div className="relative w-full h-full">
                {/* Blurred background */}
                <img 
                  src={instagramThumbnail} 
                  alt={`${title} - Instagram thumbnail`}
                  className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-60"
                />
                {/* Sharp foreground */}
                <img 
                  src={instagramThumbnail} 
                  alt={`${title} - Instagram thumbnail`}
                  className="relative w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-900 to-purple-900">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <p className="text-white font-bold">{title}</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Play Button Overlay (hidden during hover embed) - Applied Fitts's Law */}
          {!(autoPlayOnHover && showHoverPlayer) && (
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-20">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg className="w-8 h-8 text-white fill-current translate-x-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Instagram Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 z-30">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </div>

          {/* Hover indicator - Applied clear feedback and affordances */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
            <div className="bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-lg font-bold text-sm text-center border border-white/20 transform translate-y-2 group-hover:translate-y-0">
              {autoPlayOnHover && showHoverPlayer ? '📱 Loading Instagram...' : 
               autoPlayOnHover && isHovered ? '📱 Loading preview...' : 
               '▶ Hover to preview • Click for full screen'}
            </div>
          </div>

          {/* Open in Instagram button - Applied Fitts's Law with larger target */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenInInstagram();
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              aria-label="Open in Instagram"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Instagram Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          {/* Modal Content */}
          <div className="relative w-full max-w-md mx-auto"> {/* Smaller width for Instagram */}
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Instagram Container */}
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="encrypted-media"
                title={title}
                style={{ border: 'none' }}
              />
            </div>

            {/* Video Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleOpenInInstagram}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-all"
                >
                  Open in Instagram ↗
                </button>
              </div>
              <p className="text-zinc-400 text-sm mt-2">Press ESC to close</p>
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

export default InstagramViewer;