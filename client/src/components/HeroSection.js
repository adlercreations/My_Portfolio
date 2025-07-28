import React from 'react';

function HeroSection() {
  return (
    <section className="h-[50vh] flex flex-col justify-center items-center text-center relative overflow-hidden rounded-2xl">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan via-accent-blue via-accent-green via-accent-teal via-accent-purple via-accent-yellow to-accent-magenta bg-[size:700%_700%] animate-gradient-shift opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-thin text-black mb-4">
          Stephen J. Adler
        </h1>
        <p className="text-xl md:text-2xl font-thin text-gray-800">
          Software Engineer & Digital Artist
        </p>
      </div>

      <div className="absolute bottom-10 z-10 animate-bounce">
        <svg className="w-8 h-8 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;