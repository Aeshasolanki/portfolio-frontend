"use client";

import { motion } from "framer-motion";

export default function AiCalorieTrackerPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070f] px-6 md:px-20 py-28 text-white">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/15 to-transparent blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block text-xs tracking-[0.35em] uppercase text-blue-400">
            Mobile Application
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            AI Calorie{" "}
            <span className="text-blue-400">Tracker</span>
          </h1>

          <p className="text-zinc-300 text-lg max-w-xl">
            AI powered calorie tracker with diet suggestions, weight tracker &
            water reminder
          </p>

          <p className="text-zinc-400 leading-relaxed max-w-xl">
            Track calories, diet, and water intake with AI-generated suggestions.
            Monitor weight progress and stay healthy with personalized plans.
          </p>

          <p className="text-zinc-400 leading-relaxed max-w-xl">
            Perfect for fitness enthusiasts, diet planners, and anyone wanting a
            healthier lifestyle.
          </p>

          {/* TECH STACK */}
          <div className="pt-6">
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {["React Native", "Firebase", "Expo", "AI API"].map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs tracking-wider"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <a
              href="https://apps.apple.com/sa/app/moontech-for-influencers/id1670279602"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-blue-400"
            >
              View Live App →
            </a>
          </div>
        </motion.div>

        {/* RIGHT – APP ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <motion.img
            src="/aicard.png"
            alt="AI Calorie Tracker Icon"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[260px] h-[260px] rounded-[48px] shadow-2xl"
          />

          {/* Icon glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[90px]" />
        </motion.div>

      </div>
    </section>
  );
}
