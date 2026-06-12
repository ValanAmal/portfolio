"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function AudioController() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const humOscillatorRef = useRef<OscillatorNode | null>(null);
  const humGainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // Initialize audio context
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (isAudioEnabled && audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }

    if (isAudioEnabled) {
      // Start Sith Hum
      const ctx = audioContextRef.current;
      
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      // Deep low frequency hum
      oscillator.type = "sawtooth";
      oscillator.frequency.setValueAtTime(55, ctx.currentTime); // Low frequency
      
      // Subtle pitch oscillation
      oscillator.frequency.linearRampToValueAtTime(53, ctx.currentTime + 2);
      oscillator.frequency.linearRampToValueAtTime(57, ctx.currentTime + 4);
      
      // Extremely low volume, just background ambiance
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 2); // Very quiet

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.start();
      
      humOscillatorRef.current = oscillator;
      humGainRef.current = gainNode;
    } else {
      // Stop hum gracefully
      if (humGainRef.current && audioContextRef.current) {
        humGainRef.current.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 1);
        setTimeout(() => {
          if (humOscillatorRef.current) {
            humOscillatorRef.current.stop();
            humOscillatorRef.current.disconnect();
          }
        }, 1000);
      }
    }

    return () => {
      // Cleanup on unmount or toggle
      if (humOscillatorRef.current) {
        try { humOscillatorRef.current.stop(); } catch(e) {}
      }
    };
  }, [isAudioEnabled]);

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4 }} // Fade in after boot sequence
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3"
    >
      <button 
        onClick={toggleAudio}
        className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
          isAudioEnabled 
            ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(255,26,26,0.5)]" 
            : "bg-black/50 border-white/20 text-white/50 hover:text-white hover:border-white/50 backdrop-blur-md"
        }`}
        title="Toggle Sith System Effects"
      >
        {isAudioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      
      <div className={`text-xs font-mono tracking-widest uppercase transition-opacity ${isAudioEnabled ? "text-primary opacity-100" : "text-white/30 opacity-0 md:opacity-100"}`}>
        SYS_AUDIO: {isAudioEnabled ? "ON" : "OFF"}
      </div>
    </motion.div>
  );
}
