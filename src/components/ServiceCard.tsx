import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  Droplets, 
  Layers, 
  Wrench, 
  Sun, 
  Flame, 
  Car, 
  Bike, 
  Truck, 
  Armchair, 
  Bed, 
  Wind, 
  ShieldCheck,
  Zap,
  Lightbulb
} from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_CONFIG } from '../config/siteConfig';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasWhatsApp = Boolean(COMPANY_CONFIG.whatsappNumber && COMPANY_CONFIG.whatsappNumber.trim() !== '');

  const handleConsultClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasWhatsApp) return;

    const message = encodeURIComponent(
      `Olá! Gostaria de consultar o serviço "${service.name}" (${service.price}) na Estética Automotiva do Cremozinho.`
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${message}`, '_blank');
  };

  // Thematic 3D icon and associated emoji based on the exact service
  const getServiceVisuals = () => {
    const n = service.name.toLowerCase();
    if (n.includes('vitrificação')) {
      return { icon: ShieldCheck, emoji: '💎', label: 'Proteção Cerâmica' };
    }
    if (n.includes('carnaúba')) {
      return { icon: Sparkles, emoji: '🌟', label: 'Carnaúba Pura' };
    }
    if (n.includes('polimento de farol') || n.includes('farol')) {
      return { icon: Lightbulb, emoji: '💡', label: 'Restauração' };
    }
    if (n.includes('polimento')) {
      return { icon: Sun, emoji: '✨', label: 'Polimento Técnico' };
    }
    if (n.includes('motor')) {
      return { icon: Flame, emoji: '🔥', label: 'Motor & Verniz' };
    }
    if (n.includes('chassi')) {
      return { icon: Wrench, emoji: '🛞', label: 'Chassi' };
    }
    if (n.includes('chuva ácida') || n.includes('para-brisa') || n.includes('vidro')) {
      return { icon: Droplets, emoji: '🌧️', label: 'Vidros' };
    }
    if (n.includes('sofá')) {
      return { icon: Armchair, emoji: '🛋️', label: 'Residencial' };
    }
    if (n.includes('colchão')) {
      return { icon: Bed, emoji: '🛏️', label: 'Residencial' };
    }
    if (n.includes('filtro') || n.includes('ar-condicionado')) {
      return { icon: Wind, emoji: '💨', label: 'Ar Limpo' };
    }
    if (n.includes('couro')) {
      return { icon: Layers, emoji: '🧴', label: 'Couro & Hidratação' };
    }
    if (n.includes('banco') || n.includes('carpete') || n.includes('teto')) {
      return { icon: Layers, emoji: '🧽', label: 'Higienização' };
    }
    if (n.includes('moto')) {
      return { icon: Bike, emoji: '🏍️', label: 'Motos' };
    }
    if (n.includes('picape') || n.includes('camionete') || n.includes('suv')) {
      return { icon: Truck, emoji: '🛻', label: 'Porte Médio/Grande' };
    }
    return { icon: Car, emoji: '🚗', label: 'Lavagem Especial' };
  };

  const { icon: ServiceIcon, emoji } = getServiceVisuals();

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="card-alto-relevo-3d p-3.5 sm:p-5 cursor-pointer select-none w-full max-w-full overflow-hidden active:scale-[0.99] transition-all"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        {/* Left: 3D High-Relief Icon + Emojis + Title (No overlapping badges) */}
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
          {/* 3D Alto Relevo Embossed Badge */}
          <div className="icon-alto-relevo-3d w-11 h-11 sm:w-13 sm:h-13 shrink-0">
            <span className="text-base sm:text-lg select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {emoji}
            </span>
          </div>

          {/* Service Title */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-display font-bold text-sm sm:text-base text-[#F7F7FA] group-hover:text-white leading-snug break-words">
                {service.name}
              </h3>
            </div>

            {/* Evaluation note if applicable */}
            {service.isEvaluation && service.evaluationNote && (
              <p className="text-[11px] sm:text-xs text-amber-400 font-medium mt-0.5">
                ({service.evaluationNote})
              </p>
            )}
          </div>
        </div>

        {/* Right: High-Visibility Neon Red Price */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t border-white/5 sm:border-t-0 pl-14 sm:pl-0">
          <div className="text-left sm:text-right">
            <span className="block font-display font-black text-lg sm:text-xl md:text-2xl text-[#FF163C] tracking-tight glow-red-neon tabular-nums whitespace-nowrap">
              {service.price}
            </span>
          </div>

          <div
            className={`w-7 h-7 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 transition-transform duration-200 shrink-0 ${
              isExpanded ? 'rotate-180 bg-[#FF163C] text-white' : ''
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Expandable details container */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-3.5 mt-3 border-t border-white/10 text-xs text-zinc-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Categoria:</span>
                <span className="font-bold text-white">{service.category}</span>
              </div>

              {service.subgroup && (
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Grupo:</span>
                  <span className="font-bold text-white">{service.subgroup}</span>
                </div>
              )}

              {service.evaluationNote && (
                <div className="flex items-start justify-between gap-2 text-amber-300 bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-xl">
                  <span className="text-[11px] font-semibold">Condição de Avaliação:</span>
                  <span className="font-bold text-[11px] text-right">{service.evaluationNote}</span>
                </div>
              )}

              {hasWhatsApp ? (
                <div className="pt-2">
                  <button
                    onClick={handleConsultClick}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-[#8E001A] via-[#FF163C] to-[#8E001A] hover:brightness-110 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Consultar serviço no WhatsApp</span>
                  </button>
                </div>
              ) : (
                <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 bg-black/40 p-2 rounded-xl border border-white/5">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF163C]" />
                    <span>Estética Automotiva do Cremozinho</span>
                  </span>
                  <span className="text-[#FF163C] font-bold">Ribeirão Cascalheira — MT</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
