"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#020617]/80 backdrop-blur-md border-b border-white/5 px-12 py-5 flex justify-between items-center font-sans">

      {/* Logo */}
      <div className="text-blue-500 font-black text-2xl tracking-tighter cursor-pointer">
       
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-10 items-center">
        <li>
          <Link href="/" className="text-gray-400 hover:text-blue-500 text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
            Home
          </Link>
        </li>

        

        <li>
          <Link href="/#projects" className="text-gray-400 hover:text-blue-500 text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
            Projects
          </Link>
        </li>

      
         <li>
          <Link href="/#contacts" className="text-gray-400 hover:text-blue-500 text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
            Contacts
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-blue-900/20">
        Hire Me
      </button>
    </nav>
  );
}
