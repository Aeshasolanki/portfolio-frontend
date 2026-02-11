"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070f] pt-24 pb-10 px-6 md:px-16 font-sans relative overflow-hidden">

      {/* BACKGROUND STAR */}
      <div className="absolute left-10 top-20 opacity-5 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="white">
          <path d="M50 0L61 39H100L68 61L79 100L50 77L21 100L32 61L0 39H39L50 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* BRAND */}
          <div className="md:col-span-5 space-y-8">

            <div className="text-blue-500 font-extrabold text-3xl tracking-tighter uppercase">
             
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
              Get Ready To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-600 uppercase">
                Create Great
              </span>
            </h2>

            <div className="relative max-w-sm">
              
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-white font-black text-xl tracking-tight">Quick Link</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-medium">
              <li><Link href="#about" className="hover:text-blue-400 transition">About Me</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition">Service</Link></li>
            
             
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-4 space-y-8">
            <h4 className="text-white font-black text-xl tracking-tight">Contact</h4>

            <ul className="space-y-5">

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/40">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-zinc-400 text-sm font-medium">nafiz125@gmail.com</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/40">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-zinc-400 text-sm font-medium">3891 Ranchview Dr. Richardson</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/40">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-zinc-400 text-sm font-medium">01245789321</span>
              </li>

            </ul>

            {/* SOCIAL */}
            <div className="flex gap-3 pt-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-blue-900/40"
                >
                  <Icon size={16} />
                </Link>
              ))}

              {/* WhatsApp Icon */}
              <Link
                href="https://wa.me/1234567890" // Replace with your number
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 hover:bg-green-500 hover:text-white transition-all shadow-lg hover:shadow-green-900/40"
              >
                <FaWhatsapp size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-medium">
           
          </p>
          <div className="flex gap-8 text-zinc-500 text-xs font-medium">
            <Link href="/terms" className="hover:text-white transition">Terms & Condition</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors z-50 shadow-blue-900/40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </footer>
  );
}
