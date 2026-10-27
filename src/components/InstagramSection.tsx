import React from 'react';
import { Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations, siteConfig } from '../data/siteData';

interface InstagramSectionProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({
  currentLang,
  onBookClick
}) => {
  const t = translations[currentLang];
  const insta = t.instagram;

  const handleBooking = () => {
    let msg = '';
    if (currentLang === 'pt') {
      msg = 'Olá, Naielly! 💛 Acompanho o seu trabalho no Instagram e gostaria de agendar um horário com você!';
    } else if (currentLang === 'en') {
      msg = 'Hello Naielly! 💛 I follow your Instagram work and would love to book an appointment with you!';
    } else {
      msg = '¡Hola, Naielly! 💛 Sigo tu trabajo en Instagram y me encantaría agendar una cita contigo!';
    }
    onBookClick(msg);
  };

  return (
    <section id="instagram" className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Instagram className="w-4 h-4 text-[#6A6E72] shrink-0" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
              Social & Bastidores
            </span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-3 sm:mb-4">
            {insta.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            {insta.subtitle}
          </p>
        </div>

        {/* Profile Lockup Card */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-5 sm:p-6 rounded-[8px] border border-[#B4B8BC]/50 bg-[#F1F2F3]/40 mb-8 sm:mb-10 max-w-2xl mx-auto shadow-xs text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
            {/* Avatar with Mirror Ring */}
            <div className="relative w-16 h-16 rounded-full p-0.5 bg-mirror shadow-md shrink-0">
              <img
                src={siteConfig.heroImage}
                alt="Naielly Silva Instagram"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#2A2C2E] text-base">
                Naielly Silva
              </h3>
              <p className="text-sm text-[#6A6E72]">
                {siteConfig.instagramHandle}
              </p>
              <span className="text-xs text-[#8E9296]">
                Springfield, MA · Brazilian Beauty Expert
              </span>
            </div>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mirror-secondary text-xs sm:text-sm px-5 py-2.5 min-h-[44px] flex items-center gap-2 w-full sm:w-auto justify-center whitespace-nowrap shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#2A2C2E] shrink-0" />
            <span>{insta.followButton}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#6A6E72] shrink-0" />
          </a>
        </div>

        {/* Official Instagram Reel Embed (DXxlRUohN14) */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-10">
          <div className="w-full max-w-[340px] sm:max-w-[400px] mirror-frame p-[2px] shadow-xl rounded-[8px]">
            <div className="mirror-frame-inner bg-black rounded-[6px] overflow-hidden">
              <iframe
                src={siteConfig.reelInstagramUrl}
                title="Instagram Reel oficial por Naielly Beauty"
                className="w-full h-[480px] sm:h-[540px] border-0"
                loading="lazy"
                allowFullScreen
                scrolling="no"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mirror-secondary text-xs sm:text-sm px-6 py-3.5 min-h-[48px] w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Instagram className="w-4 h-4 shrink-0" />
            <span>Seguir {siteConfig.instagramHandle}</span>
          </a>

          <button
            onClick={handleBooking}
            className="btn-mirror-primary text-xs sm:text-sm px-7 py-3.5 min-h-[48px] shadow-md w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>{insta.bookButton}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
