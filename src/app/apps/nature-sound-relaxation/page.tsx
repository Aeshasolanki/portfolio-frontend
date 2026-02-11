"use client";

import Background from "@/app/components/background";
import { motion } from "framer-motion";

export default function MySleepAffirmationsPage() {
  return (
    <section className="relative h-full w-full overflow-hidden px-6 md:px-20 flex items-center text-white">
      <Background />
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <span className="inline-block text-xs tracking-[0.35em] uppercase text-blue-400 font-medium">
            Mobile Application
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            My Sleep <span className="text-blue-400">Affirmations</span>
          </h1>

          <p className="text-zinc-300 text-lg max-w-xl">
            Sleep better & manifest dreams
          </p>

          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed max-w-xl text-sm md:text-base">
              Sleep Affirmations provides calming audio, guided affirmations, and nightly routines 
              designed to improve sleep quality and promote positive thinking.
            </p>
            <p className="text-zinc-400 leading-relaxed max-w-xl text-sm md:text-base">
              Choose from soothing themes, set sleep timers, and track your sleep patterns 
              for deeper, more restorative rest.
            </p>
          </div>

          {/* TECH STACK */}
          <div className="pt-4">
            <h3 className="text-xs font-bold uppercase text-zinc-500 mb-4 tracking-widest">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Firebase", "Expo", "Audio API"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] tracking-wider text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="https://apps.apple.com/us/app/my-sleep-affirmations/id1575540432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full
              bg-blue-500 px-8 py-4 font-bold text-black
              transition hover:scale-105 hover:bg-blue-400 shadow-lg shadow-blue-500/20"
            >
              View Live App →
            </a>
          </div>
        </motion.div>

        {/* RIGHT – ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <motion.img
            src="/sleep.png"
            alt="My Sleep Affirmations Icon"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-[48px] object-cover"
          />
        </motion.div>

      </div>

      {/* BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center px-20">
        <div className="w-full h-[1px] bg-zinc-800/60" />
      </div>
    </section>
  );
}