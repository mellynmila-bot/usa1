import React, { useState, useEffect, useCallback } from 'react';
import { Language } from './types';
import { translations } from './data/siteData';
import { openWhatsAppWithContext } from './utils/whatsapp';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutAndCourseSection } from './components/AboutAndCourseSection';
import { InstagramSection } from './components/InstagramSection';
import { FeedbacksSection } from './components/FeedbacksSection';
import { StudioSection } from './components/StudioSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Toast } from './components/Toast';
import { LegalModals } from './components/LegalModals';

export const App: React.FC = () => {
  // Initialize language from localStorage or URL parameter with try/catch
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const paramLang = urlParams.get('lang');
      if (paramLang === 'en' || paramLang === 'es' || paramLang === 'pt') {
        return paramLang;
      }
      const savedLang = localStorage.getItem('naielly_lang');
      if (savedLang === 'en' || savedLang === 'es' || savedLang === 'pt') {
        return savedLang;
      }
    } catch (e) {
      console.warn('Could not read localStorage language preference:', e);
    }
    return 'pt'; // Default: Portuguese (Brazil)
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Sync document language, title, and meta description dynamically
  useEffect(() => {
    const langCode = currentLang === 'pt' ? 'pt-BR' : currentLang === 'en' ? 'en-US' : 'es-US';
    document.documentElement.lang = langCode;

    const t = translations[currentLang];
    if (t?.seo) {
      document.title = t.seo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', t.seo.desc);
      }
    }

    try {
      localStorage.setItem('naielly_lang', currentLang);
    } catch (e) {
      console.warn('Could not save language to localStorage:', e);
    }
  }, [currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleShowToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  const handleBookClick = useCallback((contextMessage?: string) => {
    const defaultMsg =
      currentLang === 'pt'
        ? 'Olá, Naielly! 💛 Vi o seu site e gostaria de agendar um horário.'
        : currentLang === 'en'
        ? 'Hello Naielly! 💛 I saw your website and would love to book an appointment.'
        : '¡Hola, Naielly! 💛 Vi tu sitio web y me gustaría reservar una cita.';

    const message = contextMessage || defaultMsg;

    openWhatsAppWithContext({
      message,
      onSuccessToast: handleShowToast,
      lang: currentLang
    });
  }, [currentLang, handleShowToast]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2A2C2E] font-sans antialiased overflow-x-hidden">
      {/* Fixed Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onBookClick={handleBookClick}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full">
        {/* 1. Hero Section (Fundo Branco) */}
        <Hero
          currentLang={currentLang}
          onBookClick={handleBookClick}
        />

        {/* 2. Serviços (Fundo Cinza Claro) */}
        <ServicesSection
          currentLang={currentLang}
          onBookClick={handleBookClick}
        />

        {/* 3. Galeria (Fundo Branco) */}
        <GallerySection
          currentLang={currentLang}
          onBookClick={handleBookClick}
        />

        {/* 4. Sobre + Curso VIP (Fundo Cinza Claro) */}
        <AboutAndCourseSection
          currentLang={currentLang}
          onBookClick={handleBookClick}
        />

        {/* 5. Instagram (Fundo Branco) */}
        <InstagramSection
          currentLang={currentLang}
          onBookClick={handleBookClick}
        />

        {/* 6. Feedbacks (Fundo Cinza Claro) */}
        <FeedbacksSection
          currentLang={currentLang}
          onBookClick={handleBookClick}
        />

        {/* 7. Studio + Localização (Fundo Branco) */}
        <StudioSection
          currentLang={currentLang}
          onBookClick={handleBookClick}
        />

        {/* 8. Agendamento + Educação (Fundo Cinza Claro) */}
        <BookingSection
          currentLang={currentLang}
          onShowToast={handleShowToast}
        />

        {/* 9. FAQ (Fundo Branco) */}
        <FaqSection
          currentLang={currentLang}
          onBookClick={handleBookClick}
        />
      </main>

      {/* 10. Rodapé (Fundo Cinza Claro) */}
      <Footer
        onOpenPrivacy={() => setActiveLegalModal('privacy')}
        onOpenTerms={() => setActiveLegalModal('terms')}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp
        currentLang={currentLang}
        onBookClick={handleBookClick}
      />

      {/* Copy Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Legal Modals (Privacy Policy & Terms of Service) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
};

export default App;
