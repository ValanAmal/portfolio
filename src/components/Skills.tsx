"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C", level: 75 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend & CMS",
    items: [
      { name: "Node.js", level: 80 },
      { name: "WordPress", level: 85 },
      { name: "WPBakery", level: 80 },
    ],
  },
  {
    category: "Tools & Ops",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Packet Tracer", level: 75 },
    ],
  },
];

function TiltCard({ title, items }: { title: string; items: { name: string; level: number }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full p-6 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md transition-colors duration-300 hover:border-primary/50 hover:bg-black/60 group"
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(600px circle at 50% 50%, rgba(255,26,26,0.1), transparent 40%)",
        }}
      />
      
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-2 inline-block">
          {title}
        </h3>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="font-mono text-muted-foreground group-hover:text-white/90 transition-colors">
                  {item.name}
                </span>
                <span className="font-mono text-primary/80">{item.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary/50 to-primary relative shadow-[0_0_10px_#FF1A1A]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,26,26,0.5)]">
            Command Center
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Technical arsenal and operational capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1000px]">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard title={category.category} items={category.items} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
