"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronRight, ChevronDown, CheckSquare, FolderGit2 } from "lucide-react";

const timelineData = [
  {
    id: "exp-1",
    type: "PROFESSIONAL_INTERNSHIP",
    role: "Web Design & Development Intern",
    company: "ImagiNET Ventures Pvt. Ltd.",
    duration: "Feb 2025 – Apr 2025",
    description: "Completed a focused internship on Full Stack Web Design and Development. Executed live client projects involving website design, content management, responsive development, SEO optimization, and WordPress-based solutions. Acquired practical industry experience bridging front-end development and modern web workflows.",
    tech: ["WordPress", "WPBakery", "HTML/CSS", "JavaScript", "React.js", "SEO"],
    contributions: [
      "Website content management",
      "Responsive web design",
      "UI improvements & layout customization",
      "Content writing and publishing",
      "SEO optimization",
      "Client project support"
    ],
    projects: [
      "PEPS India", "Everwood WPC", "WB Bakery", "SSN School of Management", 
      "SSN College of Engineering", "Geetharaja", "Rajas International School", "Indian Agriculture College"
    ]
  },
  {
    id: "edu-1",
    type: "ACADEMIC_FOUNDATION",
    role: "B.Tech Computer Science Engineering",
    company: "Loyola-ICAM College of Engineering and Technology",
    duration: "2021 – 2025",
    description: "Building a strong foundation in computer science principles, software engineering, and problem-solving methodologies.",
    tech: ["C", "Java", "Python", "Data Structures", "Algorithms"],
    contributions: ["Academic coursework", "Core CS fundamentals", "Algorithm design"],
    projects: []
  }
];

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-transparent border-y border-primary/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 flex items-center gap-4 border-b border-white/10 pb-6">
          <Terminal size={32} className="text-primary" />
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
              Mission Logs
            </h2>
            <p className="text-primary/70 font-mono tracking-widest text-sm uppercase mt-1">/usr/var/logs/experience.log</p>
          </div>
        </div>

        <div className="space-y-4 font-mono">
          {timelineData.map((item) => {
            const isExpanded = expandedId === item.id;
            
            return (
              <div 
                key={item.id} 
                className="border border-white/10 bg-transparent rounded overflow-hidden"
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors ${
                    isExpanded ? "bg-transparent border-b border-primary/20" : "hover:bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4 overflow-hidden">
                    {isExpanded ? (
                      <ChevronDown size={20} className="text-primary shrink-0" />
                    ) : (
                      <ChevronRight size={20} className="text-muted-foreground shrink-0" />
                    )}
                    <div className="truncate">
                      <span className="text-primary mr-3 text-xs md:text-sm">[{item.duration}]</span>
                      <span className={`font-bold text-sm md:text-base ${isExpanded ? "text-white" : "text-white/80"}`}>
                        {item.role} @ {item.company}
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:block text-xs text-muted-foreground/50 uppercase tracking-widest shrink-0 ml-4">
                    {item.type}
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 md:p-8 space-y-8 text-sm md:text-base">
                        
                        {/* Description */}
                        <div>
                          <p className="text-muted-foreground/90 leading-relaxed font-light">
                            <span className="text-primary mr-2">&gt;</span>
                            {item.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Tech Stack */}
                          <div>
                            <h4 className="text-white/50 mb-3 flex items-center gap-2 text-xs tracking-widest uppercase">
                              <Terminal size={14} className="text-primary" /> Stack Loaded
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.tech.map(tech => (
                                <span key={tech} className="px-2 py-1 text-xs text-primary/80 bg-primary/10 border border-primary/20 rounded-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Contributions */}
                          <div>
                            <h4 className="text-white/50 mb-3 flex items-center gap-2 text-xs tracking-widest uppercase">
                              <CheckSquare size={14} className="text-primary" /> Key Executions
                            </h4>
                            <ul className="space-y-2">
                              {item.contributions.map((contribution, i) => (
                                <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
                                  <span className="text-primary mt-1 text-[10px]">■</span>
                                  <span>{contribution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Projects */}
                        {item.projects.length > 0 && (
                          <div className="pt-6 border-t border-white/5">
                            <h4 className="text-white/50 mb-4 flex items-center gap-2 text-xs tracking-widest uppercase">
                              <FolderGit2 size={14} className="text-primary" /> Deployed Modules
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.projects.map((project, i) => (
                                <span key={i} className="text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                                  {project}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
