"use client";

import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";

export function Mission() {
  return (
    <section className="py-32 relative z-10 flex flex-col items-center justify-center min-h-[60vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mx-auto w-16 h-16 bg-black border border-primary text-primary flex items-center justify-center rounded-sm mb-8 shadow-[0_0_20px_rgba(255,26,26,0.3)] relative"
        >
          {/* Target reticle accent */}
          <div className="absolute inset-0 border border-primary/50 scale-150 rounded-sm opacity-50 animate-[ping_3s_infinite]"></div>
          <Crosshair size={32} />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-mono text-primary uppercase tracking-[0.3em] mb-8 font-bold"
        >
          Mission Directive
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-5xl font-heading font-bold text-white leading-tight md:leading-snug tracking-tight relative z-10"
        >
          "To build impactful technology products by combining <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">software engineering, artificial intelligence,</span> innovation, and business thinking while continuously learning and creating meaningful solutions for real-world problems."
        </motion.p>
      </div>
      
      {/* Cinematic letterbox effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
}
