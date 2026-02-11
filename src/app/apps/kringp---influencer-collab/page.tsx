"use client";

import Background from "@/app/components/background";
import { motion } from "framer-motion";

export default function KringPPage() {
  return (
    // FIX: Changed h-full to min-h-screen so it fills the device height.
    // FIX: Added justify-center to center content vertically.
    <section className="relative min-h-screen w-full overflow-hidden px-6 md:px-20 flex items-center justify-center text-white bg-[#020617]">
      
      {/* Background handles the grid and glow effects */}
      <Background />

      {/* FIX: relative z-10 ensures your text stays on top of the background dots/glow */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 w-full py-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // viewport once: true makes sure it doesn't disappear when you scroll away
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 text-left"
        >
          <span className="inline-block text-xs tracking-[0.35em] uppercase text-blue-400 font-semibold">
            Mobile Application
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            KringP <span className="text-blue-500">Influencer Collab</span>
          </h1>

          <p className="text-zinc-300 text-lg max-w-xl">
            Connecting influencers & business owners for promotion.
          </p>

          <div className="space-y-4 text-zinc-400 text-sm md:text-base max-w-xl">
            <p>
              KringP connects influencers with businesses for promotional campaigns. 
              Manage collaborations, payments, and performance analytics in one place.
            </p>
          </div>

          {/* TECH STACK */}
          <div className="pt-4">
            <h3 className="text-[10px] font-bold uppercase text-zinc-500 mb-3 tracking-widest">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Firebase", "Node.js", "Stripe API"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] text-zinc-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="https://apps.apple.com/in/app/kringp/id6747716001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full
              bg-blue-600 px-8 py-4 font-bold text-white
              transition hover:scale-105 hover:bg-blue-500 shadow-xl shadow-blue-600/20"
            >
              View Live App →
            </a>
          </div>
        </motion.div>

        {/* RIGHT – IMAGE (ICON) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative group">
            {/* Soft Glow behind the image */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000" />
            
            <motion.img
              src="/k.png"
              alt="KringP App Icon"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-[50px] md:rounded-[80px] object-cover shadow-2xl border border-white/5"
            />
          </div>
        </motion.div>

      </div>

     
      
    </section>
  );
}