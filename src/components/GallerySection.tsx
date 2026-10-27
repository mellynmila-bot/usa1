import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations, galleryImages } from '../data/siteData';

interface GallerySectionProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  currentLang,
  onBookClick
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const t = translations[currentLang];
  const gallery = t.gallery;

  const isOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % galleryImages.length);
  }, [lightboxIndex]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
  }, [lightboxIndex]);

  // Keyboard navigation & trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeLightbox, showNext, showPrev]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      showNext();
    } else if (diff < -45) {
      showPrev();
    }
    touchStartX.current = null;
  };

  const handleGalleryCta = () => {
    let msg = '';
    if (currentLang === 'pt') {
      msg = 'Olá, Naielly! 💛 Vi a galeria de trabalhos no site e me apaixonei pelos resultados. Gostaria de agendar um horário com você!';
    } else if (currentLang === 'en') {
      msg = 'Hello Naielly! 💛 I saw the transformation gallery on your website and loved the results. I would love to book an appointment with you!';
    } else {
      msg = '¡Hola, Naielly! 💛 Vi la galería de trabajos en tu sitio web y me encantaron los resultados. ¡Me gustaría agendar una cita contigo!';
    }
    onBookClick(msg);
  };

  return (
    <section id="galeria" className="py-16 sm:py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
              Portfólio & Resultados
            </span>
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-3 sm:mb-4">
            {gallery.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            {gallery.subtitle}
          </p>
        </div>

        {/* 6 Photos Grid (3x2 Desktop, 2 Columns Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-10">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer mirror-frame p-[2px] transition-all hover:-translate-y-1 hover:shadow-xl"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
              aria-label={`Visualizar foto ${idx + 1} em tamanho ampliado`}
            >
              <div className="mirror-frame-inner relative aspect-square overflow-hidden bg-[#F1F2F3]">
                <img
                  src={img.url}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover / Tap overlay with mirror icon */}
                <div className="absolute inset-0 bg-[#2A2C2E]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                  <div className="p-2.5 rounded-full bg-white/90 text-[#2A2C2E] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Individual variation disclaimer */}
        <p className="text-center text-xs text-[#6A6E72] mb-8 sm:mb-10 italic">
          {gallery.disclaimer}
        </p>

        {/* Section CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={handleGalleryCta}
            className="btn-mirror-primary text-xs sm:text-base px-8 py-3.5 min-h-[48px] shadow-md w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>{gallery.cta}</span>
          </button>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria em tela cheia"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md transition-opacity duration-300 p-3 sm:p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={closeLightbox}
        >
          {/* Top Bar with Counter and Close Button */}
          <div
            className="absolute top-3 sm:top-4 left-0 right-0 px-4 sm:px-6 flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm tracking-widest font-mono tabular-nums text-[#E6E8EA]">
              {lightboxIndex! + 1} / {galleryImages.length}
            </span>
            <button
              ref={closeButtonRef}
              onClick={closeLightbox}
              aria-label={gallery.closeLightbox}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label={gallery.prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-all z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <div
            className="relative max-w-4xl max-h-[82vh] flex flex-col items-center justify-center px-10 sm:px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex!].url}
              alt={galleryImages[lightboxIndex!].alt}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-[4px] border border-white/20 shadow-2xl animate-fade-in"
            />
            {galleryImages[lightboxIndex!].caption && (
              <p className="text-xs sm:text-sm text-[#E6E8EA] text-center mt-3 max-w-md">
                {galleryImages[lightboxIndex!].caption}
              </p>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label={gallery.next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-all z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
