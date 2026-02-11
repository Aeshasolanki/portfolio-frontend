"use client";
import React, { useRef, useState } from "react";
import { Send } from "lucide-react";
import { sendForm, send } from "@emailjs/browser";
import Background from "./background";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(null);
    setError(null);

    sendForm(
      "service_3e24nha",
      "template_0gso5sj",
      formRef.current,
      "T-kg3C7q_Oienn6nu"
    )
      .then(() => {
        const formData = new FormData(formRef.current!);
        send(
          "service_3e24nha",
          "template_q4i1cpl",
          {
            from_name: formData.get("from_name"),
            from_email: formData.get("from_email"),
          },
          "T-kg3C7q_Oienn6nu"
        )
          .then(() => {
            setSuccess("Message sent! A confirmation email has been sent to you.");
            formRef.current?.reset();
          })
          .catch((err) => {
            console.error("Confirmation email failed:", err);
            setError("Message sent but failed to send confirmation email.");
          });
      })
      .catch((err) => {
        console.error("Form email failed:", err);
        setError("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
   <main id="contacts" className="h-auto bg-[#0b0e1a] pt-0 pb-20 px-6 md:px-16 font-sans relative overflow-hidden">
      <Background />

      {/* Glowing Background Shapes */}
     

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left - Contact Text */}
        <div className="flex-1 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_0_15px_rgba(0,120,255,0.6)]">
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Us</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
            It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!
          </p>
        </div>

        {/* Right - Glassmorphic Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 bg-[#111125] border border-blue-600/40 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-2xl shadow-blue-500/20 hover:shadow-[0_0_30px_rgba(0,120,255,0.4)] transition-all duration-500 flex flex-col gap-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full bg-[#111125]/80 border border-blue-500/40 rounded-xl py-4 px-6 text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full bg-[#111125]/80 border border-blue-500/40 rounded-xl py-4 px-6 text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Share your thoughts"
            className="w-full bg-[#111125]/80 border border-blue-500/40 rounded-xl py-4 px-6 text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            required
          />
          {success && <p className="text-green-400">{success}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 border border-blue-500 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,120,255,0.7)] hover:shadow-[0_0_30px_rgba(0,120,255,0.9)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "SHARE YOUR FEEDBACK"} <Send size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}
