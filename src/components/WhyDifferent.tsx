"use client";

import { motion } from "framer-motion";
import { Cpu, Rocket, Brain, Lightbulb, PenTool, Target, Hammer } from "lucide-react";

const features = [
  { title: "AI-Augmented Developer", icon: Cpu, desc: "Leveraging LLMs and modern tooling to 10x development speed and output quality." },
  { title: "Builder Mindset", icon: Hammer, desc: "A strong drive to create, iterate, and ship products that deliver real value." },
  { title: "Fast Learner", icon: Rocket, desc: "Rapidly adapting to new languages, frameworks, and paradigms in a fast-paced tech landscape." },
  { title: "Product Thinker", icon: Brain, desc: "Focusing on user experience, business value, and solving real problems, not just writing code." },
  { title: "Problem Solver", icon: Target, desc: "Breaking down complex technical challenges into elegant, maintainable, and scalable solutions." },
  { title: "Rapid Prototyper", icon: PenTool, desc: "Taking ideas from zero to MVP in record time to test assumptions and gather feedback." },
  { title: "Innovation Driven", icon: Lightbulb, desc: "Constantly exploring the bleeding edge of tech to build futuristic, next-generation experiences." },
];

export function WhyDifferent() {
  return (
    <section className="py-24 relative z-10 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-wider mb-4"
          >
            Why I'm Different
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto shadow-[0_0_15px_#FF1A1A]"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-4 -translate-y-4 group-hover:scale-110 duration-500">
                <feature.icon size={80} className="text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-black/50 border border-primary/30 rounded-md flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(255,26,26,0.3)] transition-all">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Hover sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
