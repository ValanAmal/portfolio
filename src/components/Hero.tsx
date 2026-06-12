"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Periodic glitch effect: triggers every 4s for ~400ms
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 400);
    }, 4000);
    return () => clearInterval(glitchInterval);
  }, []);

  const showGlitch = isGlitching || isHovered;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background radial gradient for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black z-0"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(255,26,26,0.15)]"
        >
          <Terminal size={16} className="text-primary" />
          <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
            THE GOAT
          </span>
        </motion.div>

        {/* Glitching Name Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-6 group cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Base Text */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter uppercase relative z-10 transition-all duration-75 ${showGlitch ? 'opacity-80 scale-[1.01]' : 'opacity-100'}`}>
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">VALAN</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_20px_rgba(255,26,26,0.5)]">AMAL</span>
          </h1>
          
          {/* Periodic Glitch Layers */}
          <AnimatePresence>
            {showGlitch && (
              <>
                <h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter uppercase absolute top-0 left-0 z-20 pointer-events-none w-full"
                  style={{ 
                    textShadow: '-4px 0 rgba(255, 26, 26, 0.8)', 
                    animation: isHovered ? 'hero-glitch-1 0.15s infinite linear alternate-reverse' : 'hero-glitch-1 0.2s infinite linear alternate-reverse'
                  }}
                  aria-hidden="true"
                >
                  <span className="text-white">VALAN</span>{" "}
                  <span className="text-primary">AMAL</span>
                </h1>
                <h1 
                  className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter uppercase absolute top-0 left-0 z-20 pointer-events-none w-full"
                  style={{ 
                    textShadow: '4px 0 rgba(0, 255, 255, 0.6)', 
                    animation: isHovered ? 'hero-glitch-2 0.2s infinite linear alternate-reverse' : 'hero-glitch-2 0.3s infinite linear alternate-reverse'
                  }}
                  aria-hidden="true"
                >
                  <span className="text-white">VALAN</span>{" "}
                  <span className="text-primary">AMAL</span>
                </h1>
              </>
            )}
          </AnimatePresence>

          {/* Hover Sith Energy Lightning / Split */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-30 pointer-events-none mix-blend-screen"
              >
                {/* Horizontal cut line simulating letter splitting */}
                <div className="absolute top-1/2 left-[-10%] right-[-10%] h-[2px] bg-primary shadow-[0_0_20px_#FF1A1A] animate-pulse"></div>
                <div className="absolute top-[48%] left-[-5%] right-[-5%] h-[1px] bg-white opacity-50 shadow-[0_0_10px_#ffffff]"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Holographic glowing effect behind text */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[50px] -z-10 rounded-full transition-transform duration-300 ${isHovered ? 'scale-150 bg-primary/40 blur-[70px]' : 'scale-100'}`}></div>
        </motion.div>

        {/* Subtitles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-2 mb-10"
        >
          <h2 className="text-xl md:text-3xl font-heading font-semibold text-muted-foreground tracking-wide">
            Computer Science Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span>AI-Powered Full Stack Builder</span>
            <span className="hidden md:inline">•</span>
            <span>Blockchain & Cybersecurity Enthusiast</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl font-light italic text-white/70 max-w-2xl mb-12"
        >
          "Transforming Ideas Into Intelligent Digital Experiences."
        </motion.p>

      </div>

      {/* Decorative scanline */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_51%)] bg-[length:100%_4px]"></div>
    </section>
  );
}
