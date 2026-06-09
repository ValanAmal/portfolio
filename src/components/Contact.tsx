"use client";

import { motion } from "framer-motion";
import { Terminal, Send, Code, Globe, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-black/80 border-t border-primary/20 shadow-[0_-10px_30px_rgba(255,26,26,0.05)]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/30 bg-primary/5">
              <Terminal size={14} className="text-primary" />
              <span className="text-xs font-mono tracking-widest text-primary uppercase">Secure Channel</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-6">
              Establish <span className="text-primary">Comms</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-md font-light">
              Ready to deploy new initiatives? Open a secure channel to initiate protocols for collaboration, opportunities, or technical inquiries.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/valanamal" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all group">
                <Code size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com/in/valanamal" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all group">
                <Globe size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:valan@example.com" className="w-12 h-12 flex items-center justify-center rounded bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all group">
                <Mail size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Terminal Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#050505] rounded-lg border border-white/10 shadow-2xl overflow-hidden font-mono">
              {/* Terminal Header */}
              <div className="bg-[#111] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 text-xs text-muted-foreground uppercase tracking-wider">transmission.sh</div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 md:p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-primary text-sm tracking-wider flex items-center gap-2">
                      <span className="text-muted-foreground">$</span> set --name
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                      placeholder="Enter designation"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-primary text-sm tracking-wider flex items-center gap-2">
                      <span className="text-muted-foreground">$</span> set --email
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                      placeholder="Enter comm link"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-primary text-sm tracking-wider flex items-center gap-2">
                      <span className="text-muted-foreground">$</span> set --payload
                    </label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 resize-none"
                      placeholder="Enter transmission data..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full mt-8 bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary py-4 rounded font-heading font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(255,26,26,0.2)] hover:shadow-[0_0_25px_rgba(255,26,26,0.5)]"
                  >
                    Execute Transmission <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
