'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TopNavbarProps {
  onOpenConsultation: () => void;
}

export default function TopNavbar({ onOpenConsultation }: TopNavbarProps) {
  return (
    <nav className="absolute top-0 w-full z-50 md:py-8 py-7 custom-container left-0 right-0 transition-transform duration-500 flex items-center justify-between">
      {/* Brand Logo (Custom Paintstar logo.svg) */}
      <Link href="/" className="inline-block">
        <Image
          src="/logo.svg"
          alt="Paintstar Fine Art Atelier"
          width={180}
          height={45}
          priority
          className="w-auto lg:h-11 h-8"
        />
      </Link>

      {/* Action Button: Make My Painting with exact geometric diamond SVG & sliding text */}
      <div className="flex gap-7 items-center">
        <button
          onClick={onOpenConsultation}
          type="button"
          className="bg-transparent text-white w-fit flex items-center group/btn gap-4 max-md:text-[14px] max-sm:text-[12px] justify-center text-center tracking-wider md:py-4.5 py-3.5 md:px-7 px-5 uppercase group arrow-btn p-0! cursor-pointer"
        >
          {/* Animated Diamond Pin Icon */}
          <svg
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group md:w-5 w-4 h-auto cursor-pointer overflow-visible"
          >
            <path
              d="M13.1 6H0.600006V0"
              stroke="currentColor"
              strokeWidth="1.2"
              className="transition-all duration-400 ease-in-out origin-center"
            />
            <rect
              x="8.18887"
              y="3.2251"
              width="5.56065"
              height="5.56065"
              stroke="currentColor"
              strokeWidth="1.2"
              className="transition-all duration-400 ease-in-out fill-transparent transform rotate-45 group-hover/btn:rotate-90 group-hover/btn:fill-current"
              style={{ transformOrigin: '10.58887px 5.2251px' }}
            />
          </svg>

          {/* Dual Slide Text */}
          <span className="relative z-10 inline-flex overflow-hidden tracking-[2px] font-sans">
            <span className="translate-y-0 transform-gpu transition-all duration-600 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/btn:-translate-y-[101%]">
              Make My Painting
            </span>
            <span className="absolute translate-y-full transform-gpu transition-all duration-600 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/btn:translate-y-0 text-[#ff543e]">
              Make My Painting
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
}
