"use client";
import React from "react";
import { motion } from "framer-motion";
import { Smile, ThumbsUp } from "lucide-react"; // Icons from lucide-react

export default function DemoWebsitesSection() {

  const scrollToProjects = () => {
    // Looks for the element with id="projects"
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen bg-[#fafafa] overflow-hidden px-2 md:px-20 flex items-center justify-center">

      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-transparent blur-[120px]" />
      </div>

      {/* Watermark 56 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="
            text-[20rem] md:text-[34rem] lg:text-[40rem]
            font-extrabold
            leading-none
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-gray-300
            via-gray-200
            to-transparent
          "
        >
          56
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl text-center space-y-8">

        <span className="inline-block text-xs tracking-[0.25em] uppercase font-semibold text-blue-600">
          Award-Winning Design Collection
        </span>

        <h1
          className="font-[var(--font-title)] text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
          style={{
            textShadow: `
              0 0 12px rgba(59,130,246,0.35),
              0 0 30px rgba(59,130,246,0.35),
              0 0 60px rgba(59,130,246,0.25),
              0 0 90px rgba(59,130,246,0.15)
            `,
          }}
        >
          Build faster with{" "}
          <span className="text-blue-400">56+</span> carefully crafted demo{" "}
          <span className="font-[var(--font-title)] font-medium">websites & Applications</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
          Explore a curated set of beautifully designed home demos. Fully
          flexible, modular, and easy to customize — designed to scale with
          your vision.
        </p>

       <div className="flex items-center justify-center gap-4 pt-4">
          {/* 2. Added onClick trigger */}
          <button 
            onClick={scrollToProjects}
            className="rounded-full bg-gray-900 px-8 py-4 text-white font-semibold transition hover:bg-gray-800 active:scale-95"
          >
            Explore Demos
          </button>
        </div>
      </div>
     

      {/* Floating Smiley Icon */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        className="absolute top-40 left-20 z-20 bg-white rounded-full p-4 shadow-lg cursor-pointer"
      >
        <Smile className="w-6 h-6 text-yellow-400" />
      </motion.div>

      {/* Floating Thumbs-Up Icon */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
        className="absolute bottom-60 right-10 z-20 bg-white rounded-full p-4 shadow-lg cursor-pointer"
      >
        <ThumbsUp className="w-6 h-6 text-blue-500" />
      </motion.div>

    </section>
  );
}
