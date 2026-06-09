"use client";

import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";

const interests = [
  { name: "Artificial Intelligence", top: "15%", left: "15%" },
  { name: "Generative AI", top: "37%", left: "76%" },
  { name: "Blockchain Technology", top: "55%", left: "55%" },
  { name: "Cybersecurity", top: "45%", left: "20%" },
  { name: "Full Stack Development", top: "75%", left: "40%" },
  { name: "Product Development", top: "25%", left: "53%" },
  { name: "Startups", top: "70%", left: "25%" },
  { name: "Emerging Technologies", top: "10%", left: "55%" },
];

export function AreasOfInterest() {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-black/60 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-wider mb-16 drop-shadow-[0_0_15px_rgba(255,26,26,0.3)]"
        >
          Areas of Interest
        </motion.h2>

        <div className="relative w-full max-w-[600px] aspect-square mx-auto rounded-full border-2 border-primary/20 bg-[#050505] overflow-hidden shadow-[inset_0_0_50px_rgba(255,26,26,0.1)] group">
          
          {/* Radar Sweep */}
          <div 
            className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]" 
            style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,26,26,0.05) 60deg, rgba(255,26,26,0.4) 90deg, transparent 90deg)' }}
          ></div>

          {/* Concentric Grid Lines */}
          <div className="absolute inset-0 border border-primary/20 rounded-full m-[12%] pointer-events-none"></div>
          <div className="absolute inset-0 border border-primary/20 rounded-full m-[28%] pointer-events-none"></div>
          <div className="absolute inset-0 border border-primary/20 rounded-full m-[44%] pointer-events-none"></div>
          
          {/* Crosshairs Lines */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary/20 pointer-events-none"></div>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-primary/20 pointer-events-none"></div>

          {/* Inner Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#FF1A1A] animate-pulse pointer-events-none"></div>

          {/* Targets */}
          {interests.map((interest, idx) => (
            <motion.div 
              key={interest.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="absolute flex flex-col items-center hover:z-20 cursor-pointer"
              style={{ top: interest.top, left: interest.left, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative group/target">
                {/* Target Icon */}
                <Crosshair size={24} className="text-primary/70 group-hover/target:text-white group-hover/target:scale-125 transition-all duration-300" />
                {/* Blip Glow */}
                <div className="absolute inset-0 bg-primary rounded-full blur-[10px] opacity-20 group-hover/target:opacity-100 transition-opacity animate-[ping_2s_ease-in-out_infinite]"></div>
              </div>
              
              <div className="mt-2 px-3 py-1 bg-black/80 border border-primary/30 rounded text-xs font-mono tracking-widest text-white/80 group-hover/target:text-primary transition-colors whitespace-nowrap shadow-lg">
                {interest.name}
              </div>
            </motion.div>
          ))}

          {/* Static UI Overlay */}
          <div className="absolute top-4 left-6 text-primary/50 font-mono text-xs text-left pointer-events-none tracking-widest uppercase">
            <div>SCAN: ACTIVE</div>
            <div>RADAR: 360°</div>
          </div>

        </div>
      </div>
    </section>
  );
}
