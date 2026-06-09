"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(255,26,26,0.15)]"
        >
          <Terminal size={16} className="text-primary" />
          <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
            System Online
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter mb-6"
        >
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            VALAN
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_20px_rgba(255,26,26,0.5)]">
            AMAL
          </span>
        </motion.h1>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-heading font-bold tracking-widest uppercase overflow-hidden rounded-sm flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-accent origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
              View Fleet <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Holographic glow effect */}
            <div className="absolute inset-0 shadow-[0_0_20px_#FF1A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 bg-transparent border border-white/20 text-white font-heading font-bold tracking-widest uppercase overflow-hidden rounded-sm flex items-center justify-center transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(255,26,26,0.3)] active:scale-95"
          >
            <span className="relative z-10">Establish Comms</span>
            <div className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </motion.div>
      </div>

      {/* Decorative scanline */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_51%)] bg-[length:100%_4px]"></div>
    </section>
  );
}
