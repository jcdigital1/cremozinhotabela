import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { CategorySection } from './components/CategorySection';
import { AdditionalServicesSection } from './components/AdditionalServicesSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { CATEGORIES_DATA } from './config/siteConfig';

export default function App() {
  const [activeAnchor, setActiveAnchor] = useState<string>('motos');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playAudioTriggerRef = useRef<(() => void) | null>(null);

  // Smooth scroll to services and trigger audio if not playing yet
  const handleExploreClick = () => {
    if (playAudioTriggerRef.current) {
      playAudioTriggerRef.current();
    }

    const firstCategory = document.getElementById('motos');
    if (firstCategory) {
      const topOffset = 85;
      const elementPosition = firstCategory.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'motos',
      'carros',
      'suvs-picapes',
      'camionetes',
      'adicionais',
      'localizacao',
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveAnchor(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#040406] text-[#F7F7FA] selection:bg-[#FF163C] selection:text-white relative bg-carbon overflow-x-hidden w-full max-w-full">
      {/* Top Navbar with progress bar and logo */}
      <Navbar />

      <main className="w-full max-w-full overflow-x-hidden">
        {/* Cinematic 3D Hero with large PNG logo and zero popup boxes */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Category Navigation Bar (Sticky with 3D embossed icon badges) */}
        <CategoryNav activeAnchor={activeAnchor} />

        {/* Categories 1 to 5 (Motos Biz/Bros, Alta Cilindrada, Carros, SUVs/Picapes, Camionetes) */}
        <div className="relative">
          {CATEGORIES_DATA.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}

          {/* Category 6: Additional Services */}
          <AdditionalServicesSection />

          {/* Location Section */}
          <LocationSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Automatic Audio Narration (plays automatically, no floating banners or play buttons) */}
      <AudioPlayer
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onPlayingChange={setIsPlaying}
        onRegisterPlayTrigger={(trigger) => {
          playAudioTriggerRef.current = trigger;
        }}
      />
    </div>
  );
}
