"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ================= UI COMPONENTS ================= */

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-14 px-8">
    <span className="text-white font-black uppercase text-2xl tracking-tight italic">
      {text}
    </span>
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
      <ArrowRight className="text-blue-400" size={28} strokeWidth={3} />
    </div>
  </div>
);

export default function Addpage() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex flex-col items-center"
    >
      <Background />

      {/* ================= GRID OVERLAY ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* ================= TOP MARQUEE ================= */}
      <div className="relative w-full bg-[#0f172a]/80 backdrop-blur-xl py-6 flex overflow-hidden border-b border-white/10 z-40">
        
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
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

      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-30 flex-1 flex items-center justify-center w-full max-w-[1500px] mx-auto px-8">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="text-center w-full"
        >
          {/* SUBTITLE */}
          <motion.div variants={item} className="mb-10">
            <span className="relative px-8 py-3 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 font-semibold text-lg md:text-xl tracking-wide backdrop-blur-md">
              Get&apos;s Started a Projects?
              <span className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl -z-10" />
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            variants={item}
            className="font-[var(--font-title)] text-[clamp(4.5rem,15vw,11rem)] font-black leading-[0.85] tracking-tighter uppercase mb-20"
          >
            Let&apos;s Work <br />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-400">
              Together.
              {/* Animated underline glow */}
              <span className="absolute left-0 bottom-3 w-full h-[6px] bg-blue-500/40 blur-xl" />
            </span>
          </motion.h1>

          {/* OPTIONAL MICRO DESCRIPTION */}
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed"
          >
            Crafting digital experiences with precision, creativity, and modern
            technologies. Let&apos;s build something exceptional together.
          </motion.p>
        </motion.div>
      </div>

      {/* ================= BOTTOM LINE ================= */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center px-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </section>
  );
}
