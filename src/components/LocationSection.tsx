import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/siteConfig';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="relative py-20 sm:py-28 scroll-mt-24 bg-[#040406]">
      {/* 3D Volumetric Red Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-t from-[#8E001A]/20 via-[#FF163C]/10 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF163C]/10 border border-[#FF163C]/30 shadow-[0_0_15px_rgba(255,22,60,0.2)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF163C] shadow-[0_0_8px_#FF163C] animate-ping" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#FF163C]">
              Estúdio de Estética Automotiva
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Seu veículo em boas mãos.
          </h2>
        </motion.div>

        {/* 3D Holographic Location Command Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#161622] via-[#0f0f16] to-[#0a0a0f] border border-white/15 p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(255,22,60,0.15)] overflow-hidden group"
        >
          {/* Top illuminated red light tube */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF163C] to-transparent shadow-[0_0_20px_#FF163C]" />

          {/* Glowing 3D Map Pin Beacon */}
          <div className="relative mb-6 flex justify-center">
            {/* Glowing rings */}
            <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-[#FF163C]/20 blur-xl animate-pulse" />
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl icon-badge-3d-primary flex items-center justify-center text-white shadow-[0_10px_30px_rgba(255,22,60,0.6)] transform group-hover:scale-110 transition-transform duration-500">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] animate-bounce duration-1000" />
            </div>
          </div>

          {/* Prominent Address Text */}
          <div className="space-y-2 mb-8">
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wide drop-shadow-md">
              {COMPANY_CONFIG.address.street}
            </p>
            <p className="text-lg sm:text-xl text-zinc-300 font-medium">
              {COMPANY_CONFIG.address.neighborhood}
            </p>
            <p className="text-base sm:text-lg text-[#FF163C] font-extrabold tracking-wider uppercase glow-red-neon">
              {COMPANY_CONFIG.address.cityState}
            </p>
          </div>

          {/* 3D Action Button "Como chegar" */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY_CONFIG.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#8E001A] via-[#FF163C] to-[#8E001A] hover:brightness-110 text-white font-extrabold text-base rounded-2xl shadow-[0_12px_35px_rgba(255,22,60,0.4),inset_0_1px_2px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 group/btn"
            >
              <Navigation className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
              <span>Como Chegar no Google Maps</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>

          {/* Trust Marker */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-center gap-2.5 text-xs text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-[#FF163C]" />
            <span>Atendimento técnico especializado em veículos de passeio, motos e caminhonetes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
