import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { Language, FaqItem } from '../types';
import { translations } from '../data/siteData';

interface FaqSectionProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  currentLang,
  onBookClick
}) => {
  const [openIds, setOpenIds] = useState<number[]>([1]); // First item open by default

  const t = translations[currentLang];
  const faq = t.faq;

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBooking = () => {
    let msg = '';
    if (currentLang === 'pt') {
      msg = 'Olá, Naielly! 💛 Li as dúvidas frequentes no site e gostaria de agendar meu atendimento!';
    } else if (currentLang === 'en') {
      msg = 'Hello Naielly! 💛 I checked the FAQs on your site and would like to book my appointment!';
    } else {
      msg = '¡Hola, Naielly! 💛 ¡Revisé las preguntas frecuentes en tu sitio web y me gustaría reservar mi cita!';
    }
    onBookClick(msg);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-[#6A6E72] shrink-0" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
              Tire suas dúvidas · FAQ
            </span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-3 sm:mb-4">
            {faq.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            {faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10 sm:mb-12">
          {faq.items.map((item: FaqItem) => {
            const isOpen = openIds.includes(item.id);
            const questionId = `faq-q-${item.id}`;
            const answerId = `faq-a-${item.id}`;

            return (
              <div
                key={item.id}
                className="mirror-card overflow-hidden transition-all border border-[#B4B8BC]/40 hover:border-[#8E9296]"
              >
                <h3>
                  <button
                    id={questionId}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="w-full px-4 sm:px-5 py-4 min-h-[54px] text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none focus-visible:bg-[#F1F2F3]"
                  >
                    <span className="font-serif-title text-sm sm:text-lg text-[#2A2C2E] font-medium leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full text-[#6A6E72] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#F1F2F3]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-xs sm:text-sm text-[#5F6368] leading-relaxed border-t border-[#F1F2F3] animate-fade-in"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={handleBooking}
            className="btn-mirror-primary text-xs sm:text-base px-8 py-3.5 min-h-[48px] shadow-md w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>{faq.cta}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
