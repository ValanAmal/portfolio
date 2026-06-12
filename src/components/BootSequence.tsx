"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Black screen
    // Stage 1: "SYSTEM INITIALIZING..."
    // Stage 2: "TRANSMISSION RECEIVED"
    // Stage 3: Scanline down
    // Stage 4: Unmount and fade out
    
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => {
        setStage(4);
        onComplete();
      }, 3500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 4 && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono overflow-hidden pointer-events-none"
        >
          {/* Animated Scanline */}
          {stage >= 3 && (
            <div className="absolute top-0 left-0 w-full h-[4px] bg-primary shadow-[0_0_20px_#FF1A1A] animate-[scanline_1s_linear_forwards] z-20"></div>
          )}

          {/* Text Outputs */}
          <div className="text-center">
            {stage >= 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1] }}
                transition={{ duration: 0.5 }}
                className="text-white/50 text-sm md:text-lg tracking-[0.3em] uppercase mb-4"
              >
                System Initializing...
              </motion.div>
            )}
            
            {stage >= 2 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-primary font-bold text-2xl md:text-5xl tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(255,26,26,0.8)]"
              >
                Transmission Received
              </motion.div>
            )}
          </div>
          
          {/* Decorative Grid */}
          <div className="absolute inset-0 border border-white/5 m-8 pointer-events-none hidden md:block">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
