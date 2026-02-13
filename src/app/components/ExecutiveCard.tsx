"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DemoWebsitesSection() {
  const scrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050C1B] text-white overflow-hidden px-6 md:px-20 flex items-center justify-center">

      {/* Deep Blue Gradient Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1630] via-[#081226] to-[#050C1B]" />
        
        {/* Blue Glow Orb */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[180px]"
        />
      </div>

      {/* Subtle Blue Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]
        bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      {/* Watermark */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20rem] md:text-[28rem] font-black bg-gradient-to-b from-blue-500/10 to-transparent bg-clip-text text-transparent">
          56
        </span>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl w-full text-center z-10">

        {/* LEFT LINE */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.7, scaleY: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-[2px]
                     bg-gradient-to-b from-blue-400 via-blue-600 to-transparent
                     shadow-[0_0_25px_rgba(37,99,235,0.7)]"
        />

        {/* RIGHT LINE */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.7, scaleY: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[2px]
                     bg-gradient-to-b from-blue-400 via-blue-600 to-transparent
                     shadow-[0_0_25px_rgba(37,99,235,0.7)]"
        />

        <div className="px-8 md:px-20">

          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.4em] text-xs text-blue-400 mb-10"
          >
            Curated Digital Experiences
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05]"
          >
            56+{" "}
            <span className="font-semibold bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Demo Websites
            </span>
            <br />
            built with precision,
            <br />
            <span className="text-white/60">
              crafted for modern brands.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto text-white/50 text-lg leading-relaxed"
          >
            Each experience is engineered with modular architecture,
            refined aesthetics, and scalable structure —
            giving you a foundation that performs beautifully.
          </motion.p>

          {/* Primary Button (Bright Royal Blue like image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-14"
          >
           <button
  onClick={scrollToProjects}
  className="group relative inline-flex items-center justify-center
             px-10 py-4 rounded-full
             bg-gradient-to-r from-blue-600 to-blue-500
             text-sm tracking-widest uppercase font-semibold
             overflow-hidden
             cursor-pointer
             transition-all duration-300
             shadow-[0_0_35px_rgba(37,99,235,0.5)]
             hover:-translate-y-1
             hover:shadow-[0_0_60px_rgba(37,99,235,0.9)]
             active:translate-y-0"
>

              <span className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
              Explore Collection →
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
