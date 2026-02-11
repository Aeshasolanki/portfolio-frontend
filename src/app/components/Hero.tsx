"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Linkedin, Twitter, ArrowRight, Target, BarChart3, Globe, ShieldCheck } from "lucide-react";
import Background from "./background";

export default function CEOPortfolioHero() {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex items-center">
      <Background />

      <div className="max-w-[1440px] mx-auto w-full px-8 lg:px-20 relative z-10 py-20">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
        >
          {/* LEFT */}
          <div className="lg:col-span-7 space-y-12">

            <motion.div
              variants={itemVars}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-950/10 border border-blue-500/20 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-blue-400 font-bold">
                Chief Executive Officer
              </span>
            </motion.div>

            <motion.div variants={itemVars} className="space-y-10">
              <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.8] uppercase tracking-tighter italic font-[var(--font-title)]">
                Siddharth <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600">
                  Makadiya
                </span>
              </h1>

              <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl font-light leading-[1.6] border-l-2 border-blue-600/80 pl-8 subpixel-antialiased">
                CEO of{" "}
                <span className="text-white font-semibold italic underline underline-offset-[12px] decoration-blue-600/30">
                  Initiotech Media
                </span>
                , orchestrating digital evolution through scalable
                architecture and a growth-focused executive mindset.
              </p>
            </motion.div>

            <motion.div
              variants={itemVars}
              className="flex flex-wrap items-center gap-10 pt-6"
            >
              <a
                href="https://calendly.com/aeshasolanki-initiotechmedia/new-meeting-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-6 bg-blue-600 text-white font-black uppercase text-[12px] tracking-[0.25em] transition-all hover:bg-blue-500 flex items-center gap-4 active:scale-95 shadow-2xl shadow-blue-500/10"
              >
                Request Briefing
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>

              <div className="flex items-center gap-8">
                {[{ Icon: Linkedin, href: "#" }, { Icon: Twitter, href: "#" }].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="text-zinc-500 hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                  >
                    <item.Icon size={24} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT CARD */}
          <motion.div variants={itemVars} className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-600 via-blue-500/20 to-transparent" />

              <div className="relative p-12 space-y-10">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400 font-bold">
                      CEO
                    </p>
                    <h3 className="text-2xl font-black tracking-tight uppercase italic text-white">
                      Roles
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-md border border-white/10 text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-white/5">
                    INITIOTECHMEDIA
                  </span>
                </div>

                <div className="space-y-1">
                  {[
                    { icon: <Target size={18} />, label: "Product Design", val: "UX Architecture" },
                    { icon: <BarChart3 size={18} />, label: "Engineering", val: "Scalable Systems" },
                    { icon: <Globe size={18} />, label: "Growth", val: "Global Marketing" },
                    { icon: <ShieldCheck size={18} />, label: "Operations", val: "Risk & Governance" }
                  ].map((role, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="group relative flex items-center justify-between p-4 border-b border-white/5 last:border-0 cursor-default"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

                      <div className="flex items-center gap-5 z-10">
                        <div className="text-blue-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          {role.icon}
                        </div>
                        <div>
                          <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-blue-500 transition-colors">
                            {role.label}
                          </p>
                          <p className="text-md font-bold text-white uppercase tracking-tight">
                            {role.val}
                          </p>
                        </div>
                      </div>

                      <div className="z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-blue-500">
                        <ArrowRight size={16} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 text-center space-y-3">
                  <p className="text-xl font-bold tracking-widest text-white uppercase italic">
                    InitiotechMedia
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">
                    Driving excellence through visionary leadership and tactical innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
