import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle, Pause, Play } from 'lucide-react';
import { Language, FeedbackItem } from '../types';
import { translations } from '../data/siteData';

interface FeedbacksSectionProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

export const FeedbacksSection: React.FC<FeedbacksSectionProps> = ({
  currentLang,
  onBookClick
}) => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const t = translations[currentLang];
  const feedbacks = t.feedbacks;

  const handleNext = () => {
    setMobileIndex((prev) => (prev + 1) % feedbacks.items.length);
  };

  const handlePrev = () => {
    setMobileIndex((prev) => (prev - 1 + feedbacks.items.length) % feedbacks.items.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % feedbacks.items.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, feedbacks.items.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const handleFeedbackCta = () => {
    let msg = '';
    if (currentLang === 'pt') {
      msg = 'Olá, Naielly! 💛 Li as avaliações no seu site e gostaria de agendar um horário para viver essa experiência!';
    } else if (currentLang === 'en') {
      msg = 'Hello Naielly! 💛 I read the reviews on your website and would love to schedule an appointment to experience this for myself!';
    } else {
      msg = '¡Hola, Naielly! 💛 Leí los testimonios en tu sitio web y me encantaría reservar una cita para vivir esta experiencia!';
    }
    onBookClick(msg);
  };

  return (
    <section id="avaliacoes" className="py-16 sm:py-20 md:py-28 bg-[#F1F2F3] relative">
      {/* SVG Defs for Silver Mirror Star Gradient (matching PRD Section 2 & 6.6: 5 estrelas em cinza espelhado) */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="silverMirrorStar" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6A6E72" />
            <stop offset="25%" stopColor="#F4F5F6" />
            <stop offset="50%" stopColor="#8E9296" />
            <stop offset="75%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#4A4E52" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
              Depoimentos · Client Reviews
            </span>
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-3 sm:mb-4">
            {feedbacks.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            {feedbacks.subtitle}
          </p>
        </div>

        {/* Desktop Grid 3x2 */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-12">
          {feedbacks.items.map((item: FeedbackItem) => (
            <div
              key={item.id}
              className="mirror-card p-6 bg-white flex flex-col justify-between transition-all hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars with Metallic Mirror Gradient */}
                <div className="flex items-center gap-1.5 mb-4" aria-label="5 de 5 estrelas">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{
                        fill: 'url(#silverMirrorStar)',
                        stroke: '#6A6E72',
                        strokeWidth: 1
                      }}
                    />
                  ))}
                </div>

                <Quote className="w-7 h-7 text-[#B4B8BC]/50 mb-3" />

                <p className="font-serif-title text-base sm:text-lg text-[#2A2C2E] italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#F1F2F3] flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-[#2A2C2E]">
                    {item.name}
                  </h3>
                  <span className="text-xs text-[#6A6E72]">
                    {item.service}
                  </span>
                </div>
                <span className="text-xs text-[#8E9296]">
                  Springfield, MA
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel with Touch Swipe + Pause/Play + Arrows */}
        <div
          className="md:hidden mb-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {(() => {
            const currentItem = feedbacks.items[mobileIndex];
            return (
              <div className="mirror-card p-5 bg-white flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5" aria-label="5 de 5 estrelas">
                      {[...Array(currentItem.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          style={{
                            fill: 'url(#silverMirrorStar)',
                            stroke: '#6A6E72',
                            strokeWidth: 1
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-mono tabular-nums text-[#8E9296]">
                      {mobileIndex + 1} / {feedbacks.items.length}
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-[#B4B8BC]/50 mb-2" />

                  <p className="font-serif-title text-base text-[#2A2C2E] italic leading-relaxed mb-6">
                    “{currentItem.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F1F2F3] flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#2A2C2E]">
                      {currentItem.name}
                    </h3>
                    <span className="text-xs text-[#6A6E72]">
                      {currentItem.service}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      aria-label={isPaused ? feedbacks.resumeAuto : feedbacks.pauseAuto}
                      className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full border border-[#B4B8BC] hover:bg-[#F1F2F3] text-[#2A2C2E] cursor-pointer"
                    >
                      {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={handlePrev}
                      aria-label="Avaliação anterior"
                      className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full border border-[#B4B8BC] hover:bg-[#F1F2F3] text-[#2A2C2E] cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Próxima avaliação"
                      className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full border border-[#B4B8BC] hover:bg-[#F1F2F3] text-[#2A2C2E] cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* FTC / Demo disclaimer */}
        <p className="text-center text-xs text-[#6A6E72] max-w-xl mx-auto mb-8 sm:mb-10 italic">
          {feedbacks.disclaimer}
        </p>

        {/* Section CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={handleFeedbackCta}
            className="btn-mirror-primary text-xs sm:text-base px-8 py-3.5 min-h-[48px] shadow-md w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>{feedbacks.cta}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
