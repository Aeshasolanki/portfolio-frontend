"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [projectCount, setProjectCount] = useState<number | null>(null);
  const [blogCount, setBlogCount] = useState<number | null>(null);
  const [inquiryCount, setInquiryCount] = useState<number | null>(null);

  const BASE_URL = "https://portfolio-backend-clhc.onrender.com";

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Projects
        try {
          const res = await fetch(`${BASE_URL}/api/apps`);
          if (!res.ok) throw new Error(`Projects API Error: ${res.status}`);
          const data = await res.json();
          setProjectCount(Array.isArray(data) ? data.length : 0);
        } catch (err) {
          console.error("Projects fetch failed:", err);
          setProjectCount(0);
        }

        // Blogs
        try {
          const res = await fetch(`${BASE_URL}/api/blogs`);
          if (!res.ok) throw new Error(`Blogs API Error: ${res.status}`);
          const data = await res.json();
          setBlogCount(Array.isArray(data) ? data.length : 0);
        } catch (err) {
          console.error("Blogs fetch failed:", err);
          setBlogCount(0);
        }

        // Inquiries
     try {
  const res = await fetch(`${BASE_URL}/api/inquiries`);
  if (!res.ok) throw new Error(`Inquiries API Error: ${res.status}`);
  const data = await res.json();
  setInquiryCount(Array.isArray(data) ? data.length : 0);
} catch (err) {
  console.error("Inquiries fetch failed:", err);
  setInquiryCount(0);
}

      } catch (err) {
        console.error("Unexpected error fetching counts:", err);
        setProjectCount(0);
        setBlogCount(0);
        setInquiryCount(0);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* HEADER */}
        <div>
          <h1 className="text-5xl font-bold tracking-tight">⚡ Admin Dashboard</h1>
          <p className="text-gray-400 mt-2 text-lg">
            Overview of your portfolio projects, blogs, and inquiries
          </p>
        </div>

        {/* COUNTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#0f172a]/80 p-6 rounded-2xl text-center shadow-lg border border-cyan-500/20">
            <h2 className="text-cyan-400 text-xl font-bold">Projects</h2>
            <p className="text-3xl font-bold mt-2">
              {projectCount !== null ? projectCount : "Loading..."}
            </p>
            <Link
              href="/admin/projects"
              className="mt-3 inline-block text-cyan-400 underline hover:text-cyan-300"
            >
              Manage Projects
            </Link>
          </div>

          <div className="bg-[#0f172a]/80 p-6 rounded-2xl text-center shadow-lg border border-cyan-500/20">
            <h2 className="text-cyan-400 text-xl font-bold">Blogs</h2>
            <p className="text-3xl font-bold mt-2">
              {blogCount !== null ? blogCount : "Loading..."}
            </p>
            <Link
              href="/admin/blogs"
              className="mt-3 inline-block text-cyan-400 underline hover:text-cyan-300"
            >
              Manage Blogs
            </Link>
          </div>

          <div className="bg-[#0f172a]/80 p-6 rounded-2xl text-center shadow-lg border border-cyan-500/20">
            <h2 className="text-cyan-400 text-xl font-bold">Inquiries</h2>
            <p className="text-3xl font-bold mt-2">
              {inquiryCount !== null ? inquiryCount : "Loading..."}
            </p>
            <Link
              href="/admin/inquiries"
              className="mt-3 inline-block text-cyan-400 underline hover:text-cyan-300"
            >
              Manage Inquiries
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
       
        

      </div>
    </div>
  );
}
