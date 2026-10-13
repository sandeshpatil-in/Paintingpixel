'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES } from '@/data/paintings';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle through the 3 frames
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="banner-section relative overflow-hidden bg-black min-h-screen">
      {/* Background Banner Slider */}
      <div className="absolute top-0 left-0 w-full h-screen z-1 overflow-hidden pointer-events-none banner-slider">
        <div className="relative w-full h-full">
          <Image
            src="/banner-4.jpg"
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-all duration-300 opacity-90 brightness-90"
          />
          {/* Subtle dark gradient overlay to ensure perfect contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        </div>
      </div>

      {/* Center Banner Content */}
      <div className="text-center min-h-screen flex items-center lg:justify-start justify-center flex-col relative z-3 banner-content transition-all duration-1000 opacity-100 px-4 pb-24">
        {/* Master Fluid H1 */}
        <h1 className="lg:text-[5vw] md:text-[7vw] sm:text-[9vw] text-[11vw] text-white leading-tight mt-[10vh] pb-3 sm:pb-4 tracking-tight font-serif select-none">
          Digital Oil <br /> Portrait Paintings
        </h1>

        {/* Brand Tagline */}
        <div
          role="group"
          aria-label="Painted, not prompted."
          className="text-white lg:text-[2vw] md:text-[3vw] sm:text-[4vw] text-[5vw] left-0 right-0 z-10 pb-4 sm:pb-6 font-light tracking-[0.05em] select-none"
        >
          Painted, not prompted.
        </div>

        {/* Framed Portrait Preview Slider (Transparent 3D Canvas, no side border or black box shadow) */}
        <div
          className="lg:mt-4 max-lg:mt-[3vh] max-lg:mb-[2vh] cursor-pointer"
          onClick={onOpenConsultation}
        >
          <div className="relative min-[2050px]:w-[24vw] lg:w-[22vw] md:w-[45vw] sm:w-[55vw] w-[65vw] aspect-square overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 80, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.96 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={HERO_SLIDES[currentSlide].img}
                  alt={HERO_SLIDES[currentSlide].alt}
                  fill
                  priority
                  className="w-full h-full object-contain"
                  sizes="(min-width: 2050px) 25vw, (min-width: 1024px) 22vw, (min-width: 768px) 45vw, (min-width: 640px) 55vw, 65vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Subtle slide pagination dots */}
        <div className="flex items-center gap-2 mt-4 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentSlide === idx ? 'w-6 bg-[#ff543e]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
