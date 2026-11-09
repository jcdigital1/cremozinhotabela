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
  const audioContextRef = useRef<AudioContext | null>(null);
  const hasStartedRef = useRef<boolean>(false);
  const [, setRerender] = useState({});

  // Synchronous play helper to comply with Android Chrome & iOS Safari transient user gesture rules
  const playAudioSync = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || hasStartedRef.current) return;

    // Unlock Web Audio Context if available (vital for Android Chrome)
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          audioContextRef.current = new AudioCtx();
        }
      }
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
    } catch {
      // AudioContext optional fallback
    }

    try {
      audio.muted = isMuted;
      audio.currentTime = 0;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            hasStartedRef.current = true;
            if (onPlayingChange) onPlayingChange(true);
            setRerender({});
          })
          .catch(() => {
            // Browser blocked this attempt; listeners will trigger on gesture
          });
      }
    } catch {
      // Catch synchronous errors if any
    }
  }, [isMuted, onPlayingChange]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (onRegisterPlayTrigger) {
      onRegisterPlayTrigger(playAudioSync);
    }
  }, [onRegisterPlayTrigger, playAudioSync]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = false;

    // 1. Attempt immediate autoplay as soon as component mounts
    playAudioSync();

    // 2. Also attempt as soon as audio data can play
    const handleCanPlay = () => {
      if (!hasStartedRef.current) {
        playAudioSync();
      }
    };
    audio.addEventListener('canplay', handleCanPlay, { once: true });

    // 3. Universal gesture unlock for Android & iOS
    // Android Chrome requires capture-phase listeners on document/window to detect touch/scroll gestures
    const gestureEvents = [
      'touchstart',
      'touchend',
      'touchmove',
      'pointerdown',
      'pointerup',
      'pointermove',
      'mousedown',
      'mouseup',
      'click',
      'scroll',
      'wheel',
      'keydown'
    ] as const;

    const handleUniversalGesture = () => {
      if (!hasStartedRef.current) {
        playAudioSync();
      }
      // If successfully started or triggered, remove event listeners
      if (hasStartedRef.current) {
        removeGestureListeners();
      }
    };

    const addGestureListeners = () => {
      gestureEvents.forEach((ev) => {
        window.addEventListener(ev, handleUniversalGesture, { capture: true, passive: true });
        document.addEventListener(ev, handleUniversalGesture, { capture: true, passive: true });
        if (document.body) {
          document.body.addEventListener(ev, handleUniversalGesture, { capture: true, passive: true });
        }
      });
    };

    const removeGestureListeners = () => {
      gestureEvents.forEach((ev) => {
        window.removeEventListener(ev, handleUniversalGesture, { capture: true });
        document.removeEventListener(ev, handleUniversalGesture, { capture: true });
        if (document.body) {
          document.body.removeEventListener(ev, handleUniversalGesture, { capture: true });
        }
      });
    };

    addGestureListeners();

    const handleEnded = () => {
      if (onPlayingChange) onPlayingChange(false);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      removeGestureListeners();
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [playAudioSync, onPlayingChange]);

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
