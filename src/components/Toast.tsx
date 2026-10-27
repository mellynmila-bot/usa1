import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] sm:w-auto max-w-md flex items-center justify-between gap-3 px-4 sm:px-5 py-3 rounded-[6px] bg-[#2A2C2E] text-white text-xs sm:text-sm font-medium shadow-2xl border border-[#B4B8BC]/40 animate-fade-in"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <span className="truncate sm:whitespace-normal">{message}</span>
      </div>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="p-1.5 text-[#B4B8BC] hover:text-white transition-colors shrink-0 cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
