import React, { useState } from 'react';
import { Clock, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations, siteConfig } from '../data/siteData';

interface ServicesSectionProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

type CategoryKey = 'cilios' | 'sobrancelhas' | 'maquiagem' | 'pele' | 'epilacao';
type FilterTab = CategoryKey | 'todos';

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onBookClick
}) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('cilios');

  const t = translations[currentLang];
  const services = t.services;

  const tabKeys: CategoryKey[] = [
    'cilios',
    'sobrancelhas',
    'maquiagem',
    'pele',
    'epilacao'
  ];

  const allLabel =
    currentLang === 'pt'
      ? 'Ver Todos'
      : currentLang === 'en'
      ? 'View All'
      : 'Ver Todos';

  const getCategoryCount = (key: CategoryKey) =>
    services.items.filter((item: ServiceItem) => item.group === key).length;

  const visibleGroups: CategoryKey[] =
    activeTab === 'todos' ? tabKeys : [activeTab];

  const handleBookService = (service: ServiceItem) => {
    let msg = '';
    if (currentLang === 'pt') {
      msg = `Olá, Naielly! 💛 Vi o serviço "${service.name}" (${service.price}) no site e gostaria de agendar um horário para este procedimento.`;
    } else if (currentLang === 'en') {
      msg = `Hello Naielly! 💛 I saw your "${service.name}" (${service.price}) service on your website and would love to book an appointment for it.`;
    } else {
      msg = `¡Hola, Naielly! 💛 Vi el servicio de "${service.name}" (${service.price}) en tu sitio web y me gustaría reservar una cita para este procedimiento.`;
    }
    onBookClick(msg);
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-28 bg-[#F1F2F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
              Menu de Serviços · Services
            </span>
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-3 sm:mb-4">
            {services.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            {services.subtitle}
          </p>
        </div>

        {/* Category Navigation:
            On Mobile (<640px): 2-column grid where all 5 categories (Cílios, Sobrancelhas, Maquiagem e Noivas, Pele e Lábios, Epilação) + Ver Todos are 100% visible on screen simultaneously with zero horizontal clipping.
            On Tablet/Desktop (>=640px): Centered pill bar. */}
        <div className="mb-8 sm:mb-12">
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch sm:items-center justify-center gap-2 sm:gap-2 p-2 sm:p-2 rounded-2xl sm:rounded-full bg-white border border-[#B4B8BC]/60 shadow-xs max-w-4xl mx-auto"
            role="tablist"
            aria-label={services.title}
          >
            {tabKeys.map((key) => {
              const isActive = activeTab === key;
              const count = getCategoryCount(key);
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(key)}
                  className={`px-3 sm:px-5 py-3 sm:py-2.5 min-h-[46px] sm:min-h-[42px] rounded-xl sm:rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center leading-tight ${
                    isActive
                      ? 'bg-mirror text-[#2A2C2E] shadow-xs font-bold border border-[#8E9296]/50'
                      : 'bg-[#F1F2F3]/50 sm:bg-transparent text-[#2A2C2E] hover:bg-[#F1F2F3] border border-transparent'
                  }`}
                >
                  <span>{services.categories[key]}</span>
                  <span className="text-[11px] text-[#6A6E72] font-normal tabular-nums">
                    ({count})
                  </span>
                </button>
              );
            })}

            {/* 6th button completes the 2x3 mobile grid and allows viewing all 5 categories at once */}
            <button
              role="tab"
              aria-selected={activeTab === 'todos'}
              onClick={() => setActiveTab('todos')}
              className={`px-3 sm:px-5 py-3 sm:py-2.5 min-h-[46px] sm:min-h-[42px] rounded-xl sm:rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center leading-tight ${
                activeTab === 'todos'
                  ? 'bg-mirror text-[#2A2C2E] shadow-xs font-bold border border-[#8E9296]/50'
                  : 'bg-[#F1F2F3]/50 sm:bg-transparent text-[#5F6368] hover:text-[#2A2C2E] hover:bg-[#F1F2F3] border border-transparent'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#6A6E72] shrink-0" />
              <span>{allLabel}</span>
            </button>
          </div>
        </div>

        {/* Services List (supports single active category OR all 5 categories grouped) */}
        <div className="space-y-10 mb-10 sm:mb-12">
          {visibleGroups.map((groupKey) => {
            const groupItems = services.items.filter(
              (item: ServiceItem) => item.group === groupKey
            );

            return (
              <div key={groupKey} className="animate-fade-in">
                {/* Category Subtitle Header */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-2 border-b border-[#B4B8BC]/40">
                  <h3 className="font-serif-title text-xl sm:text-2xl text-[#2A2C2E]">
                    {services.categories[groupKey]}
                  </h3>
                  <span className="text-xs text-[#6A6E72] tabular-nums">
                    {groupItems.length}{' '}
                    {currentLang === 'pt'
                      ? 'procedimentos'
                      : currentLang === 'en'
                      ? 'services'
                      : 'servicios'}
                  </span>
                </div>

                {/* Services Grid (2 columns on desktop, 1 on mobile) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {groupItems.map((service: ServiceItem) => (
                    <div
                      key={service.id}
                      className="mirror-card p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start bg-white transition-all hover:-translate-y-0.5"
                    >
                      {/* Service Image with Mirror Border */}
                      <div className="w-full sm:w-28 sm:h-28 h-44 shrink-0 rounded-[6px] overflow-hidden mirror-frame p-[2px]">
                        <div className="mirror-frame-inner w-full h-full">
                          <img
                            src={service.image}
                            alt={service.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Service Info */}
                      <div className="flex-1 flex flex-col justify-between w-full h-full min-w-0">
                        <div>
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <h4 className="font-serif-title text-lg sm:text-xl font-normal text-[#2A2C2E] leading-snug">
                              {service.name}
                            </h4>
                            <span className="text-xs sm:text-sm font-semibold text-[#2A2C2E] bg-[#F1F2F3] px-2.5 py-1 rounded-[4px] border border-[#B4B8BC]/40 tabular-nums whitespace-nowrap shrink-0">
                              {service.price}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed mb-4">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#F1F2F3] mt-auto">
                          {service.duration ? (
                            <div className="flex items-center gap-1.5 text-xs text-[#6A6E72] tabular-nums">
                              <Clock className="w-3.5 h-3.5 text-[#8E9296] shrink-0" />
                              <span>{service.duration}</span>
                            </div>
                          ) : (
                            <span className="text-xs text-[#8E9296]">Personalizado</span>
                          )}

                          <button
                            onClick={() => handleBookService(service)}
                            className="btn-mirror-secondary text-xs px-4 py-2 min-h-[40px] hover:bg-mirror hover:text-[#2A2C2E] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                          >
                            <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{services.bookButton}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Mobile Category Switcher Footer (so mobile users after scrolling down can switch categories without scrolling back up) */}
        <div className="sm:hidden mb-8 p-3.5 rounded-xl bg-white/90 border border-[#B4B8BC]/50">
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#6A6E72] text-center mb-2.5">
            {currentLang === 'pt'
              ? 'Explorar outra categoria:'
              : currentLang === 'en'
              ? 'Explore another category:'
              : 'Explorar otra categoría:'}
          </span>
          <div className="flex flex-wrap justify-center gap-1.5">
            {tabKeys.map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    const el = document.getElementById('servicos');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-mirror text-[#2A2C2E] font-bold shadow-2xs border border-[#8E9296]/50'
                      : 'bg-[#F1F2F3] text-[#2A2C2E]'
                  }`}
                >
                  {services.categories[key]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsible Disclaimer Note */}
        <p className="text-center text-xs text-[#6A6E72] max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed italic px-2">
          {services.disclaimer}
        </p>

        {/* Section Main CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => onBookClick()}
            className="btn-mirror-primary text-xs sm:text-base px-6 sm:px-8 py-3.5 min-h-[48px] shadow-md w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>{services.sectionCta} (WhatsApp)</span>
          </button>

          <a
            href={siteConfig.squareBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mirror-secondary text-xs sm:text-base px-6 sm:px-7 py-3.5 min-h-[48px] w-full sm:w-auto flex items-center justify-center gap-2 border-[#8E9296] text-[#2A2C2E] hover:bg-white shadow-xs cursor-pointer whitespace-nowrap"
          >
            <span>Agendamento Online (Square)</span>
            <ExternalLink className="w-4 h-4 text-[#6A6E72] shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
