"use client";

export default function ThunderVPNProxyPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070f] px-6 md:px-20 py-24 text-white">

      {/* === Background Glow (same as AI Calorie) === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-gradient-to-tr from-blue-500/25 via-indigo-500/15 to-transparent
          blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">

        {/* Title */}
        <div className="flex items-center gap-4">
          <img
            src="/thundervpn.png"
            alt="Thunder VPN Proxy Icon"
            className="w-20 h-20 object-cover rounded-2xl shadow-lg shadow-blue-500/30"
          />

          <div>
            <span className="text-blue-400 text-xs tracking-widest uppercase">
              Mobile Application
            </span>

            <h1 className="text-4xl md:text-6xl font-black mt-2">
              Thunder VPN Proxy
            </h1>

            <p className="text-zinc-400 mt-2">
              Unlimited Proxy · 30+ Servers · Multiple Protocols
            </p>
          </div>
        </div>

        {/* Description + Tech Stack */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">

            <p className="text-zinc-300 text-lg leading-relaxed">
              Thunder VPN Proxy provides secure, fast, and unlimited VPN access.
              Connect to servers worldwide, protect your data on public Wi-Fi,
              and bypass geo-restrictions with ease.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Supports multiple protocols and 30+ servers for global coverage,
              ensuring your online activities remain private and safe.
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>

              <div className="flex flex-wrap gap-3">
                {["React Native", "Firebase", "OpenVPN", "Node.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs uppercase tracking-wider
                      bg-white/5 border border-white/10 rounded-full
                      hover:bg-blue-500/20 hover:border-blue-400/40 transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="https://apps.apple.com/us/app/thunder-vpn-proxy-unlimited/id1567076253"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full
                bg-blue-500 px-8 py-4 font-semibold text-black
                transition hover:scale-105 hover:bg-blue-400"
              >
                View Live App →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
