"use client";

export default function FitnessPage() {
  return (
    <section className="min-h-screen bg-black px-6 md:px-20 py-24 text-white">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title */}
        <div>
          <span className="text-red-600 text-xs tracking-widest uppercase">
            Mobile Design
          </span>
          <h1 className="text-red-600 5xl md:text-7xl font-black mt-4">
            Fitness Tracker
          </h1>
        </div>

        {/* Description + Image Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              The Fitness Tracker is an AI-driven mobile app designed to help users monitor their health and fitness goals efficiently. It collects user metrics such as steps, heart rate, calories burned, and workout duration to provide personalized insights and recommendations.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Users can set fitness goals, track progress over time, and receive customized workout plans. The app also integrates with wearable devices to provide real-time feedback and notifications, keeping users motivated and consistent with their routines.
            </p>

            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">React Native</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Figma</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Node.js</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3861955/pexels-photo-3861955.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fitness Tracker App"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
