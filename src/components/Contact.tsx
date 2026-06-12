"use client";

import { motion } from "framer-motion";
import { Code, Globe, Camera, Mail, Radio } from "lucide-react";

const commLinks = [
  { name: "GitHub", url: "https://github.com/ValanAmal", icon: Code, handle: "@ValanAmal" },
  { name: "LinkedIn", url: "https://share.google/yZpg0x9E8FZURIQ5F", icon: Globe, handle: "Valan Amal" },
  { name: "Instagram", url: "https://instagram.com/valanamal", icon: Camera, handle: "@valanamal" },
  { name: "Email", url: "mailto:valanamal04@gmail.com", icon: Mail, handle: "valanamal04@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 bg-[#020202] border-t border-primary/20 shadow-[0_-10px_30px_rgba(255,26,26,0.05)] overflow-hidden">
      
      {/* Background Radar sweep */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[150vw] h-[150vw] rounded-full border border-primary/20 absolute animate-[ping_10s_infinite]"></div>
        <div className="w-[100vw] h-[100vw] rounded-full border border-primary/30 absolute animate-[ping_8s_infinite]"></div>
        <div className="w-[50vw] h-[50vw] rounded-full border border-primary/40 absolute animate-[ping_6s_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto w-16 h-16 bg-primary/10 border border-primary text-primary flex items-center justify-center rounded-sm mb-6 relative group"
          >
            <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-50 blur-md transition-opacity"></div>
            <Radio size={32} className="relative z-10 animate-pulse" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(255,26,26,0.4)]"
          >
            ESTABLISH <span className="text-primary">COMMS</span>
          </motion.h2>
          <p className="text-muted-foreground font-mono tracking-widest uppercase mt-6 max-w-2xl mx-auto">
            Open a secure channel to initiate protocols for collaboration, opportunities, or technical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commLinks.map((link, idx) => (
            <motion.a
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              key={link.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative h-48 bg-black border border-white/10 rounded-lg p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_15px_30px_rgba(255,26,26,0.15)]"
            >
              {/* Holographic background sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              
              {/* Top corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

              <div className="relative z-20 flex justify-between items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                  <link.icon size={24} className="text-white group-hover:text-primary transition-colors" />
                </div>
                <div className="w-2 h-2 rounded-full bg-red-900 group-hover:bg-primary group-hover:shadow-[0_0_10px_#FF1A1A] transition-colors animate-pulse"></div>
              </div>

              <div className="relative z-20">
                <h3 className="text-xl font-heading font-bold text-white tracking-widest uppercase mb-1">
                  {link.name}
                </h3>
                <p className="text-sm font-mono text-muted-foreground group-hover:text-primary/80 transition-colors">
                  {link.handle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
