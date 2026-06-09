"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, ChevronRight, X } from "lucide-react";

const projects = [
  {
    id: "project-1",
    name: "Nexus AI Platform",
    stack: ["Next.js", "Python", "FastAPI", "Tailwind CSS"],
    problem: "Developers needed a unified interface for managing multiple LLM agents without context switching.",
    solution: "Built a centralized command hub that routes tasks to specialized AI models based on complexity and context.",
    features: ["Real-time agent communication", "Context-aware routing", "Automated deployment pipelines"],
    outcome: "Reduced context switching by 40% and improved task completion speed by 2.5x for beta users."
  },
  {
    id: "project-2",
    name: "CyberShield Analytics",
    stack: ["React", "Node.js", "Elasticsearch", "Docker"],
    problem: "Small businesses lacked affordable, real-time threat detection for their web infrastructure.",
    solution: "Developed a lightweight, deployable container that monitors traffic anomalies and alerts via Discord/Slack.",
    features: ["Anomaly detection algorithms", "Zero-config deployment", "Instant webhook alerts"],
    outcome: "Successfully deployed across 15+ small business networks, intercepting 300+ malicious payload attempts in month one."
  },
  {
    id: "project-3",
    name: "BlockVault Protocols",
    stack: ["Solidity", "TypeScript", "Ethers.js", "Hardhat"],
    problem: "DeFi users faced high gas fees when interacting with multiple yield protocols sequentially.",
    solution: "Created a smart contract batching system to aggregate transactions and route them efficiently.",
    features: ["Gas-optimized batching", "Flash loan integration", "Automated risk assessment"],
    outcome: "Achieved an average of 35% reduction in gas fees compared to standard sequential interactions."
  }
];

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight drop-shadow-[0_0_15px_rgba(255,26,26,0.3)]">
              Projects Fleet
            </h2>
            <p className="text-primary font-mono tracking-widest uppercase mt-2">Active Deployments</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div 
                className={`relative group rounded-xl bg-black/60 border transition-all duration-500 overflow-hidden cursor-pointer ${
                  expandedId === project.id ? "border-primary shadow-[0_0_30px_rgba(255,26,26,0.2)]" : "border-white/10 hover:border-primary/50"
                }`}
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                {/* Holographic scanner effect on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_#FF1A1A] opacity-0 group-hover:animate-[scan_2s_ease-in-out_infinite] z-20 pointer-events-none"></div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 text-muted-foreground hover:text-white bg-white/5 rounded-md transition-colors" onClick={(e) => e.stopPropagation()}>
                        <Code size={18} />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-white bg-white/5 rounded-md transition-colors" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-mono text-primary/80 bg-primary/10 border border-primary/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {expandedId === project.id ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-muted-foreground/90 font-light">
                          <div>
                            <strong className="text-white block mb-1">Problem:</strong>
                            <p>{project.problem}</p>
                          </div>
                          <div>
                            <strong className="text-white block mb-1">Solution:</strong>
                            <p>{project.solution}</p>
                          </div>
                          <div>
                            <strong className="text-white block mb-1">Key Features:</strong>
                            <ul className="list-disc pl-4 space-y-1">
                              {project.features.map(f => <li key={f}>{f}</li>)}
                            </ul>
                          </div>
                          <div>
                            <strong className="text-primary block mb-1 drop-shadow-[0_0_5px_rgba(255,26,26,0.5)]">Outcome:</strong>
                            <p className="text-white/90 italic">{project.outcome}</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center text-sm font-mono tracking-widest text-muted-foreground group-hover:text-primary transition-colors"
                      >
                        ACCESS DETAILS <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
