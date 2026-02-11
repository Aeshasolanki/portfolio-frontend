"use client";
import React from "react";
import { motion } from "framer-motion";

export default function JobPortalPage() {
  return (
    <section className="min-h-screen bg-black px-6 md:px-20 py-24 text-white font-sans">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title Section */}
        <div>
          <span className="text-red-600 text-xs tracking-widest uppercase">
            Full Stack Development
          </span>
          <h1 className="text-red-600 5xl md:text-7xl font-black mt-4">
            Job Portal System
          </h1>
        </div>

        {/* Description + Image Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              A robust recruitment engine designed to bridge the gap between talent and opportunity. The platform features a high-concurrency architecture that allows recruiters to post vacancies and track applicants through a custom-built pipeline, while job seekers benefit from lightning-fast search indexing and personalized job alerts.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Engineered with advanced role-based access control, the system ensures secure data handling for sensitive resume information. Features include a real-time application status tracker, automated email notifications for interview scheduling, and a comprehensive analytics dashboard for hiring managers to monitor recruitment KPIs.
            </p>

            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">React</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Node.js</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Express</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 rounded-3xl overflow-hidden border border-zinc-800/50">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Job Portal Interface"
              className="w-full h-auto rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}