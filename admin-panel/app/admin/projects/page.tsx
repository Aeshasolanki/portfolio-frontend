"use client";

import { useEffect, useState } from "react";

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [icon, setIcon] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "",
    tagline: "",
    description: "",
    description_secondary: "",
    app_store_url: "",
  });

  const BASE_URL = "https://portfolio-backend-clhc.onrender.com";

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/apps`);
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setProjects([]);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProject = async () => {
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    if (icon) formData.append("icon", icon);

    await fetch(`${BASE_URL}/api/apps`, {
      method: "POST",
      body: formData,
    });

    setForm({
      name: "",
      slug: "",
      category: "",
      tagline: "",
      description: "",
      description_secondary: "",
      app_store_url: "",
    });

    setIcon(null);
    fetchProjects();
  };

  const deleteProject = async (id: number) => {
  if (!confirm("Are you sure you want to delete this project?")) return;

  try {
    await fetch(`${BASE_URL}/api/apps/${id}`, { method: "DELETE" });
    fetchProjects();
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="min-h-screen bg-[#020617] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* HEADER */}
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            🚀 Projects Admin
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Manage and organize your portfolio projects
          </p>
        </div>

        {/* ADD PROJECT CARD */}
        <div className="bg-[#0f172a]/80 backdrop-blur border border-cyan-500/20 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            Add New Project
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.keys(form).map((key) => (
              <input
                key={key}
                name={key}
                value={(form as any)[key]}
                onChange={handleChange}
                placeholder={key.replace(/_/g, " ")}
                className="bg-[#020617] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 transition"
              />
            ))}

            <div className="space-y-2">
              <input
                type="file"
                onChange={(e) => setIcon(e.target.files?.[0] || null)}
                className="bg-[#020617] border border-gray-700 rounded-xl px-4 py-3 w-full"
              />

              {icon && (
                <p className="text-xs text-cyan-400">
                  Selected: {icon.name}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={addProject}
            className="mt-6 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl font-semibold text-black"
          >
            + Add Project
          </button>
        </div>

        {/* PROJECTS LIST */}
        <div className="bg-[#0f172a]/80 backdrop-blur border border-cyan-500/20 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            Project Library
          </h2>

          <div className="space-y-6">
            {projects.length > 0 ? (
              projects.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#020617] border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition"
                >
                  <div className="flex flex-col md:flex-row gap-6">

                    {/* ICON */}
                    {p.icon_url && (
                      <img
                        src={p.icon_url.replace(
                          "localhost:5000",
                          "portfolio-backend-clhc.onrender.com"
                        )}
                        className="w-24 h-24 object-cover rounded-2xl"
                      />
                    )}

                    {/* DETAILS */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold">
                        {p.name}
                      </h3>

                      <p className="text-gray-400">{p.tagline}</p>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <p><span className="text-cyan-400">Slug:</span> {p.slug}</p>
                        <p><span className="text-cyan-400">Category:</span> {p.category}</p>
                      </div>

                      <p className="text-gray-300 whitespace-pre-wrap">
                        {p.description}
                      </p>

                      <p className="text-gray-500 whitespace-pre-wrap">
                        {p.description_secondary}
                      </p>

                      <a
                        href={p.app_store_url}
                        target="_blank"
                        className="text-cyan-400 underline break-all"
                      >
                        {p.app_store_url}
                      </a>
                    </div>

                    {/* ACTION */}
                    <div>
                      <button
                        onClick={() => deleteProject(p.id)}
                        className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-xl"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-10 text-lg">
                No projects found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
