import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, ShieldCheck, Droplets, Sun, Armchair, Gauge } from 'lucide-react';
import { ADDITIONAL_GROUPS } from '../config/siteConfig';
import { ServiceCard } from './ServiceCard';

export const AdditionalServicesSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const groupIcons: Record<string, React.ElementType> = {
    interior: Layers,
    'motor-chassi': Gauge,
    vidros: Droplets,
    'pintura-protecao': ShieldCheck,
    polimentos: Sun,
    residencial: Armchair,
  };

  const filteredGroups =
    selectedGroup === 'all'
      ? ADDITIONAL_GROUPS
      : ADDITIONAL_GROUPS.filter((g) => g.id === selectedGroup);

  return (
    <section id="adicionais" className="relative py-10 sm:py-14 scroll-mt-24 w-full max-w-full">
      {/* 3D Luminous Separator */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
        <div className="relative flex items-center justify-center">
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF163C]/40 to-transparent" />
          <div className="absolute w-28 h-[2.5px] bg-gradient-to-r from-[#FF163C] via-white to-[#FF163C] shadow-[0_0_15px_#FF163C] rounded-full animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Direct Visual Banner (No "categoria tal disponível" clutter) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.85)] group"
        >
          <div className="relative h-36 sm:h-52 md:h-60 w-full overflow-hidden">
            <img
              src="/src/assets/images/detailing_macro_polish_1794261704092.jpg"
              alt="Detalhamento Técnico Automotivo"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 filter brightness-90 contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-[#040406]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040406] via-transparent to-[#040406]/60" />
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF163C] to-transparent shadow-[0_0_15px_#FF163C]" />
          </div>

          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col justify-end">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]">
              Serviços Adicionais
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl font-light">
              Interior, motor, vidros, descontaminação, polimentos e higienização residencial.
            </p>
          </div>
        </motion.div>

        {/* Category Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          <button
            onClick={() => setSelectedGroup('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
              selectedGroup === 'all'
                ? 'bg-gradient-to-r from-[#8E001A] to-[#FF163C] text-white shadow-[0_4px_16px_rgba(255,22,60,0.4)] border border-white/20'
                : 'bg-[#121218] text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10'
            }`}
          >
            Todos os 18 Serviços
          </button>
          {ADDITIONAL_GROUPS.map((grp) => {
            const Icon = groupIcons[grp.id] || Sparkles;
            const isSelected = selectedGroup === grp.id;
            return (
              <button
                key={grp.id}
                onClick={() => setSelectedGroup(grp.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#8E001A] to-[#FF163C] text-white shadow-[0_4px_16px_rgba(255,22,60,0.4)] border border-white/20'
                    : 'bg-[#121218] text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#FF163C]'}`} />
                <span>{grp.title}</span>
                <span className="text-[10px] text-zinc-400 font-mono">({grp.services.length})</span>
              </button>
            );
          })}
        </div>

        {/* Groups and Cards */}
        <div className="space-y-8">
          {filteredGroups.map((group) => {
            const Icon = groupIcons[group.id] || Sparkles;
            return (
              <div key={group.id} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                  <div className="w-7 h-7 rounded-lg icon-alto-relevo-3d flex items-center justify-center text-[#FF163C]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white uppercase tracking-wide">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
                  {group.services.map((service, idx) => (
                    <ServiceCard key={service.id} service={service} index={idx} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
