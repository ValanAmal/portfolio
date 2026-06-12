"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Fingerprint, Network, Database, Code, Activity, CheckCircle2 } from "lucide-react";

export function NijamProject() {
  return (
    <section id="nijam" className="py-32 relative z-10 overflow-hidden bg-transparent border-y border-primary/30 shadow-[0_0_50px_rgba(255,26,26,0.1)]">
      {/* Background holographic grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF1A1A0a_1px,transparent_1px),linear-gradient(to_bottom,#FF1A1A0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 bg-primary/10 rounded-full shadow-[0_0_20px_rgba(255,26,26,0.2)]">
            <Shield size={16} className="text-primary animate-pulse" />
            <span className="text-sm font-mono tracking-widest text-white uppercase">Flagship Protocol</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-4">
            NI<span className="text-primary">JAM</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-mono text-muted-foreground uppercase tracking-widest mb-6">
            Network for Immutable Journalism and Authentic Media
          </h3>
          <p className="text-lg md:text-2xl font-light italic text-white/80 max-w-4xl mx-auto leading-relaxed border-l-2 border-r-2 border-primary/50 px-8">
            "Proactive Deepfake Prevention Using Blockchain, Zero-Knowledge Proofs and Video Steganography"
          </p>
        </motion.div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Intel / Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-[#050505] border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 h-full">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
                <Fingerprint size={180} className="text-primary" />
              </div>
              
              <div className="flex gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <span className="block text-xs text-muted-foreground font-mono mb-1">PROJECT TYPE</span>
                  <span className="text-sm text-white font-bold tracking-wider uppercase">Final Year Project</span>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <span className="block text-xs text-muted-foreground font-mono mb-1">ROLE</span>
                  <span className="text-sm text-primary font-bold tracking-wider uppercase">Co-Creator & Dev</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed font-light text-lg mb-10 relative z-10">
                NIJAM is a secure media authentication framework designed to combat deepfakes and digital content manipulation. Instead of detecting fake content after publication, NIJAM establishes authenticity during content creation through cryptographically secured steganographic watermarks, blockchain immutability, and privacy-preserving zero-knowledge proofs.
              </p>

              <h4 className="font-mono text-primary tracking-widest text-sm mb-4">CORE TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {["Blockchain", "Zero-Knowledge Proofs (ZKP)", "Video Steganography", "Cryptographic Hashing", "Flask APIs", "Python"].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-white/90 text-sm font-mono rounded-sm shadow-[0_0_10px_rgba(255,26,26,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right: Architecture Vis */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col"
          >
            <div className="bg-[#050505] border border-white/10 rounded-xl p-8 flex-1 flex flex-col relative overflow-hidden h-full min-h-[400px]">
              <h4 className="font-mono text-white/50 tracking-widest text-sm mb-8 flex items-center gap-2">
                <Activity size={16} className="text-primary animate-pulse" /> Live System Architecture
              </h4>
              
              {/* Animated Data Flow Diagram */}
              <div className="relative flex-1 flex flex-col justify-between py-4">
                
                {/* 1. Video Source */}
                <div className="relative z-10 flex items-center gap-4 bg-black p-4 border border-white/20 rounded shadow-lg w-3/4">
                  <div className="p-3 bg-white/10 rounded"><Database size={24} className="text-white" /></div>
                  <div>
                    <div className="text-white font-bold text-sm tracking-widest">RAW VIDEO SOURCE</div>
                    <div className="text-xs text-muted-foreground">Original Unaltered Footage</div>
                  </div>
                </div>

                {/* Flow line 1 */}
                <div className="absolute left-10 top-[60px] w-[2px] h-[50px] md:h-[80px] bg-white/10 z-0">
                  <motion.div 
                    className="w-full h-[30px] bg-primary shadow-[0_0_15px_#FF1A1A]"
                    animate={{ y: [0, 50, 80] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </div>

                {/* 2. Steganography Engine */}
                <div className="relative z-10 flex items-center gap-4 bg-primary/10 p-4 border border-primary/40 rounded shadow-[0_0_20px_rgba(255,26,26,0.15)] w-3/4 self-center my-6 md:my-0">
                  <div className="p-3 bg-primary/20 rounded"><Code size={24} className="text-primary" /></div>
                  <div>
                    <div className="text-white font-bold text-sm tracking-widest">STEGANOGRAPHY ENGINE</div>
                    <div className="text-xs text-primary/70">Frame-Level Watermark Embedding</div>
                  </div>
                </div>

                {/* Flow line 2 */}
                <div className="absolute right-10 bottom-[80px] md:bottom-[90px] w-[2px] h-[50px] md:h-[80px] bg-white/10 z-0">
                  <motion.div 
                    className="w-full h-[30px] bg-accent shadow-[0_0_15px_#FF3B3B]"
                    animate={{ y: [0, 50, 80] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.75, ease: "linear" }}
                  />
                </div>

                {/* 3. ZKP + Blockchain */}
                <div className="relative z-10 flex items-center gap-4 bg-black p-4 border border-white/20 rounded shadow-lg w-3/4 self-end">
                  <div className="p-3 bg-white/10 rounded relative overflow-hidden">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute inset-0 bg-primary/30 blur-md"></motion.div>
                    <Network size={24} className="text-white relative z-10" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm tracking-widest">ZKP & BLOCKCHAIN</div>
                    <div className="text-xs text-muted-foreground">Immutable Proof Registration</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature Highlights Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Proactive Verification", desc: "Authenticates media at the source of creation rather than relying on reactive deepfake detection models." },
            { title: "Privacy Preserving", desc: "Utilizes Zero-Knowledge Proofs to verify content authenticity without exposing sensitive creator metadata." },
            { title: "Tamper-Evident", desc: "Cryptographic hashing ensures that even a single manipulated pixel completely invalidates the blockchain proof." }
          ].map((feature, i) => (
            <div key={i} className="bg-[#050505] border border-white/5 p-6 rounded hover:border-primary/30 transition-colors group">
              <CheckCircle2 size={24} className="text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h5 className="text-white font-bold tracking-widest mb-2 uppercase">{feature.title}</h5>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
