"use client";

export default function UniversalTranslatorPage() {
  return (
    <section className="min-h-screen bg-black px-6 md:px-20 py-24 text-white">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title */}
        <div className="flex items-center gap-4">
          {/* App Icon */}
          <img
            src="/apps/universal translator.png"
            alt="Universal Translator Icon"
            className="w-20 h-20 object-cover rounded-xl"
          />
          <div>
            <span className="text-blue-400 text-xs tracking-widest uppercase">
              Mobile Application
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-2">
              Universal Translator
            </h1>
            <p className="text-gray-400 mt-2">{`Multiple languages Translator using image, voice, text`}</p>
          </div>
        </div>

        {/* Description + Image Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Universal Translator is a cutting-edge mobile app that allows users to translate text, speech, and images in multiple languages instantly. Using advanced AI algorithms, the app can accurately detect the source language and provide precise translations, making communication effortless across borders.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Users can take photos of signs or documents, speak into the microphone, or type text to get real-time translations. The app supports over 100 languages and offers offline translation for essential phrases. Ideal for travelers, business professionals, and language enthusiasts.
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">React Native</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Firebase</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">Google Cloud Translation API</span>
                <span className="px-4 py-2 text-xs uppercase tracking-wider bg-white/5 rounded-full">TensorFlow Lite</span>
              </div>
            </div>

            {/* Live / Download Link */}
            <div className="mt-6">
              <a
                href="https://example.com/universal-translator"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
              >
                View Live App
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Universal Translator App Screenshot"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
