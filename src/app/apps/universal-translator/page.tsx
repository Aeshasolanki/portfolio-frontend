"use client";

import Background from "@/app/components/background";
import { motion } from "framer-motion";

export default function UniversalTranslatorPage() {
  return (
    <section className="relative h-full w-full overflow-hidden px-6 md:px-20 flex items-center text-white">
      <Background/>
      
      {/* Adjusted grid: Content gets 2 parts, Icon gets 1 part */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1fr] gap-12 items-center">

        {/* LEFT CONTENT - Larger Area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-block text-xs tracking-[0.35em] uppercase text-blue-400 font-medium">
            Mobile Application
          </span>

          <h1 className="text-4xl md:text-7xl font-black leading-tight">
            Universal <span className="text-blue-400">Translator</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl">
            Multiple languages translator using text, voice, and images with AI-powered accuracy.
          </p>

          <p className="text-zinc-400 leading-relaxed max-w-xl text-sm md:text-base">
            Perfect for travelers, professionals, and global communication with offline support and lightning-fast processing.
          </p>

          {/* TECH STACK */}
          <div className="pt-4">
            <h3 className="text-xs font-bold uppercase text-zinc-500 mb-4 tracking-widest">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Firebase", "Google Cloud", "TensorFlow Lite"].map((tech) => (
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
              href="https://apps.apple.com/us/app/ai-translator-live-voice-scan/id1577347881"
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

        {/* RIGHT – ICON (Scaled down and positioned beside) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <motion.img
            src="/universal translator.png"
            alt="Universal Translator Icon"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            /* Reduced size from 420px to 280px-320px range */
            className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-[48px] border border-white/10 object-cover shadow-2xl"
          />
        </motion.div>
      </div>

      {/* GREY DIVIDER LINE */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center px-20">
        <div className="w-full h-[1px] bg-zinc-800/60" />
      </div>
    </section>
  );
}