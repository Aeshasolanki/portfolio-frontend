"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MessageSquare, Star } from "lucide-react";
import Background from "./background";

/* ================= VARIANTS ================= */
const container: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ================= FLOATING ICON COMPONENT ================= */
function FloatingAppIcon({
  imgSrc,
  label,
  className,
  delay = 0,
}: {
  imgSrc: string; // path to your public folder icon
  label: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, -15, 0] }}
      transition={{
        opacity: { delay, duration: 0.8 },
        scale: { delay, duration: 0.8 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 },
      }}
      className={`absolute z-20 hidden lg:flex flex-col items-center gap-3 ${className}`}
    >
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-[22.5%] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center group hover:scale-105 transition-transform duration-500">
        <img
          src={imgSrc}
          alt={label}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.div>
  );
}

/* ================= CEO ABOUT PAGE ================= */
export default function CEOAboutPage() {
  const scrollToProjects = () => {
    // Looks for the element with id="projects"
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex items-center justify-center py-20"
    >
      <Background />

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-center">
        <div className="relative w-full max-w-[1440px] h-full">
          {/* LEFT SIDE */}
          <FloatingAppIcon imgSrc="/finance.png" label="Keto Pro" className="top-[18%] left-[6%]" delay={0.1} />
          <FloatingAppIcon imgSrc="/sleep.png" label="Sleep AI" className="top-[45%] left-[10%]" delay={0.3} />
          <FloatingAppIcon imgSrc="/santa.png" label="ID Portal" className="bottom-[18%] left-[6%]" delay={0.5} />

          {/* RIGHT SIDE */}
          <FloatingAppIcon imgSrc="/med.png" label="Secure" className="top-[18%] right-[6%]" delay={0.2} />
          <FloatingAppIcon imgSrc="/k.png" label="Fitness" className="top-[45%] right-[10%]" delay={0.4} />
          <FloatingAppIcon imgSrc="/nature.png" label="Fast Video" className="bottom-[18%] right-[6%]" delay={0.6} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-[1440px] mx-auto px-8 w-full">
        <motion.div variants={container} initial="initial" animate="animate" className="text-center max-w-5xl mx-auto space-y-10">
          
          <motion.div variants={item} className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 font-bold">
              Hello From Siddharth
            </span>
          </motion.div>

          <motion.h2 variants={item} className="font-[var(--font-title)] text-[clamp(3rem,8vw,6rem)] font-black tracking-[-0.04em] uppercase leading-[0.85] mx-auto">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700">
              Globals
            </span>{" "}
            <br />
            Enterprises.
          </motion.h2>

          <motion.p variants={item} className="text-zinc-400 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-light border-t border-white/5 pt-8">
            Driven by data, powered by innovation—exploring a diverse portfolio of
            <span className="text-white italic font-medium"> high-stakes ventures</span>.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button onClick={scrollToProjects} className="group px-10 py-5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-blue-500 transition-all duration-500 flex items-center gap-3 shadow-xl shadow-blue-900/20">
              Explore Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-10 py-5 bg-transparent border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-all duration-500 flex items-center gap-3">
              Get in touch
              <MessageSquare size={16} />
            </button>
          </motion.div>

          <motion.div variants={item} className="pt-12 space-y-4">
            <p className="text-zinc-500 text-[11px] font-mono uppercase tracking-[0.2em] opacity-60">
              Discover Our Most Loved Apps
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i === 4 ? "text-zinc-700 fill-zinc-700" : "text-blue-400 fill-blue-400"} />
                ))}
              </div>
              <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                <span className="text-sm font-bold text-zinc-300">4.5 Rating</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Glow Lines */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-blue-600/10 blur-[120px] pointer-events-none" />
    </section>
  );
}
