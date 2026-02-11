"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Background from "./background";

interface Blog {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  content: string;
  author_name: string;
  category: string;
  tags: string[];
  status: string;
  created_at: string;
  updated_at: string;
  image_url?: string; // optional if you add images in the future
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Fetch blogs from backend API
  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://portfolio-backend-clhc.onrender.com/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main id="blogs" className="relative min-h-screen text-white overflow-x-hidden">
      
      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Background />
      </div>

      {/* ================= CONTENT ================= */}
      <section className="relative z-10 pt-32 pb-48">
        
        {/* HEADER */}
        <div className="px-6 md:px-16 lg:px-24 space-y-10">
          
          <span className="inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] 
          bg-blue-950/30 border border-blue-900/40 text-blue-400 font-bold">
            Thought Leadership
          </span>

          <h1 className="font-[var(--font-title)] text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Latest
            <span className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 via-blue-200 to-blue-600">
              Insights & Blogs
            </span>
          </h1>

          <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-blue-700" />
        </div>

        {/* BLOG LIST */}
        <div className="mt-32 space-y-40 w-full">
          {blogs.map((blog) => (
            <article key={blog.id} className="w-full">

              {/* IMAGE */}
              {blog.image_url && (
                <div className="flex justify-center">
                  <div
                    className="
                      relative 
                      w-full 
                      max-w-7xl
                      h-[35vh] md:h-[60vh]
                      overflow-hidden
                      border border-blue-900/40
                      rounded-xl
                      shadow-[0_0_30px_rgba(37,99,235,0.15)]
                    "
                  >
                    <Image
                      src={blog.image_url}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* CONTENT */}
              <div className="w-full space-y-8 mt-12">
                <div className="px-6 md:px-16 lg:px-24 space-y-6">

                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">
                      {blog.category ?? "General"}
                    </span>
                  </div>

                  <h2 className="font-[var(--font-title)] text-4xl md:text-6xl font-bold tracking-tight 
                  hover:text-blue-400 transition-colors uppercase">
                    {blog.title}
                  </h2>

                  {blog.short_description && (
                    <p className="text-zinc-400 text-lg md:text-2xl leading-relaxed whitespace-pre-line max-w-6xl">
                      {blog.short_description}
                    </p>
                  )}

                  <p className="text-zinc-400 text-lg md:text-2xl leading-relaxed whitespace-pre-line max-w-6xl">
                    {blog.content}
                  </p>

                  <div className="pt-8 border-t border-blue-900/30 text-sm font-mono text-zinc-500 flex gap-4">
                    <span className="text-white">By {blog.author_name ?? "Admin"}</span>
                    <span className="opacity-30">•</span>
                    <span>{new Date(blog.created_at).toDateString()}</span>
                  </div>

                </div>
              </div>
            </article>
          ))}
          {blogs.length === 0 && (
            <p className="text-center text-gray-400 mt-20 text-xl">No blogs found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
