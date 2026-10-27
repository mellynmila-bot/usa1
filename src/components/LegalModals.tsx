import React, { useEffect, useRef } from 'react';
import { X, Shield } from 'lucide-react';
import { legalTextsEn } from '../data/siteData';

interface LegalModalsProps {
  activeModal: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const content =
    activeModal === 'privacy'
      ? legalTextsEn.privacyPolicy
      : legalTextsEn.termsOfService;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85dvh] bg-white rounded-[8px] border border-[#B4B8BC] shadow-2xl flex flex-col overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#E6E8EA] bg-[#F1F2F3]/70">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#6A6E72] shrink-0" />
            <div>
              <h2
                id="legal-modal-title"
                className="font-serif-title text-lg sm:text-xl text-[#2A2C2E] font-medium"
              >
                {content.title}
              </h2>
              <span className="text-[11px] text-[#6A6E72]">
                Last updated: {content.lastUpdated}
              </span>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close dialog"
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full hover:bg-white text-[#2A2C2E] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8E9296]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-4 sm:px-6 py-5 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#5F6368] leading-relaxed">
          {content.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#2A2C2E]">
                {section.heading}
              </h3>
              <p>{section.body}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-[#E6E8EA] bg-[#F1F2F3]/40 flex justify-end">
          <button
            onClick={onClose}
            className="btn-mirror-secondary text-xs px-5 py-2.5 min-h-[40px] font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
