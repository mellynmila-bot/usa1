import React from 'react';
import { siteConfig } from '../data/siteData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-[#F1F2F3] relative pt-10 pb-20 sm:pt-12 sm:pb-14 text-center">
      {/* Top Mirror Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-mirror" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Brand Wordmark */}
        <div className="mb-3">
          <span className="font-serif-title text-base sm:text-lg tracking-[0.2em] uppercase text-[#2A2C2E] font-medium">
            NAIELLY SILVA
          </span>
          <span className="block text-[10px] tracking-[0.25em] uppercase text-[#6A6E72] mt-0.5">
            Beauty Center · Springfield, MA
          </span>
        </div>

        {/* Address */}
        <p className="text-xs text-[#5F6368] mb-4 max-w-md leading-relaxed">
          {siteConfig.address}
        </p>

        {/* Legal Links */}
        <div className="flex items-center gap-3 text-xs text-[#5F6368] mb-4">
          <button
            onClick={onOpenPrivacy}
            className="hover:text-[#2A2C2E] hover:underline transition-colors focus:outline-none focus:ring-1 focus:ring-[#8E9296] px-2 py-1.5 min-h-[36px] cursor-pointer"
          >
            Privacy Policy
          </button>
          <span aria-hidden="true" className="text-[#B4B8BC]">·</span>
          <button
            onClick={onOpenTerms}
            className="hover:text-[#2A2C2E] hover:underline transition-colors focus:outline-none focus:ring-1 focus:ring-[#8E9296] px-2 py-1.5 min-h-[36px] cursor-pointer"
          >
            Terms of Service
          </button>
        </div>

        {/* Optional License line */}
        {siteConfig.licenses && (
          <p className="text-[11px] text-[#6A6E72] mb-2">
            License No. {siteConfig.licenses}
          </p>
        )}

        {/* Copyright */}
        <p className="text-xs text-[#5F6368]">
          © {new Date().getFullYear()} Naielly Silva. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
