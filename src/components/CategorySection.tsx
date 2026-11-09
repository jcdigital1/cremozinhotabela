import React from 'react';
import { motion } from 'motion/react';
import { ServiceCategory } from '../types';
import { ServiceCard } from './ServiceCard';

interface CategorySectionProps {
  category: ServiceCategory;
  index: number;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <section id={category.anchor} className="relative py-10 sm:py-14 scroll-mt-24 w-full max-w-full">
      {/* 3D Luminous Laser Separator */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
        <div className="relative flex items-center justify-center">
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF163C]/40 to-transparent" />
          <div className="absolute w-28 h-[2.5px] bg-gradient-to-r from-[#FF163C] via-white to-[#FF163C] shadow-[0_0_15px_#FF163C] rounded-full animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Direct, impactful category banner (no "categoria tal disponível" clutter) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.85)] group"
        >
          {/* Background studio image with high contrast */}
          <div className="relative h-36 sm:h-52 md:h-60 w-full overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 filter brightness-90 contrast-110"
              loading="lazy"
            />
            {/* Dramatic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-[#040406]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040406] via-transparent to-[#040406]/60" />

            {/* Glowing red accent light tube on bottom */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF163C] to-transparent shadow-[0_0_15px_#FF163C]" />
          </div>

          {/* Foreground Title - Direct and bold */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col justify-end">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]">
              {category.name}
            </h2>

            {category.subtitle && (
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl font-light">
                {category.subtitle}
              </p>
            )}
          </div>
        </motion.div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
          {category.services.map((service, sIdx) => (
            <ServiceCard key={service.id} service={service} index={sIdx} />
          ))}
        </div>
      </div>
    </section>
  );
};
