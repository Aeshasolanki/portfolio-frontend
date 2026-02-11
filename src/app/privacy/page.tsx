"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  // Reset scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#020617] py-32 px-6 md:px-24 font-sans text-white overflow-hidden">
      
      {/* Soft blue ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-4xl mx-auto space-y-12 z-10"
      >
        {/* Main Heading */}
        <h1 className="font-[var(--font-title)] text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
          Privacy{" "}
          <span className="text-blue-400 italic font-medium tracking-normal">
            Policy
          </span>
        </h1>

        {/* Metadata */}
        <p className="text-blue-400 mb-12 uppercase tracking-[0.2em] text-[10px] font-bold">
          Last Updated: February 2026
        </p>

        {/* Sections */}
        <div className="space-y-12 text-zinc-400 leading-relaxed text-lg font-normal">
          
          {/* Section 1 */}
          <div>
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              1. Information Collection
            </h2>
            <p className="mb-4">
              As a UI/UX Designer, I respect your privacy. This site does not require a login or personal account. I only collect information that you voluntarily provide through:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
              <li>Contact forms (Name, Email, Message)</li>
              <li>Email subscriptions</li>
              <li>Direct inquiries for project collaborations</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              2. Use of Information
            </h2>
            <p className="mb-4">
              The information provided is used solely for:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
              <li>Responding to your specific design project inquiries.</li>
              <li>Sending requested portfolio updates or CV downloads.</li>
              <li>Improving the user experience of this website.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              3. Data Security
            </h2>
            <p>
              I implement industry-standard security measures to protect your data. Your information is never sold to third-party advertisers or data brokers.
            </p>
          </div>

          {/* Section 4 */}
          <div className="pb-20">
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              4. Contact Me
            </h2>
            <p>
              If you have any questions regarding this policy, feel free to reach out via the "Hire Me" button or through my social media channels.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
