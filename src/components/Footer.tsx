import React from 'react';
import { COMPANY_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020204] border-t border-white/10 pt-20 pb-24 overflow-hidden">
      {/* Background soft red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#8E001A]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Large Floating Official Logo without borders or box */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-[#FF163C]/20 blur-2xl rounded-full scale-125 pointer-events-none" />
          <img
            src={COMPANY_CONFIG.logoUrl}
            alt="Estética Automotiva do Cremozinho"
            className="w-48 sm:w-60 md:w-68 h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] relative"
            loading="lazy"
          />
        </div>

        {/* Company Name */}
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight uppercase mb-1 drop-shadow-md">
          {COMPANY_CONFIG.name}
        </h3>

        {/* City & State */}
        <p className="text-sm sm:text-base text-zinc-300 font-semibold mb-4">
          {COMPANY_CONFIG.cityState}
        </p>

        {/* Short message: "Cuidado em cada detalhe." */}
        <p className="text-xs sm:text-sm text-[#FF163C] font-extrabold tracking-widest uppercase mb-8 glow-red-subtle">
          "{COMPANY_CONFIG.footerQuote}"
        </p>

        {/* Subtle illuminated separator */}
        <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF163C] to-transparent mb-6 shadow-[0_0_8px_#FF163C]" />

        <p className="text-xs text-zinc-500 font-medium">
          © {new Date().getFullYear()} {COMPANY_CONFIG.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
