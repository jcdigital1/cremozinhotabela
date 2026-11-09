import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 3D Top Red Neon Laser Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-black/60 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8E001A] via-[#FF163C] to-[#FF4560] shadow-[0_0_12px_#FF163C] transition-all duration-75 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
        </div>
      </div>

      {/* Top Bar: Only the official logo (no text and no loudspeaker icon) + navigation / Como Chegar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#040406]/95 backdrop-blur-xl border-b border-white/10 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Zone 1: Official Logo only (no extra text wordmark) */}
          <a
            href="#"
            className="flex items-center shrink-0 group"
          >
            <img
              src={COMPANY_CONFIG.logoUrl}
              alt="Logo Cremozinho"
              className="h-8 sm:h-10 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(255,22,60,0.35)] transition-transform group-hover:scale-105"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-300">
            <a href="#motos" className="hover:text-[#FF163C] transition-colors whitespace-nowrap shrink-0">
              Motos
            </a>
            <a href="#carros" className="hover:text-[#FF163C] transition-colors whitespace-nowrap shrink-0">
              Carros
            </a>
            <a href="#suvs-picapes" className="hover:text-[#FF163C] transition-colors whitespace-nowrap shrink-0">
              SUVs & Picapes
            </a>
            <a href="#camionetes" className="hover:text-[#FF163C] transition-colors whitespace-nowrap shrink-0">
              Camionetes
            </a>
            <a href="#adicionais" className="hover:text-[#FF163C] transition-colors whitespace-nowrap shrink-0">
              Adicionais
            </a>
          </nav>

          {/* Zone 3: Direct Action: Como Chegar (no loudspeaker icon) */}
          <div className="flex items-center shrink-0">
            <a
              href="#localizacao"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#8E001A] to-[#FF163C] hover:brightness-110 rounded-xl transition-all shadow-[0_4px_15px_rgba(255,22,60,0.35)] whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Como Chegar</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
