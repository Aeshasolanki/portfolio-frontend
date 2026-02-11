"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CookiePolicy() {
  // Ensures the page starts at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    // font-sans ensures Schibsted Grotesk is active
    <section className="min-h-screen bg-[#0a0a0a] py-32 px-6 md:px-24 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main Header: Bold and tight tracking */}
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
          Cookie <span className="text-[#ff7300] italic font-light tracking-normal">Policy</span>
        </h1>
        <p className="text-gray-500 mb-12 uppercase tracking-[0.2em] text-[10px] font-bold">
          Last Updated: February 2026
        </p>

        <div className="space-y-12 text-gray-400 leading-relaxed text-lg font-normal">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
              1. What are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. 
              They help the site recognize your device and remember information about your visit, 
              like your preferred language and other settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
              2. How I Use Cookies
            </h2>
            <p className="mb-4">As a minimalist portfolio, I use cookies for limited purposes:</p>
            <ul className="list-disc pl-6 space-y-4 marker:text-[#ff7300]">
              <li>
                <strong className="text-white">Essential Cookies:</strong> Necessary for the website to function (e.g., keeping the dark mode setting).
              </li>
              <li>
                <strong className="text-white">Analytics Cookies:</strong> To understand how visitors interact with my projects (e.g., Google Analytics).
              </li>
              <li>
                <strong className="text-white">Preference Cookies:</strong> To remember your choices for a smoother experience.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
              3. Third-Party Cookies
            </h2>
            <p>
              Some projects embedded in my portfolio (like YouTube videos or Dribbble shots) 
              may set their own cookies. I do not have control over these third-party cookies.
            </p>
          </div>

          <div className="pb-20">
            <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
              4. Managing Cookies
            </h2>
            <p>
              Most web browsers allow you to control cookies through their settings. 
              You can choose to block or delete cookies, but this may affect the 
              interactivity of certain sections of this portfolio.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}