"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Globe, 
  Zap, 
  Headphones, 
  FileText, 
  ShoppingCart 
} from "lucide-react";
import Background from "./background";

/* ================= VARIANTS ================= */
const container: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ================= UI COMPONENTS ================= */

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-12 px-6">
    <span className="text-white font-black uppercase text-2xl tracking-tighter italic">
      {text}
    </span>
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      <ArrowRight className="text-blue-400" size={28} strokeWidth={3} />
    </div>
  </div>
);

const SideBarIcon = ({ Icon, active }: { Icon: any; active?: boolean }) => (
  <div className={`p-3 cursor-pointer transition-colors duration-200 border-b border-white/5 last:border-0 ${active ? 'bg-blue-600' : 'hover:bg-white/10'}`}>
    <Icon size={18} className={active ? "text-white" : "text-zinc-400"} />
  </div>
);

export default function Addpage() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex flex-col items-center"
    >
      <Background />

      {/* 1. TOP TICKER (Dark Blue / Navy Theme) */}
      <div className="w-full bg-[#0f172a]/80 backdrop-blur-md py-5 flex overflow-hidden border-b border-white/10 select-none z-40">
        <motion.div 
          animate={{ x: [0, -1200] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap items-center"
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <MarqueeItem text="Development" />
              <MarqueeItem text="Design" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* 2. SIDE NAVIGATION DOCK (Navy & Blue Style) */}
    

      {/* 3. BACKGROUND GLOWS (Matching the Blue Reference) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* 4. MAIN CONTENT */}
      <div className="relative z-30 flex-1 flex items-center justify-center w-full max-w-[1440px] mx-auto px-8">
        <motion.div 
          variants={container} 
          initial="initial" 
          animate="animate" 
          className="text-center w-full"
        >
          {/* Glowing Subtitle */}
          <motion.div variants={item} className="mb-6">
            <span className="px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 font-bold text-lg md:text-xl tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              Get&apos;s Started a Projects?
            </span>
          </motion.div>

          {/* MAIN H1 WITH BLUE GRADIENT & GLOW */}
          <motion.h1 
            variants={item} 
            className="font-[var(--font-title)] text-[clamp(4.5rem,16vw,12rem)] font-black leading-[0.82] tracking-tighter uppercase mb-16"
          >
            Let&apos;s Work <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              Together.
            </span>
          </motion.h1>

          {/* Platform Pills (Blue themed) */}
          
        </motion.div>
      </div>

      {/* 5. FLOATING BLUE BUTTON (Bottom Right) */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center px-20">
        <div className="w-full h-[1px] bg-zinc-800/60" />
      </div>
    </section>
    
  );
}