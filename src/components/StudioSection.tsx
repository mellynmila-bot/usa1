import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ShieldCheck,
  Heart,
  Cpu,
  UserCheck,
  Lock,
  Navigation,
  MapPin,
  ExternalLink,
  MessageCircle,
  CalendarCheck,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { Language, StudioFeature } from '../types';
import { translations, studioPhotos, siteConfig } from '../data/siteData';

interface StudioSectionProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({
  currentLang,
  onBookClick
}) => {
  const [lightboxPhotoIdx, setLightboxPhotoIdx] = useState<number | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const t = translations[currentLang];
  const studio = t.studio;

  // Quadruple items to ensure a seamless infinite looping track on all screen widths
  const loopingPhotos = [...studioPhotos, ...studioPhotos, ...studioPhotos, ...studioPhotos];

  const closeLightbox = useCallback(() => {
    setLightboxPhotoIdx(null);
  }, []);

  const showNextPhoto = useCallback(() => {
    if (lightboxPhotoIdx === null) return;
    setLightboxPhotoIdx((prev) => (prev! + 1) % studioPhotos.length);
  }, [lightboxPhotoIdx]);

  const showPrevPhoto = useCallback(() => {
    if (lightboxPhotoIdx === null) return;
    setLightboxPhotoIdx((prev) => (prev! - 1 + studioPhotos.length) % studioPhotos.length);
  }, [lightboxPhotoIdx]);

  useEffect(() => {
    if (lightboxPhotoIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextPhoto();
      if (e.key === 'ArrowLeft') showPrevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxPhotoIdx, closeLightbox, showNextPhoto, showPrevPhoto]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) showNextPhoto();
    else if (diff < -45) showPrevPhoto();
    touchStartX.current = null;
  };

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'hygiene':
        return <ShieldCheck className="w-5 h-5 text-[#6A6E72]" />;
      case 'comfort':
        return <Heart className="w-5 h-5 text-[#6A6E72]" />;
      case 'tech':
        return <Cpu className="w-5 h-5 text-[#6A6E72]" />;
      case 'privacy':
        return <Lock className="w-5 h-5 text-[#6A6E72]" />;
      case 'security':
        return <UserCheck className="w-5 h-5 text-[#6A6E72]" />;
      case 'access':
        return <Navigation className="w-5 h-5 text-[#6A6E72]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#6A6E72]" />;
    }
  };

  const handleStudioBooking = () => {
    let msg = '';
    if (currentLang === 'pt') {
      msg = 'Olá, Naielly! 💛 Gostaria de agendar uma visita ao studio Naielly Beauty Center na 20 Florida St!';
    } else if (currentLang === 'en') {
      msg = 'Hello Naielly! 💛 I would love to schedule a visit to Naielly Beauty Center studio at 20 Florida St!';
    } else {
      msg = '¡Hola, Naielly! 💛 ¡Me gustaría agendar una visita al studio Naielly Beauty Center en 20 Florida St!';
    }
    onBookClick(msg);
  };

  const onlineBookingLabel =
    currentLang === 'pt'
      ? 'Agendamento Online (Square)'
      : currentLang === 'en'
      ? 'Book Online (Square)'
      : 'Reservar Online (Square)';

  return (
    <section id="studio" className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Logo (Center, Fine Mirror Frame) */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="mirror-frame p-[2px] rounded-[10px] shadow-xs max-w-[180px] sm:max-w-[220px]">
            <div className="mirror-frame-inner bg-white p-3 rounded-[8px]">
              <img
                src={siteConfig.studioLogo}
                alt="Naielly Beauty Center Logo"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
              Espaço & Estrutura
            </span>
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-3 sm:mb-4">
            {studio.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            {studio.subtitle}
          </p>
        </div>

        {/* Infinite Continuous Sliding Carousel with Pause Button and Click to Expand */}
        <div className="relative w-full mb-12 sm:mb-16 overflow-hidden py-3">
          {/* Subtle gradient edges to fade seamlessly */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className={`animate-infinite-scroll flex items-center gap-3.5 sm:gap-6 ${
              isCarouselPaused ? 'paused' : ''
            }`}
          >
            {loopingPhotos.map((photo, index) => (
              <div
                key={`${photo.id}-${index}`}
                onClick={() => setLightboxPhotoIdx(photo.id - 1)}
                className="w-[240px] xs:w-[280px] sm:w-[360px] shrink-0 cursor-pointer mirror-frame p-[2px] rounded-[8px] transition-transform duration-300 hover:scale-[1.02] shadow-md group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxPhotoIdx(photo.id - 1);
                  }
                }}
                aria-label={photo.alt}
              >
                <div className="mirror-frame-inner relative aspect-[16/10] overflow-hidden bg-[#2A2C2E] rounded-[6px]">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/90 text-[#2A2C2E] shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setIsCarouselPaused(!isCarouselPaused)}
              className="btn-mirror-secondary text-xs px-3.5 py-1.5 min-h-[36px] flex items-center gap-1.5 cursor-pointer"
              aria-pressed={isCarouselPaused}
            >
              {isCarouselPaused ? (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>{studio.resumeSlider}</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>{studio.pauseSlider}</span>
                </>
              )}
            </button>
            <span className="text-xs text-[#6A6E72]">
              Toque em qualquer foto para ampliar
            </span>
          </div>
        </div>

        {/* 6 Feature Cards (Grid 3x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 mb-12 sm:mb-16">
          {studio.features.map((feat: StudioFeature) => (
            <div
              key={feat.id}
              className="mirror-card p-4 sm:p-5 bg-white flex items-start gap-3.5 sm:gap-4 hover:-translate-y-0.5 transition-all"
            >
              <div className="p-2 sm:p-2.5 rounded-[6px] bg-[#F1F2F3] border border-[#B4B8BC]/40 shrink-0">
                {getFeatureIcon(feat.id)}
              </div>
              <div>
                <h3 className="font-serif-title text-base sm:text-lg text-[#2A2C2E] mb-1 font-medium">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location Block: Address Card + Directions Button + Google Maps Iframe */}
        <div className="bg-[#F1F2F3]/60 rounded-[8px] p-4 sm:p-8 border border-[#B4B8BC]/50 mb-10 sm:mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-[#B4B8BC]/40">
            <div>
              <div className="flex items-center gap-2 text-[#2A2C2E] mb-1">
                <MapPin className="w-5 h-5 text-[#6A6E72] shrink-0" />
                <h3 className="font-serif-title text-lg sm:text-xl text-[#2A2C2E]">
                  {studio.addressCardTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5F6368]">
                {siteConfig.address}
              </p>
              {siteConfig.openingHours && (
                <p className="text-xs text-[#6A6E72] mt-1">
                  Horário: {siteConfig.openingHours}
                </p>
              )}
              {siteConfig.parking && (
                <p className="text-xs text-[#6A6E72] mt-0.5">
                  Estacionamento: {siteConfig.parking}
                </p>
              )}
            </div>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mirror-secondary text-xs sm:text-sm px-4 sm:px-5 py-3 min-h-[44px] flex items-center gap-2 shrink-0 w-full md:w-auto justify-center whitespace-nowrap"
            >
              <span>{studio.ctaDirections}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#6A6E72] shrink-0" />
            </a>
          </div>

          {/* Integrated Google Maps Iframe */}
          <div className="mirror-frame p-[2px] rounded-[6px] shadow-xs">
            <div className="mirror-frame-inner w-full h-[280px] sm:h-[380px] md:h-[420px] rounded-[4px] overflow-hidden bg-white">
              <iframe
                src={siteConfig.googleMapsEmbed}
                title="Mapa de localização Naielly Beauty Center em Springfield MA"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Section Booking CTAs: WhatsApp + Square Online Booking */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={handleStudioBooking}
            className="btn-mirror-primary text-xs sm:text-base px-6 sm:px-8 py-3.5 min-h-[48px] shadow-md w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>{studio.ctaBook} (WhatsApp)</span>
          </button>

          <a
            href={siteConfig.squareBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mirror-secondary text-xs sm:text-base px-6 sm:px-8 py-3.5 min-h-[48px] w-full sm:w-auto flex items-center justify-center gap-2 text-[#2A2C2E] border-[#8E9296] hover:bg-white shadow-xs cursor-pointer whitespace-nowrap"
          >
            <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A2C2E] shrink-0" />
            <span>{onlineBookingLabel}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#6A6E72] shrink-0" />
          </a>
        </div>
      </div>

      {/* Lightbox for Studio Photos with Prev/Next and Touch Swipe */}
      {lightboxPhotoIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto do Studio em tamanho ampliado"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={closeLightbox}
        >
          <div
            className="absolute top-3 sm:top-4 left-0 right-0 px-4 sm:px-6 flex items-center justify-between text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm tracking-widest font-mono tabular-nums text-[#E6E8EA]">
              {lightboxPhotoIdx + 1} / {studioPhotos.length}
            </span>
            <button
              onClick={closeLightbox}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevPhoto();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-all z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[82vh] flex items-center justify-center px-10 sm:px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={studioPhotos[lightboxPhotoIdx].url}
              alt={studioPhotos[lightboxPhotoIdx].alt}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[80vh] object-contain rounded-[4px] border border-white/20 shadow-2xl animate-fade-in"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNextPhoto();
            }}
            aria-label="Próxima foto"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 text-white transition-all z-20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
