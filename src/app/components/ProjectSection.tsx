"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Background from "./background";
import { CheckCircle, Trophy, Star, Smile } from "lucide-react";

interface Project {
  id: number;
  name: string;
  slug?: string;
  category?: string;
  tagline?: string;
  description?: string;
  description_secondary?: string;
  icon_url?: string;
  app_store_url?: string;
  tech_stack?: string;
}

interface ProjectSectionProps {
  limit?: number;
}

export default function ProjectSection({ limit }: ProjectSectionProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://portfolio-backend-clhc.onrender.com/api/apps")
      .then((res) => res.json())
      .then((data) => setProjects(limit ? data.slice(0, 4) : data));
  }, [limit]);

  const stats = [
    { value: "2K", label: "Projects Completed", icon: CheckCircle },
    { value: "16", label: "My Achievements", icon: Trophy },
    { value: "12+", label: "Years of Experience", icon: Star },
    { value: "98%", label: "Happy Customers", icon: Smile },
  ];

  return (
    <section id="projects" className="relative w-full">
      <Background />

      {/* Header */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-8 pt-12 pb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white">
          My <span className="text-blue-400 uppercase">Projects</span>
        </h2>
        <p className="text-zinc-500 mt-4 tracking-widest uppercase text-xs md:text-sm">
          Scroll to experience the journey
        </p>
      </div>

      {/* Sticky Project Cards */}
      <div className="relative z-10" style={{ height: `${projects.length * 100}vh` }}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="sticky top-0 h-screen flex items-center justify-center"
            style={{ zIndex: index }}
          >
   <motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center 
  w-full h-[85vh] max-w-7xl mx-auto px-12 md:px-20 py-16
  bg-[#020617]/40 backdrop-blur-md rounded-[40px]
  border border-cyan-500/30 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]
  relative overflow-hidden"
  style={{ transform: `translateY(${index * 40}px)` }}
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: index * 0.1 }}
>
  {/* Inner Glow Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />

  {/* Left side - Project Details */}
  <div className="text-white space-y-6 max-w-2xl z-10">
    {project.category && (
      <p className="text-cyan-400 font-medium text-sm tracking-wide uppercase">
        {project.category}
      </p>
    )}

    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
      {project.name}
    </h2>

    {project.description && (
      <p className="text-gray-300 leading-relaxed text-lg">
        {project.description}
      </p>
    )}

    {/* --- NEW TECH STACK SECTION --- */}
   {/* TechStack Section - Improved Visibility Logic */}
{(project.tech_stack || project.slug) && (
  <div className="space-y-3 pt-2">
    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-widest">
      TechStack:
    </h4>
    <div className="flex flex-wrap gap-3">
      {(typeof project.tech_stack === 'string' 
        ? project.tech_stack.split(",") 
        : Array.isArray(project.tech_stack) 
          ? project.tech_stack 
          : project.slug?.split(",") || []
      ).map((tech, i) => (
        <span
          key={i}
          className="px-4 py-1.5 rounded-xl border border-cyan-400/50 
          bg-cyan-400/10 text-sm font-medium text-white
          shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-sm
          hover:bg-cyan-400/20 transition-colors"
        >
          {tech.trim ? tech.trim() : tech}
        </span>
      ))}
    </div>
  </div>
)}
    {/* ------------------------------ */}

    {project.description_secondary && (
      <p className="text-gray-500 text-sm">
        {project.description_secondary}
      </p>
    )}

    {project.app_store_url && (
      <div className="pt-4">
        <a
          href={project.app_store_url}
          target="_blank"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-500 
          px-8 py-3 rounded-full text-white font-bold transition-all 
          shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95"
        >
          View Live App →
        </a>
      </div>
    )}
  </div>

  {/* Right side - Animated Icon/Image */}
  {project.icon_url && (
    <motion.div
      className="flex justify-center md:justify-end relative"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Behind-the-icon Sphere Glow */}
      <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full scale-75" />
      
      <img
        src={project.icon_url}
        alt={project.name}
        className="relative z-10 rounded-[3rem] shadow-2xl w-80 h-80 object-cover
         backdrop-blur-xl"
      />
    </motion.div>
  )}
</motion.div>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      {limit && (
        <div className="relative z-20 flex justify-center mt-16 mb-12">
          <Link
            href="/more-projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base transition shadow-lg shadow-blue-900/20"
          >
            + More Projects
          </Link>
        </div>
      )}

      {/* Stats */}
      <div className="relative z-20 mt-16 mb-40 px-6">
        <div className="flex flex-wrap justify-center gap-16 md:gap-24 lg:gap-32">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border border-zinc-800/40 flex flex-col items-center justify-center text-center hover:border-blue-500/40 transition-all duration-500 group bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-sm lg:text-base text-zinc-400 uppercase tracking-[0.2em] mt-4 px-6 leading-relaxed">
                  {stat.label}
                </p>
                <Icon className="mt-6 w-8 h-8 md:w-10 md:h-10 text-blue-500/60 group-hover:text-blue-400 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
