import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations, siteConfig } from '../data/siteData';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onBookClick: (contextMessage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onBookClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.services, href: '#servicos' },
    { label: t.nav.gallery, href: '#galeria' },
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.instagram, href: '#instagram' },
    { label: t.nav.reviews, href: '#avaliacoes' },
    { label: t.nav.studio, href: '#studio' },
    { label: t.nav.faq, href: '#faq' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <>
      {/* Skip to Content accessible link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2A2C2E] focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-[#B4B8BC]"
      >
        {t.nav.skipToContent}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#B4B8BC]/40 py-2.5 sm:py-3'
            : 'bg-white/85 backdrop-blur-xs py-3 sm:py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-6">
            {/* Brand Logo Lockup */}
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col items-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2A2C2E] shrink-0"
            >
              <span className="font-serif-title text-lg sm:text-2xl font-normal tracking-[0.2em] sm:tracking-[0.22em] text-[#2A2C2E] group-hover:text-black transition-colors uppercase whitespace-nowrap">
                NAIELLY
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#6A6E72] font-medium flex items-center gap-1 sm:gap-1.5 -mt-0.5 whitespace-nowrap">
                <span className="w-2 sm:w-3 h-px bg-[#B4B8BC]" />
                Beauty Center
                <span className="w-2 sm:w-3 h-px bg-[#B4B8BC]" />
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#5F6368]">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-[#2A2C2E] transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:underline underline-offset-8 decoration-[#B4B8BC] py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Zone: Language Selector & Booking CTA */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Language Switcher Pill - always visible on mobile and desktop */}
              <div
                className="flex items-center p-0.5 sm:p-1 rounded-full bg-[#F1F2F3] border border-[#B4B8BC]/60 shadow-inner"
                role="group"
                aria-label={t.nav.langLabel}
              >
                {(['pt', 'en', 'es'] as Language[]).map((lang) => {
                  const isActive = currentLang === lang;
                  return (
                    <button
                      key={lang}
                      onClick={() => onLanguageChange(lang)}
                      className={`px-2 sm:px-2.5 py-1 min-h-[30px] sm:min-h-[32px] text-[11px] sm:text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-white text-[#2A2C2E] shadow-xs border border-[#B4B8BC]/60 font-bold'
                          : 'text-[#6A6E72] hover:text-[#2A2C2E]'
                      }`}
                      aria-pressed={isActive}
                      title={
                        lang === 'pt'
                          ? 'Ler em português'
                          : lang === 'en'
                          ? 'Read in English'
                          : 'Leer en español'
                      }
                    >
                      {lang.toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Header Primary CTA (WhatsApp) */}
              <button
                onClick={() => onBookClick()}
                className="btn-mirror-primary text-xs sm:text-sm px-3.5 sm:px-4 py-2 min-h-[40px] hidden sm:inline-flex whitespace-nowrap shrink-0 cursor-pointer"
                aria-label={t.nav.book}
              >
                <MessageCircle className="w-4 h-4 text-[#2A2C2E] shrink-0" />
                <span>{t.nav.book}</span>
              </button>

              {/* Mobile Hamburger Button (44x44px touch target) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-[#2A2C2E] hover:bg-[#F1F2F3] focus:outline-none focus:ring-2 focus:ring-[#B4B8BC] cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#B4B8BC]/50 px-4 sm:px-6 pt-3 pb-6 shadow-xl max-h-[calc(100dvh-60px)] overflow-y-auto animate-fade-in">
            <div className="flex flex-col divide-y divide-[#F1F2F3]">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-[#2A2C2E] py-3.5 min-h-[48px] flex items-center justify-between hover:text-black active:bg-[#F1F2F3]/50 transition-colors cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#8E9296]">→</span>
                </button>
              ))}
            </div>

            <div className="pt-4 mt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="btn-mirror-primary w-full min-h-[48px] py-3 text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{t.nav.book} (WhatsApp)</span>
              </button>

              <a
                href={siteConfig.squareBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-mirror-secondary w-full min-h-[48px] py-3 text-sm flex items-center justify-center gap-2 text-[#2A2C2E] border-[#8E9296]"
              >
                <span>Agendamento Online (Square)</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#6A6E72] shrink-0" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
