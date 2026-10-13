'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Phone, Mail } from 'lucide-react';

interface FloatingIslandDockProps {
  onOpenConsultation: () => void;
}

export default function FloatingIslandDock({ onOpenConsultation }: FloatingIslandDockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', name: 'Home' },
        { id: 'gallery-01', name: 'Self Portraits' },
        { id: 'gallery-02', name: 'Children Portraits' },
        { id: 'gallery-03', name: 'Family Portraits' },
        { id: 'gallery-04', name: 'Couple Portraits' },
        { id: 'gallery-05', name: 'Photo Restoration' },
        { id: 'artist-story', name: 'Master Artist' },
        { id: 'testimonials', name: 'Stories' },
        { id: 'footer', name: 'Contact' },
      ];

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Floating Bottom Island Dock */}
      <header
        className="fixed bottom-6 left-0 right-0 mx-auto z-50 bg-[#0b1012]/80 backdrop-blur-[23px] text-white rounded-full 2xl:h-16 h-13 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] 2xl:py-3 py-2 2xl:w-90 w-72 2xl:px-4 px-3 cursor-pointer shadow-2xl border border-white/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between h-full">
          {/* Paintstar Icon */}
          <Link
            href="/"
            onClick={(e) => {
              e.stopPropagation();
              closeMenu();
            }}
            className="inline-block transition-transform hover:scale-105"
          >
            <Image
              src="/logo-icon.svg"
              alt="Paintstar"
              width={32}
              height={35}
              className="w-auto 2xl:h-8 h-7"
            />
          </Link>

          {/* Current Section Text */}
          <div className="relative 2xl:w-55 w-40 overflow-hidden uppercase transition-all duration-500 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="whitespace-nowrap tracking-[2px] text-xs md:text-sm font-mono truncate"
              >
                {currentSection}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Toggle Hamburger / Close */}
          <div className="flex items-center justify-center 2xl:w-10 2xl:h-10 w-8 h-8">
            {isOpen ? (
              <X className="w-5 h-5 text-[#ff543e]" />
            ) : (
              <div className="flex flex-col gap-1 items-center justify-center">
                <span className="w-5 h-[1.5px] bg-white" />
                <span className="w-5 h-[1.5px] bg-white" />
                <span className="w-3.5 h-[1.5px] bg-white" />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Expanding Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex items-end justify-center pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
              className="relative z-50 mb-24 w-[92vw] max-w-xl bg-[#0b1012]/95 backdrop-blur-[24px] border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl"
            >
              {/* Logo in Menu */}
              <div className="pb-6 border-b border-white/10 flex items-center justify-between">
                <Image
                  src="/logo.svg"
                  alt="Paintstar"
                  width={160}
                  height={40}
                  className="w-auto h-8"
                />
                <button
                  onClick={closeMenu}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Links */}
              <ul className="py-6 space-y-4">
                {[
                  { label: 'About Atelier', href: '#artist-story' },
                  { label: 'Self Portraits', href: '#gallery-01' },
                  { label: 'Children Portraits', href: '#gallery-02' },
                  { label: 'Family Portraits', href: '#gallery-03' },
                  { label: 'Couple Portraits', href: '#gallery-04' },
                  { label: 'Photo Restoration', href: '#gallery-05' },
                  { label: 'Client Stories', href: '#testimonials' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between text-2xl md:text-3xl font-serif text-white/80 hover:text-white transition-colors"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.label}
                      </span>
                      <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-[#ff543e] transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Bottom Quick Contacts */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 hover:text-[#ff543e] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#ff543e]" /> +91 98765 43210
                </a>
                <a
                  href="mailto:hello@paintstar.studio"
                  className="flex items-center gap-2 hover:text-[#ff543e] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#ff543e]" /> hello@paintstar.studio
                </a>
              </div>

              {/* Make My Painting Action in Menu */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    closeMenu();
                    onOpenConsultation();
                  }}
                  className="w-full py-4 bg-[#ff543e] hover:bg-[#e04530] text-white rounded-xl text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer"
                >
                  Make My Painting
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
