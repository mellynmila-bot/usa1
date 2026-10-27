import React, { useState, useMemo } from 'react';
import {
  Clock,
  Calendar,
  Eye,
  Sparkles,
  Camera,
  Heart,
  Copy,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { Language, BookingNotice, ServiceItem } from '../types';
import { translations, siteConfig } from '../data/siteData';
import { openWhatsAppWithContext } from '../utils/whatsapp';

interface BookingSectionProps {
  currentLang: Language;
  onShowToast: (message: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  currentLang,
  onShowToast
}) => {
  const t = translations[currentLang];
  const booking = t.booking;
  const services = t.services;

  // Form State
  const [clientName, setClientName] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [isFirstTime, setIsFirstTime] = useState<'yes' | 'no'>('yes');
  const [hasReferencePhoto, setHasReferencePhoto] = useState<'yes' | 'no'>('yes');
  const [notes, setNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const getNoticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="w-4 h-4 text-[#6A6E72]" />;
      case 'calendar':
        return <Calendar className="w-4 h-4 text-[#6A6E72]" />;
      case 'eye':
        return <Eye className="w-4 h-4 text-[#6A6E72]" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#6A6E72]" />;
      case 'camera':
        return <Camera className="w-4 h-4 text-[#6A6E72]" />;
      case 'heart':
        return <Heart className="w-4 h-4 text-[#6A6E72]" />;
      default:
        return <AlertCircle className="w-4 h-4 text-[#6A6E72]" />;
    }
  };

  // Build real-time formatted WhatsApp message
  const generatedMessage = useMemo(() => {
    const greeting =
      currentLang === 'pt'
        ? 'Olá, Naielly! 💛 Gostaria de agendar um horário.'
        : currentLang === 'en'
        ? 'Hello Naielly! 💛 I would like to schedule an appointment.'
        : '¡Hola, Naielly! 💛 Me gustaría reservar una cita.';

    const nameLine = clientName.trim()
      ? `${currentLang === 'pt' ? 'Nome' : currentLang === 'en' ? 'Name' : 'Nombre'}: ${clientName.trim()}`
      : `${currentLang === 'pt' ? 'Nome' : currentLang === 'en' ? 'Name' : 'Nombre'}: (a informar)`;

    const serviceLine = selectedService
      ? `${currentLang === 'pt' ? 'Serviço' : currentLang === 'en' ? 'Service' : 'Servicio'}: ${selectedService}`
      : `${currentLang === 'pt' ? 'Serviço' : currentLang === 'en' ? 'Service' : 'Servicio'}: (a definir)`;

    const dateStr = preferredDate || (currentLang === 'pt' ? 'A combinar' : currentLang === 'en' ? 'To be agreed' : 'Por coordinar');
    const timeStr = preferredTime.trim() || (currentLang === 'pt' ? 'Horário flexível' : currentLang === 'en' ? 'Flexible time' : 'Horario flexible');
    const dateTimeLine = `${currentLang === 'pt' ? 'Dia e horário' : currentLang === 'en' ? 'Date & time' : 'Día y horario'}: ${dateStr} · ${timeStr}`;

    const firstTimeText =
      isFirstTime === 'yes'
        ? currentLang === 'pt'
          ? 'Sim (primeira vez)'
          : currentLang === 'en'
          ? 'Yes (first time)'
          : 'Sí (primera vez)'
        : currentLang === 'pt'
        ? 'Não (já sou cliente)'
        : currentLang === 'en'
        ? 'No (returning client)'
        : 'No (ya soy clienta)';
    const firstTimeLine = `${currentLang === 'pt' ? 'Primeira vez' : currentLang === 'en' ? 'First time' : 'Primera vez'}: ${firstTimeText}`;

    const photoText =
      hasReferencePhoto === 'yes'
        ? currentLang === 'pt'
          ? 'Sim, vou enviar foto de referência na conversa'
          : currentLang === 'en'
          ? 'Yes, sending reference photo in chat'
          : 'Sí, enviaré foto de referencia en el chat'
        : currentLang === 'pt'
        ? 'Não tenho foto'
        : currentLang === 'en'
        ? 'No reference photo'
        : 'No tengo foto';
    const photoLine = `${currentLang === 'pt' ? 'Foto de referência' : currentLang === 'en' ? 'Reference photo' : 'Foto de referencia'}: ${photoText}`;

    let obsLine = '';
    if (notes.trim()) {
      obsLine = `\n${currentLang === 'pt' ? 'Observações' : currentLang === 'en' ? 'Notes' : 'Observaciones'}: ${notes.trim()}`;
    }

    return `${greeting}\n\n${nameLine}\n${serviceLine}\n${dateTimeLine}\n${firstTimeLine}\n${photoLine}${obsLine}`;
  }, [clientName, selectedService, preferredDate, preferredTime, isFirstTime, hasReferencePhoto, notes, currentLang]);

  const handleCopyOnly = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = generatedMessage;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setIsCopied(true);
    onShowToast(booking.copiedToast);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    openWhatsAppWithContext({
      message: generatedMessage,
      onSuccessToast: onShowToast,
      lang: currentLang
    });
  };

  return (
    <section id="agendamento" className="py-16 sm:py-20 md:py-28 bg-[#F1F2F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
              Agendamento Inteligente · WhatsApp
            </span>
            <span className="w-6 sm:w-8 h-px bg-[#B4B8BC]" />
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-3 sm:mb-4">
            {booking.title}
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            {booking.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Left (Educational Guidelines), Right (Booking Form & Live Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Educational Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
            <div className="p-4 bg-white/80 rounded-[6px] border border-[#B4B8BC]/40">
              <h3 className="font-serif-title text-base sm:text-lg text-[#2A2C2E] font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#6A6E72] shrink-0" />
                <span>{booking.guidelinesTitle}</span>
              </h3>
            </div>

            <div className="space-y-3">
              {booking.notices.map((notice: BookingNotice) => (
                <div
                  key={notice.id}
                  className="mirror-card p-4 bg-white flex items-start gap-3.5 hover:border-[#8E9296] transition-all"
                >
                  <div className="p-2 rounded-[6px] bg-[#F1F2F3] border border-[#B4B8BC]/30 shrink-0 mt-0.5">
                    {getNoticeIcon(notice.iconName)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#2A2C2E] mb-1">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-[#5F6368] leading-relaxed">
                      {notice.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mini Form + Live Preview Box */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-[8px] border border-[#B4B8BC]/60 shadow-sm">
            <h3 className="font-serif-title text-lg sm:text-xl text-[#2A2C2E] mb-5 sm:mb-6 pb-3 border-b border-[#F1F2F3]">
              {booking.formTitle}
            </h3>

            <div className="space-y-4">
              {/* Field 1: Name (text-base on mobile prevents iOS Safari zoom) */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#6A6E72] mb-1.5"
                >
                  {booking.nameLabel}
                </label>
                <input
                  id="booking-name"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder={booking.namePlaceholder}
                  className="w-full px-4 py-2.5 min-h-[44px] rounded-[6px] border border-[#B4B8BC]/70 bg-[#F1F2F3]/30 text-base sm:text-sm text-[#2A2C2E] focus:outline-none focus:ring-2 focus:ring-[#8E9296] focus:bg-white transition-all"
                />
              </div>

              {/* Field 2: Service Selection */}
              <div>
                <label
                  htmlFor="booking-service"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#6A6E72] mb-1.5"
                >
                  {booking.serviceLabel}
                </label>
                <select
                  id="booking-service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 min-h-[44px] rounded-[6px] border border-[#B4B8BC]/70 bg-[#F1F2F3]/30 text-base sm:text-sm text-[#2A2C2E] focus:outline-none focus:ring-2 focus:ring-[#8E9296] focus:bg-white transition-all"
                >
                  <option value="">{booking.serviceSelectPlaceholder}</option>
                  <optgroup label="Cílios / Lashes">
                    {services.items
                      .filter((s: ServiceItem) => s.group === 'cilios')
                      .map((s: ServiceItem) => (
                        <option key={s.id} value={`${s.name} (${s.price})`}>
                          {s.name} — {s.price}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Sobrancelhas / Brows">
                    {services.items
                      .filter((s: ServiceItem) => s.group === 'sobrancelhas')
                      .map((s: ServiceItem) => (
                        <option key={s.id} value={`${s.name} (${s.price})`}>
                          {s.name} — {s.price}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Maquiagem e Noivas / Makeup & Bridal">
                    {services.items
                      .filter((s: ServiceItem) => s.group === 'maquiagem')
                      .map((s: ServiceItem) => (
                        <option key={s.id} value={`${s.name} (${s.price})`}>
                          {s.name} — {s.price}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Pele e Lábios / Skin & Lips">
                    {services.items
                      .filter((s: ServiceItem) => s.group === 'pele')
                      .map((s: ServiceItem) => (
                        <option key={s.id} value={`${s.name} (${s.price})`}>
                          {s.name} — {s.price}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Epilação / Waxing">
                    {services.items
                      .filter((s: ServiceItem) => s.group === 'epilacao')
                      .map((s: ServiceItem) => (
                        <option key={s.id} value={`${s.name} (${s.price})`}>
                          {s.name} — {s.price}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Especial / Outros">
                    <option value={booking.customOptions.vipCourse}>
                      {booking.customOptions.vipCourse}
                    </option>
                    <option value={booking.customOptions.bridal}>
                      {booking.customOptions.bridal}
                    </option>
                    <option value={booking.customOptions.undecided}>
                      {booking.customOptions.undecided}
                    </option>
                  </optgroup>
                </select>
              </div>

              {/* Field 3: Date & Time in 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6A6E72] mb-1.5"
                  >
                    {booking.dateLabel}
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2.5 min-h-[44px] rounded-[6px] border border-[#B4B8BC]/70 bg-[#F1F2F3]/30 text-base sm:text-sm text-[#2A2C2E] focus:outline-none focus:ring-2 focus:ring-[#8E9296] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6A6E72] mb-1.5"
                  >
                    {booking.timeLabel}
                  </label>
                  <input
                    id="booking-time"
                    type="text"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    placeholder={booking.timePlaceholder}
                    className="w-full px-4 py-2.5 min-h-[44px] rounded-[6px] border border-[#B4B8BC]/70 bg-[#F1F2F3]/30 text-base sm:text-sm text-[#2A2C2E] focus:outline-none focus:ring-2 focus:ring-[#8E9296] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Field 4: First Time & Reference Photo (Touch-friendly radio options) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#6A6E72] mb-1.5">
                    {booking.firstTimeLabel}
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="flex items-center gap-2 text-xs sm:text-sm text-[#2A2C2E] py-1.5 px-2.5 rounded border border-[#B4B8BC]/50 bg-[#F1F2F3]/40 cursor-pointer">
                      <input
                        type="radio"
                        name="first-time"
                        checked={isFirstTime === 'yes'}
                        onChange={() => setIsFirstTime('yes')}
                        className="text-[#2A2C2E] focus:ring-[#8E9296]"
                      />
                      <span>{booking.firstTimeYes}</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs sm:text-sm text-[#2A2C2E] py-1.5 px-2.5 rounded border border-[#B4B8BC]/50 bg-[#F1F2F3]/40 cursor-pointer">
                      <input
                        type="radio"
                        name="first-time"
                        checked={isFirstTime === 'no'}
                        onChange={() => setIsFirstTime('no')}
                        className="text-[#2A2C2E] focus:ring-[#8E9296]"
                      />
                      <span>{booking.firstTimeNo}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#6A6E72] mb-1.5">
                    {booking.referenceLabel}
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="flex items-center gap-2 text-xs sm:text-sm text-[#2A2C2E] py-1.5 px-2.5 rounded border border-[#B4B8BC]/50 bg-[#F1F2F3]/40 cursor-pointer">
                      <input
                        type="radio"
                        name="reference-photo"
                        checked={hasReferencePhoto === 'yes'}
                        onChange={() => setHasReferencePhoto('yes')}
                        className="text-[#2A2C2E] focus:ring-[#8E9296]"
                      />
                      <span>{booking.referenceYes}</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs sm:text-sm text-[#2A2C2E] py-1.5 px-2.5 rounded border border-[#B4B8BC]/50 bg-[#F1F2F3]/40 cursor-pointer">
                      <input
                        type="radio"
                        name="reference-photo"
                        checked={hasReferencePhoto === 'no'}
                        onChange={() => setHasReferencePhoto('no')}
                        className="text-[#2A2C2E] focus:ring-[#8E9296]"
                      />
                      <span>{booking.referenceNo}</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Field 5: Notes */}
              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#6A6E72] mb-1.5"
                >
                  {booking.notesLabel}
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={booking.notesPlaceholder}
                  className="w-full px-4 py-2.5 rounded-[6px] border border-[#B4B8BC]/70 bg-[#F1F2F3]/30 text-base sm:text-sm text-[#2A2C2E] focus:outline-none focus:ring-2 focus:ring-[#8E9296] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Real-time Formatted Message Preview Box */}
              <div className="mt-6 pt-4 border-t border-[#F1F2F3]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6A6E72] flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#8E9296] shrink-0" />
                    <span>{booking.previewTitle}</span>
                  </span>
                  <span className="text-[11px] text-[#8E9296]">Tempo real</span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-[6px] bg-[#F1F2F3] border border-[#B4B8BC]/60 font-mono text-xs text-[#2A2C2E] whitespace-pre-wrap break-words leading-relaxed shadow-inner">
                  {generatedMessage}
                </div>

                <p className="text-[11px] text-[#6A6E72] mt-2 italic">
                  {booking.helpText}
                </p>

                {/* Form Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-5">
                  <button
                    onClick={handleCopyOnly}
                    className="btn-mirror-secondary w-full sm:w-1/2 py-3 min-h-[48px] text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 shrink-0" />
                        <span>{booking.copyButton}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleOpenWhatsApp}
                    className="btn-mirror-primary w-full sm:w-1/2 py-3 min-h-[48px] text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>{booking.openButton}</span>
                  </button>
                </div>

                {/* Alternative Direct Online Booking Option (Square) */}
                <div className="mt-5 p-4 rounded-[6px] bg-[#F1F2F3]/70 border border-[#B4B8BC]/50 flex flex-col sm:flex-row items-center justify-between gap-3.5">
                  <div className="text-center sm:text-left">
                    <span className="text-xs font-bold text-[#2A2C2E] block">
                      Prefere agendamento online imediato?
                    </span>
                    <span className="text-[11px] text-[#5F6368]">
                      Consulte horários vagos e agende com confirmação automática no Square.
                    </span>
                  </div>

                  <a
                    href={siteConfig.squareBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mirror-secondary text-xs sm:text-sm px-4 py-2.5 min-h-[44px] shrink-0 w-full sm:w-auto flex items-center justify-center gap-1.5 text-[#2A2C2E] border-[#8E9296] hover:bg-white cursor-pointer font-medium whitespace-nowrap"
                  >
                    <span>Agendar pelo Square</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#6A6E72] shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
