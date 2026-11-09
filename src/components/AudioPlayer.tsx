import React, { useEffect, useRef, useState, useCallback } from 'react';
import { COMPANY_CONFIG } from '../config/siteConfig';

interface AudioPlayerProps {
  onRegisterPlayTrigger?: (trigger: () => void) => void;
  isMuted?: boolean;
  onToggleMute?: () => void;
  onPlayingChange?: (playing: boolean) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  onRegisterPlayTrigger,
  isMuted = false,
  onPlayingChange,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const startAudio = useCallback(async () => {
    if (!audioRef.current || hasStarted) return;
    try {
      audioRef.current.muted = isMuted;
      await audioRef.current.play();
      setHasStarted(true);
      if (onPlayingChange) onPlayingChange(true);
    } catch {
      // Autoplay with audio was restricted by browser policy;
      // It will play on the very first touch/scroll/click.
    }
  }, [hasStarted, isMuted, onPlayingChange]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (onRegisterPlayTrigger) {
      onRegisterPlayTrigger(startAudio);
    }
  }, [onRegisterPlayTrigger, startAudio]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = false;

    // 1. Try immediate autoplay on page load
    const timer = setTimeout(() => {
      startAudio();
    }, 150);

    // 2. Global transparent gesture trigger for mobile / strict browsers
    const handleFirstGesture = () => {
      startAudio();
      // Remove listeners once triggered
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture);
    };

    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('scroll', handleFirstGesture, { passive: true });
    window.addEventListener('pointerdown', handleFirstGesture, { passive: true });

    const handleEnded = () => {
      if (onPlayingChange) onPlayingChange(false);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [startAudio, onPlayingChange]);

  return (
    <audio
      ref={audioRef}
      src={COMPANY_CONFIG.audioNarrationPath}
      playsInline
      preload="auto"
      className="hidden"
    />
  );
};
