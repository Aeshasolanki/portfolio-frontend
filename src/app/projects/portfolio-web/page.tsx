"use client";
import React from "react";

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-black px-6 md:px-20 py-24 text-white font-sans">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title Section */}
        <div>
          <span className="text-red-600 text-xs tracking-widest uppercase">
            UI/UX & Frontend Development
          </span>
          <h1 className="text-red-600 5xl md:text-7xl font-black mt-4">
            Portfolio Website
          </h1>
        </div>

        {/* Description + Image Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              A high-performance digital showcase designed with a "performance-first" mindset. This portfolio utilizes server-side rendering and advanced image optimization to achieve near-perfect Core Web Vitals. The minimalist dark aesthetic is paired with a sophisticated motion system that guides the user's eye through the project archive without overwhelming the senses.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              The project features complex layout animations using Framer Motion, including staggered entrance effects and smooth page transitions. Every interaction—from the hover states on project cards to the scroll-based reveals—was engineered for maximum fluidness and a premium "native app" feel on the web.
            </p>

            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Next.js</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Tailwind CSS</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Framer Motion</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Lucide Icons</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 rounded-3xl overflow-hidden border border-zinc-800/50">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Portfolio Design Preview"
              className="w-full h-auto rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}