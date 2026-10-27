import React from 'react';
import { Award, MessageCircle, Clock, BookOpen } from 'lucide-react';
import { Language, CourseItem } from '../types';
import { translations, siteConfig } from '../data/siteData';

interface AboutAndCourseSectionProps {
  currentLang: Language;
  onBookClick: (contextMessage?: string) => void;
}

export const AboutAndCourseSection: React.FC<AboutAndCourseSectionProps> = ({
  currentLang,
  onBookClick
}) => {
  const t = translations[currentLang];
  const about = t.about;
  const courses = t.courses;

  const handleAboutBooking = () => {
    let msg = '';
    if (currentLang === 'pt') {
      msg = 'Olá, Naielly! 💛 Li a sua história no site e me encantei com a sua trajetória como Brazilian Beauty Expert. Gostaria de agendar um horário!';
    } else if (currentLang === 'en') {
      msg = 'Hello Naielly! 💛 I read your story on the website and was inspired by your work as a Brazilian Beauty Expert. I would love to book an appointment!';
    } else {
      msg = '¡Hola, Naielly! 💛 Leí tu historia en el sitio web y me encantó tu dedicación como Brazilian Beauty Expert. ¡Me gustaría agendar una cita contigo!';
    }
    onBookClick(msg);
  };

  const handleCourseBooking = () => {
    onBookClick(courses.defaultMsg);
  };

  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-28 bg-[#F1F2F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= ABOUT BLOCK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md">
              {/* Secondary shifted decorative border */}
              <div className="absolute -inset-2 rounded-[10px] border border-[#B4B8BC]/40 transform -translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />

              <div className="mirror-frame mirror-beam relative z-10">
                <div className="mirror-frame-inner aspect-[3/4] overflow-hidden bg-white">
                  <img
                    src={siteConfig.aboutImage}
                    alt="Naielly Silva - Especialista em estética e realce natural"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Subtle caption card */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md border border-[#B4B8BC] px-4 py-1.5 rounded-[6px] shadow-md text-[11px] sm:text-xs font-semibold text-[#2A2C2E] whitespace-nowrap">
                Springfield, MA · Brazilian Expert
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#B4B8BC]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
                Trajetória & Filosofia
              </span>
            </div>

            <h2 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-2 sm:mb-3">
              {about.title}
            </h2>
            <p className="text-sm sm:text-base text-[#6A6E72] font-medium mb-5 sm:mb-6">
              {about.subtitle}
            </p>

            {/* Quote Block with Parisienne Signature */}
            <div className="w-full bg-white/90 border border-[#B4B8BC]/60 p-4 sm:p-5 rounded-[6px] mb-6 sm:mb-8 shadow-xs">
              <p className="font-serif-title italic text-sm sm:text-lg text-[#2A2C2E] leading-relaxed mb-2.5">
                {about.quote}
              </p>
              <div className="text-right">
                <span className="font-script text-xl sm:text-2xl text-[#2A2C2E]">
                  — {about.quoteAuthor}
                </span>
              </div>
            </div>

            {/* Paragraph 1: Emotional connection */}
            <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed mb-4">
              {about.p1}
            </p>

            {/* Paragraph 2: Professional Authority */}
            <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed mb-6 sm:mb-8">
              {about.p2}
            </p>

            {/* Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mb-8">
              {about.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 bg-white rounded-[6px] border border-[#B4B8BC]/45 shadow-xs flex flex-col items-start text-left"
                >
                  <span className="text-xs font-bold text-[#2A2C2E] mb-0.5 leading-snug">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-[#6A6E72] leading-tight">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Optional licenses indicator (renders only if set) */}
            {siteConfig.licenses && (
              <div className="text-xs text-[#6A6E72] mb-6">
                <span className="font-semibold">{about.licensesLabel}</span> {siteConfig.licenses}
              </div>
            )}

            {/* About WhatsApp CTA */}
            <button
              onClick={handleAboutBooking}
              className="btn-mirror-primary text-xs sm:text-base px-6 py-3.5 min-h-[48px] shadow-md w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>{about.cta}</span>
            </button>
          </div>
        </div>

        {/* Divider with central diamond */}
        <div className="mirror-divider">
          <div className="mirror-divider-line" />
          <div className="mirror-diamond" />
          <div className="mirror-divider-line" />
        </div>

        {/* ================= VIP COURSE BLOCK ================= */}
        <div className="mt-10 sm:mt-14 bg-white rounded-[8px] p-5 sm:p-8 md:p-12 border border-[#B4B8BC]/60 shadow-sm">
          {/* VIP Course Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-[#6A6E72] shrink-0" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#6A6E72]">
                {courses.eyebrow}
              </span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl text-[#2A2C2E] mb-3 sm:mb-4">
              {courses.title}
            </h3>
            <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
              {courses.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Round Photo in Silver Ring + Course Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Circular Photo with Mirror Ring */}
                <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-mirror shadow-lg mirror-beam">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={siteConfig.courseImage}
                      alt="Mentoria e Cursos VIP de Beleza com Naielly Silva"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Subtitle callout */}
                <div className="text-center sm:text-left">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6A6E72]">
                    Formação VIP & Mentoria Exclusiva
                  </span>
                  <p className="text-xs sm:text-sm text-[#2A2C2E] mt-1 font-medium leading-relaxed">
                    Aulas individuais focadas em prática real, postura profissional e acabamento impecável.
                  </p>
                </div>
              </div>

              {/* Course Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                {courses.items.map((course: CourseItem) => (
                  <div
                    key={course.id}
                    className="p-4 sm:p-5 rounded-[6px] border border-[#B4B8BC]/50 bg-[#F1F2F3]/50 hover:bg-white hover:border-[#8E9296] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#6A6E72] mb-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#8E9296] shrink-0" />
                        <span>VIP 1-on-1</span>
                      </div>
                      <h4 className="font-serif-title text-base sm:text-lg text-[#2A2C2E] font-medium mb-1.5">
                        {course.title}
                      </h4>
                      <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                        {course.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#B4B8BC]/30 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-xs text-[#6A6E72] tabular-nums">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{course.duration}</span>
                      </div>
                      <span className="text-base font-bold text-[#2A2C2E] tabular-nums">
                        {course.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Embedded Official Instagram Reel (DW7jNKtAMvW) without custom cover */}
            <div className="lg:col-span-5 flex flex-col items-center w-full">
              <div className="w-full max-w-[340px] sm:max-w-[380px] mirror-frame p-[2px] shadow-lg rounded-[8px]">
                <div className="mirror-frame-inner bg-black rounded-[6px] overflow-hidden">
                  <iframe
                    src={siteConfig.reelCourseUrl}
                    title="Vídeo demonstrativo dos Cursos VIP Naielly Silva"
                    className="w-full h-[460px] sm:h-[500px] border-0"
                    loading="lazy"
                    allowFullScreen
                    scrolling="no"
                  />
                </div>
              </div>
              <span className="text-[11px] text-[#6A6E72] mt-2 italic text-center">
                Vídeo dos bastidores e aulas VIP (@naielly_beauty)
              </span>
            </div>
          </div>

          {/* Course CTA */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <button
              onClick={handleCourseBooking}
              className="btn-mirror-primary text-xs sm:text-base px-8 py-3.5 min-h-[48px] shadow-md w-full sm:w-auto cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>{courses.cta}</span>
            </button>
          </div>
        </div>

        {/* Discreet GEO / AI Summary Block ("Em resumo / At a glance" from PRD Section 8) */}
        <div className="mt-8 p-4 sm:p-5 rounded-[6px] bg-white/70 border border-[#B4B8BC]/40 text-left">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6A6E72] mb-1.5">
            {t.atAGlance.title}
          </h4>
          <p className="text-xs text-[#5F6368] leading-relaxed">
            {t.atAGlance.content}
          </p>
        </div>
      </div>
    </section>
  );
};
