"use client";
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

  const BASE_URL = "https://portfolio-backend-clhc.onrender.com";

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/blogs`);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Background />
      </div>

      <section className="relative z-10 pt-32 pb-40 px-6 md:px-16 lg:px-24">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Latest Blogs
        </h2>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-400 text-xl">
            No blogs found.
          </p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
              
              // Fix image URL if coming from localhost
              const imageUrl = blog.image_url
                ? blog.image_url.includes("localhost")
                  ? blog.image_url.replace(
                      "http://localhost:5000",
                      BASE_URL
                    )
                  : blog.image_url
                : null;

              return (
                <article
                  key={blog.id}
                  className="group bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20 flex flex-col"
                >
                  {/* IMAGE SECTION */}
 <div className="relative w-full h-100 overflow-hidden rounded-t-2xl">
  {imageUrl ? (
    <img
      src={imageUrl}
      alt={blog.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-500 text-sm">
      No Image Available
    </div>
  )}
</div>


                  {/* CONTENT SECTION */}
                  <div className="flex flex-col flex-1 p-6 space-y-4">

                    {/* Category */}
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
                      {blog.category || "General"}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold leading-snug group-hover:text-cyan-400 transition">
                      {blog.title}
                    </h3>

                    {/* Short Description */}
                    {blog.short_description && (
                      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                        {blog.short_description}
                      </p>
                    )}

                    {/* Trimmed Content Preview */}
                    {blog.content && (
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {blog.content.length > 200
                          ? blog.content.slice(0, 200) + "..."
                          : blog.content}
                      </p>
                    )}

                    <div className="flex-grow" />

                    {/* Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                      
                      {/* Author */}
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
                          {blog.author_name
                            ? blog.author_name.charAt(0).toUpperCase()
                            : "A"}
                        </div>
                        <span className="text-white font-medium">
                          {blog.author_name || "Admin"}
                        </span>
                      </div>

                      {/* Date */}
                      <span>
                        {new Date(blog.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Tags */}
                    {blog.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3">
                        {blog.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
