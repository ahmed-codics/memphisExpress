import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/airplane2.jpg"
        alt="Express Delivery"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight drop-shadow-lg">
          MEMPHIS EXPRESS
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-md">
          نوصّل شحنتك بسرعة وأمان لأي مكان 🌍
        </p>
        <a
          href="#contact"
          className="mt-6 sm:mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg md:text-xl font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition"
        >
          اتصل بنا الآن
        </a>
      </div>
    </section>
  );
};

export default Hero;
