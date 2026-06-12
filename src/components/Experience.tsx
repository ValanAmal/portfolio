"use client";

import { motion } from "framer-motion";
import { Terminal, FolderGit2 } from "lucide-react";

const timelineData = [
  {
    id: "exp-1",
    type: "PROFESSIONAL_INTERNSHIP",
    role: "Web Design & Development Intern",
    company: "ImagiNET Ventures Pvt. Ltd.",
    duration: "Feb 2025 – Apr 2025",
    description: "Completed a focused internship on Full Stack Web Design and Development. Executed live client projects involving website design, content management, responsive development, SEO optimization, and WordPress-based solutions. Acquired practical industry experience bridging front-end development and modern web workflows.",
    tech: ["WordPress", "WPBakery", "HTML/CSS", "JavaScript", "React.js", "SEO"],
    projects: [
      "PEPS India", "Everwood WPC", "WB Bakery", "SSN School of Management", 
      "SSN College of Engineering", "Geetharaja", "Rajas International School", "Indian Agriculture College"
    ]
  },
  {
    id: "edu-1",
    type: "ACADEMIC_FOUNDATION",
    role: "B.Tech Computer Science Engineering",
    company: "Loyola-ICAM College of Engineering and Technology (LICET)",
    duration: "2021 – 2025",
    description: "Building a strong foundation in computer science principles, software engineering, and problem-solving methodologies.",
    tech: ["C", "Java", "Python", "Data Structures", "Algorithms"],
    projects: []
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-transparent border-y border-primary/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 flex items-center gap-4 border-b border-white/10 pb-6">
          <Terminal size={32} className="text-primary" />
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
              Mission Logs
            </h2>
            <p className="text-primary/70 font-mono tracking-widest text-sm uppercase mt-1">/usr/var/logs/experience.log</p>
          </div>
        </div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              key={item.id} 
              className="relative p-8 md:p-12 border border-white/10 bg-[#050505] rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,26,26,0.15)]"
            >
              {/* Holographic background sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-8 relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-white tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:text-primary transition-colors">
                    {item.company}
                  </h3>
                  <div className="text-primary/90 font-mono tracking-widest uppercase text-sm mt-2">
                    {item.role}
                  </div>
                </div>
                <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-sm font-mono text-primary text-sm shadow-[0_0_15px_rgba(255,26,26,0.2)] shrink-0">
                  {item.duration}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed font-light text-lg mb-10 relative z-10">
                {item.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
                {/* Deployed Modules (Client Projects) */}
                {item.projects.length > 0 && (
                  <div>
                    <h4 className="text-white/50 mb-4 flex items-center gap-2 text-xs tracking-widest uppercase">
                      <FolderGit2 size={14} className="text-primary" /> Key Deployments / Clients
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {item.projects.map((project, i) => (
                        <span key={i} className="text-sm text-white font-bold tracking-widest uppercase bg-white/5 border border-white/20 px-4 py-2 rounded-sm group-hover:border-white/50 group-hover:bg-white/10 transition-colors drop-shadow-md">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className={item.projects.length === 0 ? "lg:col-span-2" : ""}>
                  <h4 className="text-white/50 mb-4 flex items-center gap-2 text-xs tracking-widest uppercase">
                    <Terminal size={14} className="text-primary" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(tech => (
                      <span key={tech} className="px-3 py-1.5 text-xs font-mono text-primary/90 bg-primary/10 border border-primary/30 rounded-sm shadow-[0_0_10px_rgba(255,26,26,0.1)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
