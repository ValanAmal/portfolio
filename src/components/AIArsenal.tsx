"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "ChatGPT", role: "Logic & Code Generation", x: "-30%", y: "-40%" },
  { name: "Claude", role: "Complex Reasoning", x: "30%", y: "-30%" },
  { name: "Gemini", role: "Multimodal Analysis", x: "-40%", y: "20%" },
  { name: "Perplexity", role: "Deep Research", x: "40%", y: "30%" },
  { name: "GitHub Copilot", role: "Inline Completion", x: "0%", y: "45%" },
  { name: "Cursor", role: "AI-Native IDE", x: "0%", y: "-60%" },
];

export function AIArsenal() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight"
          >
            AI Arsenal
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mt-4 shadow-[0_0_15px_#FF1A1A]"
          ></motion.div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          
          {/* Central Core */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute z-20 w-32 h-32 rounded-full bg-black border-2 border-primary shadow-[0_0_40px_#FF1A1A] flex items-center justify-center"
          >
            <div className="w-24 h-24 rounded-full border border-primary/50 flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center animate-[spin_5s_linear_infinite_reverse]">
                <div className="w-8 h-8 bg-primary rounded-full shadow-[0_0_20px_#FF1A1A] animate-pulse"></div>
              </div>
            </div>
            <span className="absolute font-heading font-bold text-white tracking-widest uppercase text-sm drop-shadow-md">
              CORE
            </span>
          </motion.div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {tools.map((tool, idx) => (
              <motion.line
                key={`line-${idx}`}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${tool.x})`}
                y2={`calc(50% + ${tool.y})`}
                stroke="#FF1A1A"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                strokeDasharray="4 4"
                className="animate-[pulse_2s_infinite]"
              />
            ))}
          </svg>

          {/* Floating Modules */}
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + idx * 0.1, type: "spring" }}
              className="absolute z-10 w-40 md:w-48"
              style={{
                left: `calc(50% + ${tool.x})`,
                top: `calc(50% + ${tool.y})`,
                transform: "translate(-50%, -50%)"
              }}
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2, ease: "easeInOut" }}
                className="p-4 rounded-lg bg-black/80 border border-primary/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,26,26,0.15)] hover:shadow-[0_0_30px_rgba(255,26,26,0.4)] hover:border-primary transition-all group cursor-default text-center"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg"></div>
                <h3 className="font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors text-sm md:text-base">
                  {tool.name}
                </h3>
                <p className="text-xs font-mono text-muted-foreground uppercase">
                  {tool.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
