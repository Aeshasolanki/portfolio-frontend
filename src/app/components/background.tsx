"use client";

import React from "react";
import { motion } from "framer-motion";

const Star = ({ className }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0.3, scale: 0.8 }}
    animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.1, 0.8] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute ${className}`}
  >
    {/* Star Shape */}
    <div
      className="w-12 h-12 bg-blue-400"
      style={{
        clipPath:
          "polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)",
      }}
    />
    {/* Glow */}
    <div className="absolute inset-0 w-12 h-12 bg-blue-400 blur-xl opacity-50" />
  </motion.div>
);

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
      {/* BASE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f605_1px,transparent_1px),linear-gradient(to_bottom,#3b82f605_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CENTRAL RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#2563eb10_0%,transparent_70%)]" />

      {/* STARS */}
      <Star className="top-[25%] left-[10%] opacity-60" />
      <Star className="bottom-[20%] right-[15%] scale-50 opacity-30" />

      {/* AMBIENT CORNER BLUR */}
      <div className="absolute -inset-32 bg-blue-600/[0.015] blur-[160px] pointer-events-none" />
    </div>
  );
}
