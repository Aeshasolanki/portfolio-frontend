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
  image_url?: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "https://portfolio-backend-clhc.onrender.com/api/blogs"
      );
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

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Background />
      </div>

      {/* BLOG CONTENT */}
      <section className="relative z-10 pt-32 pb-48 space-y-40">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 md:px-16 lg:px-24"
          >
            {/* LEFT SIDE CONTENT */}
            <div className="flex-1 md:flex-[0.45] space-y-5">
              <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest">
                {blog.category ?? "General"}
              </span>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight hover:text-cyan-400 transition-colors">
                {blog.title}
              </h2>

              {blog.short_description && (
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {blog.short_description}
                </p>
              )}

              {blog.content && (
                <div className="mt-4 text-zinc-300 text-base md:text-lg whitespace-pre-line">
                  {blog.content}
                </div>
              )}

              <div className="pt-4 text-sm font-mono text-zinc-500 flex gap-3 flex-wrap">
                <span className="text-white">By {blog.author_name ?? "Admin"}</span>
                <span className="opacity-30">•</span>
                <span>{new Date(blog.created_at).toDateString()}</span>
                <span className="opacity-30">•</span>
                <span>Status: {blog.status ?? "Published"}</span>
              </div>

              {blog.tags?.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-600/20 text-cyan-400 px-2 py-1 rounded-md text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {blog.slug && (
                <div className="pt-2 text-xs text-zinc-500">
                  Slug: <span className="text-white">{blog.slug}</span>
                </div>
              )}
            </div>

            {/* RIGHT SIDE IMAGE */}
            {blog.image_url && (
              <div className="flex-1 md:flex-[0.55] relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border border-blue-900/40">
                <Image
                  src={blog.image_url}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            )}
          </article>
        ))}

        {blogs.length === 0 && (
          <p className="text-center text-gray-400 mt-20 text-xl">No blogs found.</p>
        )}
      </section>
    </main>
  );
}
