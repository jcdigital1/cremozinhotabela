import React, { useEffect, useState } from 'react';
import { Bike, Car, Truck, Sparkles, MapPin, ShieldCheck, Flame } from 'lucide-react';

interface CategoryNavProps {
  activeAnchor: string;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ activeAnchor }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Motos', href: '#motos', icon: Bike, id: 'motos', count: '7' },
    { label: 'Carros', href: '#carros', icon: Car, id: 'carros', count: '3' },
    { label: 'SUVs & Picapes', href: '#suvs-picapes', icon: Truck, id: 'suvs-picapes', count: '3' },
    { label: 'Camionetes', href: '#camionetes', icon: Flame, id: 'camionetes', count: '3' },
    { label: 'Adicionais', href: '#adicionais', icon: Sparkles, id: 'adicionais', count: '18' },
    { label: 'Localização', href: '#localizacao', icon: MapPin, id: 'localizacao' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      id="category-navigation-bar"
      className={`sticky top-[52px] sm:top-[60px] z-30 transition-all duration-300 py-3 ${
        isSticky
          ? 'bg-[#040406]/95 backdrop-blur-xl border-y border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.9)]'
          : 'bg-[#040406]/80 backdrop-blur-md border-y border-white/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeAnchor === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8E001A] via-[#FF163C] to-[#8E001A] text-white shadow-[0_4px_20px_rgba(255,22,60,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] scale-[1.02] border border-white/20'
                    : 'bg-[#121218] text-zinc-300 hover:text-white hover:bg-[#1a1a24] border border-white/10 shadow-md'
                }`}
              >
                {/* 3D Eye-catching Glowing Icon Box */}
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-black/30 text-white shadow-[0_0_10px_rgba(255,255,255,0.6)]'
                      : 'bg-[#FF163C]/15 text-[#FF163C] border border-[#FF163C]/30 shadow-[0_0_8px_rgba(255,22,60,0.3)]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{item.label}</span>
                {item.count && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-black/40 text-white font-bold' : 'bg-black/40 text-zinc-400'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
