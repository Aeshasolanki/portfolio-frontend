"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
          Terms of{" "}
          <span className="text-blue-400 italic font-medium tracking-normal">
            Service
          </span>
        </h1>

        {/* Metadata */}
        <p className="text-blue-400 mb-12 uppercase tracking-[0.2em] text-[10px] font-bold">
          Effective Date: February 2026
        </p>

        {/* Sections */}
        <div className="space-y-12 text-zinc-400 leading-relaxed text-lg font-normal">
          
          {/* Section 1 */}
          <div>
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this portfolio website, you agree to comply with and be bound by the following terms. These terms govern your interaction with my digital work, case studies, and contact services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              2. Intellectual Property Rights
            </h2>
            <p className="mb-4">
              All content on this site, including but not limited to UI/UX designs, case study documentation, branding assets, and code snippets, are my intellectual property unless otherwise stated.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
              <li>You may not reproduce or redistribute any design assets without explicit permission.</li>
              <li>Case studies are for viewing purposes and should not be used as your own professional material.</li>
              <li>Unauthorized use of my logo or brand identity is strictly prohibited.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              3. Professional Engagements
            </h2>
            <p>
              Submitting an inquiry through the "Hire Me" button does not establish a formal contract. Work-for-hire agreements are subject to separate, signed legal contracts outlining specific project scope, timelines, and payment terms.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              4. Limitation of Liability
            </h2>
            <p>
              While I strive for 100% uptime and accuracy in my work, this website is provided "as is." I am not liable for any technical issues, data inaccuracies, or damages arising from the use of this site or external links provided within my projects.
            </p>
          </div>

          {/* Section 5 */}
          <div className="pb-20">
            <h2 className="font-[var(--font-title)] text-2xl font-extrabold text-blue-400 mb-4 tracking-tight">
              5. Changes to Terms
            </h2>
            <p>
              I reserve the right to modify these terms at any time. Significant changes will be noted by updating the "Effective Date" at the top of this page.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
