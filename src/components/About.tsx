"use client";

import { motion } from "framer-motion";
import { User, Code, Zap, Shield, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 flex items-center justify-center bg-black/0">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Holographic Command Panel */}
          <div className="relative p-[1px] rounded-xl overflow-hidden group">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-accent/50 opacity-30 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
            
            {/* Panel Background */}
            <div className="relative bg-black/80 backdrop-blur-xl border border-primary/20 rounded-xl p-8 md:p-12 shadow-[inset_0_0_30px_rgba(255,26,26,0.05)]">
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-xl"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 shadow-[0_0_15px_rgba(255,26,26,0.2)]">
                  <User className="text-primary" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-widest uppercase">
                  Subject Intel
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground/90 font-light leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">Valan Amal</strong>, a Computer Science Engineering graduate passionate about artificial intelligence, software development, blockchain, cybersecurity, and emerging technologies.
                </p>
                <p>
                  I enjoy transforming ideas into impactful digital products by combining programming skills, modern frameworks, and AI-assisted development workflows. My focus is on innovation, rapid prototyping, problem-solving, and continuous learning.
                </p>
              </div>

              {/* Verified Credentials */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-mono tracking-wide">
                <div>
                  <span className="block text-primary mb-1 drop-shadow-[0_0_5px_rgba(255,26,26,0.5)]">LOCATION //</span>
                  <span className="text-white">Chennai, Tamil Nadu, India</span>
                </div>
                <div>
                  <span className="block text-primary mb-1 drop-shadow-[0_0_5px_rgba(255,26,26,0.5)]">EDUCATION //</span>
                  <span className="text-white block mb-1">B.Tech Computer Science and Engineering</span>
                  <span className="text-muted-foreground block text-xs">Loyola-ICAM College of Engineering and Technology</span>
                  <span className="text-muted-foreground block text-xs">Anna University</span>
                </div>
              </div>

              {/* Holographic Stats/Icons */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Code, label: "Full Stack" },
                  { icon: Zap, label: "AI-First" },
                  { icon: Globe, label: "Blockchain" },
                  { icon: Shield, label: "Security" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group/stat">
                    <item.icon className="text-muted-foreground group-hover/stat:text-primary transition-colors" size={24} />
                    <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase group-hover/stat:text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
