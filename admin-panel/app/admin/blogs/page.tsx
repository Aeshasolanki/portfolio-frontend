"use client";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  content: string;
  author_name: string;
  category: string;
  status: string;
}

export default function AdminBlogs() {
  const API_URL = "https://portfolio-backend-clhc.onrender.com/api/blogs";

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    short_description: "",
    content: "",
    author_name: "",
    category: "",
    status: "published",
    image: null as File | null,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  const handleChange = (e: any) => {
    if (e.target.type === "file") {
      setForm({ ...form, [e.target.name]: e.target.files?.[0] ?? null });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value || "" });
    }
  };

  const addBlog = async () => {
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("slug", form.slug);
      formData.append("short_description", form.short_description);
      formData.append("content", form.content);
      formData.append("author_name", form.author_name);
      formData.append("category", form.category);
      formData.append("status", form.status);
      if (form.image) formData.append("image", form.image);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to add blog");

      setForm({
        title: "",
        slug: "",
        short_description: "",
        content: "",
        author_name: "",
        category: "",
        status: "published",
        image: null,
      });
      fetchBlogs();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const deleteBlog = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete blog");
      fetchBlogs();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Blogs Admin</h1>

      {/* Add Blog Form */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {Object.keys(form).map((key) =>
          key === "content" || key === "short_description" ? (
            <textarea
              key={key}
              name={key}
              value={(form as any)[key] || ""}
              onChange={handleChange}
              rows={4}
              placeholder={key}
              className="border p-3 md:col-span-2 bg-black"
            />
          ) : key === "image" ? (
            <input
              key={key}
              name={key}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="border p-3 bg-black"
            />
          ) : (
            <input
              key={key}
              name={key}
              value={(form as any)[key] || ""}
              onChange={handleChange}
              placeholder={key}
              className="border p-3 bg-black"
            />
          )
        )}
      </div>

      <button onClick={addBlog} className="bg-cyan-500 px-6 py-2 text-black mb-10">
        Add Blog
      </button>

      {/* Blogs Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Slug</th>
              <th className="py-2 px-4 border-b">Short Description</th>
              <th className="py-2 px-4 border-b">Content</th>
              <th className="py-2 px-4 border-b">Author</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((b) => (
              <tr key={b.id} className="hover:bg-gray-900">
                <td className="py-2 px-4 border-b">{b.id}</td>
                <td className="py-2 px-4 border-b">{b.title}</td>
                <td className="py-2 px-4 border-b">{b.slug}</td>
                <td className="py-2 px-4 border-b">{b.short_description}</td>
                <td className="py-2 px-4 border-b">{b.content}</td>
                <td className="py-2 px-4 border-b">{b.author_name}</td>
                <td className="py-2 px-4 border-b">{b.category}</td>
                <td className="py-2 px-4 border-b">{b.status}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => deleteBlog(b.id)}
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
