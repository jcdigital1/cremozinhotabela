import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/siteConfig';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-14 overflow-hidden overflow-x-clip bg-[#040406] w-full max-w-full">
      {/* CINEMATOGRAPHIC MOTION BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Floating Glowing Ambient Orbs (Motion Effect) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-b from-[#FF163C]/30 via-[#8E001A]/20 to-transparent blur-[130px] rounded-full animate-float-orb" />
        <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-[#FF163C]/15 blur-[100px] rounded-full animate-float-orb delay-1000" />
        <div className="absolute bottom-10 -right-20 w-[350px] h-[350px] bg-[#8E001A]/20 blur-[100px] rounded-full animate-float-orb delay-700" />

        {/* Animated Diagonal Motion Laser Sweeps */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute -inset-[100%] w-[300%] h-[300%] pointer-events-none">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF163C] to-transparent shadow-[0_0_20px_#FF163C] animate-motion-laser" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_#ffffff] animate-motion-laser delay-1000 mt-40" />
          </div>
        </div>

        {/* 3D Overhead Studio Neon Tubes (Illuminated light bars with pulse) */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-4/5 max-w-3xl h-[2px] bg-gradient-to-r from-transparent via-[#FF163C] to-transparent shadow-[0_0_20px_#FF163C] animate-glow-line" />
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-3/5 max-w-xl h-[1px] bg-white/40 blur-[1px]" />

        {/* Dynamic Studio Perspective Floor Speed Lines */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-72 opacity-25 pointer-events-none stroke-[#FF163C]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 288"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="288" x2="680" y2="20" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="1440" y1="288" x2="760" y2="20" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="250" y1="288" x2="700" y2="20" strokeWidth="1.2" />
          <line x1="1190" y1="288" x2="740" y2="20" strokeWidth="1.2" />
          <line x1="480" y1="288" x2="715" y2="20" strokeWidth="1.5" />
          <line x1="960" y1="288" x2="725" y2="20" strokeWidth="1.5" />
        </svg>

        {/* Soft dark vignette bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040406] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* LOGO: Clean, large floating PNG with volumetric red glow and ZERO borders or boxes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 flex items-center justify-center"
        >
          {/* Intense red glow aura behind the transparent PNG logo */}
          <div className="absolute inset-0 w-full h-full bg-[#FF163C]/35 blur-3xl rounded-full scale-110 pointer-events-none animate-pulse" />

          {/* Large Floating PNG Logo */}
          <img
            src={COMPANY_CONFIG.logoUrl}
            alt="Estética Automotiva do Cremozinho"
            className="w-72 sm:w-96 md:w-[480px] lg:w-[540px] max-w-[90vw] h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_45px_rgba(255,22,60,0.5)] transition-transform duration-700 hover:scale-[1.02]"
            loading="eager"
          />
        </motion.div>

        {/* Official Brand Name in bold, modern metallic typography */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-tight mb-3 text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
        >
          {COMPANY_CONFIG.name}
        </motion.h1>

        {/* Tagline: Direct and punchy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-zinc-300 font-light tracking-wide max-w-xl mb-8 text-balance"
        >
          {COMPANY_CONFIG.tagline}
        </motion.p>

        {/* Direct Action Buttons - Direct to the point, zero fluff */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-[#8E001A] via-[#FF163C] to-[#8E001A] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-[0_12px_35px_rgba(255,22,60,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_18px_45px_rgba(255,22,60,0.7)] transition-all duration-300 cursor-pointer active:scale-95 overflow-hidden"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2.5">
              <span>Explorar Serviços</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>

          <a
            href="#localizacao"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#121218] hover:bg-[#1a1a24] border border-white/10 hover:border-[#FF163C]/50 text-zinc-300 hover:text-white text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#FF163C]" />
            <span>Ribeirão Cascalheira — MT</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
