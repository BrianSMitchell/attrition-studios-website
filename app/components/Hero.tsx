"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-[#1a1f3a] to-[#0a0a14]">
        <div className="stars-container absolute inset-0 opacity-50"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Company Name */}
        <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent mt-20">
          Attrition Studios
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Building custom digital solutions that drive business growth. 
          From web applications to enterprise software, we turn your vision into reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-neon-cyan/50 hover:shadow-neon-cyan/70"
          >
            View Our Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-neon-pink rounded-lg font-semibold text-neon-pink hover:bg-neon-pink hover:text-white transition-all duration-300 shadow-lg shadow-neon-pink/30 hover:shadow-neon-pink/60"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-neon-cyan" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Logo Watermark - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20 opacity-40 hover:opacity-60 transition-opacity duration-300">
        <Image
          src="/images/logo.png"
          alt="Attrition Studios"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </div>

      {/* Additional glow effects - subtle */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink opacity-5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
