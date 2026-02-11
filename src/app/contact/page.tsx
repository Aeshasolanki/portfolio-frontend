"use client";
import React from 'react';
import { Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6 md:px-16 py-32 font-sans">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-16">

        {/* Left Side: Form */}
        <div className="flex-1 bg-[#0a0a0a] p-10 rounded-[40px] border border-zinc-900 shadow-lg shadow-black/20">
          <form className="space-y-6">
            <input 
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111111] border-b border-zinc-700 py-4 px-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-600 transition"
            />
            <input 
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#111111] border-b border-zinc-700 py-4 px-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-600 transition"
            />
            <textarea 
              rows={5}
              placeholder="Share your thoughts"
              className="w-full bg-[#111111] border-b border-zinc-700 py-4 px-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-600 transition resize-none"
            />
            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
            >
              Share Your Feedback <Send size={18} />
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info / Stylized */}
        <div className="flex-1 flex flex-col justify-center relative p-10">
          {/* Decorative shape */}
          <div className="absolute -top-16 -right-16 w-80 h-80 border border-zinc-700 rounded-full opacity-10 pointer-events-none"></div>

          <h2 className="text-5xl font-bold text-white uppercase leading-tight tracking-tight relative z-10">
            Contact <span className="block">Us</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 my-6"></div>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
            It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!
          </p>
        </div>

      </div>
    </main>
  );
}
