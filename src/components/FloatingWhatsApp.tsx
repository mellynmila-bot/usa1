import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/siteData';

interface FloatingWhatsAppProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  currentLang,
  onBookClick
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero (~320px)
      setIsVisible(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 animate-fade-in">
      <button
        onClick={() => onBookClick()}
        aria-label={`${t.floating.label} via WhatsApp`}
        className="btn-mirror-primary min-w-[48px] min-h-[48px] px-4 py-3 rounded-full shadow-xl flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2A2C2E] border border-white/70 hover:scale-105 transition-transform cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 text-[#2A2C2E] fill-current shrink-0" />
        <span>{t.floating.label}</span>
      </button>
    </div>
  );
};
