"use client";
import React from "react";

export default function WeatherAppPage() {
  return (
    <section className="min-h-screen bg-black px-6 md:px-20 py-24 text-white font-sans">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title Section */}
        <div>
          <span className="text-red-600 text-xs tracking-widest uppercase">
            Weather App
          </span>
          <h1 className="text-red-600 5xl md:text-7xl font-black mt-4">
            Weather Forecast
          </h1>
        </div>

        {/* Description + Image Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              A comprehensive educational ecosystem engineered to deliver high-quality video content and interactive learning experiences. The platform utilizes Next.js for lightning-fast page transitions and Firebase for real-time data synchronization, ensuring that student progress, quiz results, and course completions are updated instantly across all devices.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Key features include an adaptive video player with playback speed controls, a robust quiz engine with immediate feedback, and a personalized student dashboard. The backend architecture supports secure file storage for course materials and a sophisticated tracking system that visualizes learning milestones through interactive progress bars.
            </p>

            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Next.js</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Firebase</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Tailwind</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Cloudinary</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 rounded-3xl overflow-hidden border border-zinc-800/50">
            <img
              src="https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Weather App Interface"
              className="w-full h-auto rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}