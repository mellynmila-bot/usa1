import React from 'react';
import { MapPin, Award, Sparkles, MessageCircle, ArrowDown, CalendarCheck, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations, siteConfig } from '../data/siteData';

interface HeroProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onBookClick }) => {
  const t = translations[currentLang];

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#servicos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onlineBookingLabel =
    currentLang === 'pt'
      ? 'Agendamento Online (Square)'
      : currentLang === 'en'
      ? 'Book Online (Square)'
      : 'Reservar Online (Square)';

  return (
    <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 bg-white overflow-hidden">
      {/* Subtle ambient light gradient background */}
      <div className="absolute top-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#F1F2F3] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-4 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-[#E6E8EA] rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* PHOTO COLUMN: Order 1 on Mobile (appears FIRST), Order 2 on Desktop (appears on Right) */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center lg:justify-end relative mb-2 lg:mb-0">
            <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-sm lg:max-w-full">
              {/* Secondary shifted decorative outline */}
              <div className="absolute -inset-2 rounded-[10px] border border-[#B4B8BC]/40 transform translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />

              {/* Primary Mirror Chrome Frame */}
              <div className="mirror-frame mirror-beam relative z-10">
                <div className="mirror-frame-inner aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#F1F2F3]">
                  <img
                    src={siteConfig.heroImage}
                    alt="Naielly Silva - Brazilian Beauty Expert em Springfield MA"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Subtle caption card below photo */}
              <div className="absolute -bottom-3 right-2 sm:right-4 z-20 bg-white/95 backdrop-blur-md border border-[#B4B8BC]/70 px-3 sm:px-4 py-1.5 rounded-[6px] shadow-md flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-medium text-[#2A2C2E] whitespace-nowrap">
                  Naielly Silva · Beauty Studio
                </span>
              </div>
            </div>
          </div>

          {/* TEXT COLUMN: Order 2 on Mobile (appears AFTER photo), Order 1 on Desktop (appears on Left) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left w-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 max-w-full">
              <span className="w-4 sm:w-6 h-px bg-[#B4B8BC] shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest text-[#6A6E72] uppercase break-words leading-snug">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.2] sm:leading-[1.16] text-[#2A2C2E] mb-4 sm:mb-6">
              {t.hero.titlePart1}
              <span className="text-mirror font-medium">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#5F6368] leading-relaxed max-w-2xl mb-6 sm:mb-8">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons: WhatsApp + Square Online Booking + Services */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10 w-full">
              {/* WhatsApp CTA */}
              <button
                onClick={() => onBookClick()}
                className="btn-mirror-primary text-xs sm:text-sm px-5 py-3.5 min-h-[48px] shadow-md flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#2A2C2E] shrink-0" />
                <span>{t.hero.ctaPrimary}</span>
              </button>

              {/* Square Online Booking Option */}
              <a
                href={siteConfig.squareBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mirror-secondary text-xs sm:text-sm px-5 py-3.5 min-h-[48px] flex items-center justify-center gap-2 w-full sm:w-auto text-[#2A2C2E] border-[#8E9296] hover:bg-[#F1F2F3] shadow-xs cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4 text-[#2A2C2E] shrink-0" />
                <span>{onlineBookingLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#6A6E72] shrink-0" />
              </a>

              {/* Services Anchor Link */}
              <a
                href="#servicos"
                onClick={handleScrollToServices}
                className="btn-mirror-secondary text-xs sm:text-sm px-4 py-3.5 min-h-[48px] flex items-center justify-center gap-1.5 w-full sm:w-auto text-[#5F6368] hover:text-[#2A2C2E] cursor-pointer whitespace-nowrap"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#6A6E72] shrink-0" />
              </a>
            </div>

            {/* 3 Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-[#E6E8EA]">
              {/* Card 1: Location */}
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mirror-card p-3.5 flex flex-col justify-center group cursor-pointer hover:border-[#8E9296]"
                title="Abrir no Google Maps"
              >
                <div className="flex items-center gap-2 text-[#2A2C2E] mb-1">
                  <MapPin className="w-4 h-4 text-[#6A6E72] group-hover:text-black transition-colors shrink-0" />
                  <span className="text-xs font-semibold tracking-tight text-[#2A2C2E]">
                    Springfield, MA
                  </span>
                </div>
                <span className="text-xs text-[#5F6368] group-hover:text-[#2A2C2E] transition-colors underline-offset-2 group-hover:underline">
                  20 Florida St #A (Maps ↗)
                </span>
              </a>

              {/* Card 2: Brazilian Beauty Expert */}
              <div className="mirror-card p-3.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#2A2C2E] mb-1">
                  <Award className="w-4 h-4 text-[#6A6E72] shrink-0" />
                  <span className="text-xs font-semibold tracking-tight text-[#2A2C2E]">
                    {t.hero.card2}
                  </span>
                </div>
                <span className="text-xs text-[#5F6368]">
                  {t.hero.card2Sub}
                </span>
              </div>

              {/* Card 3: Bridals & Events */}
              <div className="mirror-card p-3.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#2A2C2E] mb-1">
                  <Sparkles className="w-4 h-4 text-[#6A6E72] shrink-0" />
                  <span className="text-xs font-semibold tracking-tight text-[#2A2C2E]">
                    {t.hero.card3}
                  </span>
                </div>
                <span className="text-xs text-[#5F6368]">
                  {t.hero.card3Sub}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
