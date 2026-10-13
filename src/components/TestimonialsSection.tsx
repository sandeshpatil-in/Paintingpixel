'use client';

import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA } from '@/data/paintings';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative w-full py-28 custom-container bg-white z-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Sticky Center Title & Narrative (Exact Paintstar scale & leading) */}
        <div className="flex flex-col items-center justify-center text-center z-10 max-w-3xl mx-auto pb-12 sm:pb-16 lg:pb-20 mb-8 sm:mb-12">
          <div className="relative pb-6 sm:pb-8 md:pb-10">
            <h2 className="3xl:text-[140px] 2xl:text-[120px] md:text-[100px] sm:text-[80px] text-[60px] leading-[0.85] font-serif font-normal text-[#0b1012]">
              Stories<br /> worth<br /> sharing.
            </h2>
          </div>
          <p className="pb-6 sm:pb-8 text-lg md:text-xl text-para leading-relaxed 2xl:max-w-lg md:max-w-md max-w-sm mx-auto font-light">
            Every painting begins with a memory. Nothing makes us happier than knowing it has found a special place in someone&apos;s heart and home.
          </p>

          {/* Exact Diamond Arrow Button */}
          <div className="pt-2">
            <button
              type="button"
              className="bg-transparent text-[#0b1012] w-fit flex items-center group/btn gap-4 max-md:text-[14px] max-sm:text-[12px] justify-center text-center tracking-wider md:py-4.5 py-3.5 md:px-7 px-5 uppercase group arrow-btn p-0! cursor-pointer"
            >
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
              <span className="relative z-10 inline-flex overflow-hidden tracking-[2px] font-medium font-sans">
                <span className="translate-y-0 transform-gpu transition-all duration-600 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/btn:-translate-y-[101%]">
                  Read More Stories
                </span>
                <span className="absolute translate-y-full transform-gpu transition-all duration-600 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/btn:translate-y-0 text-[#ff543e]">
                  Read More Stories
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* 4 Client Story Cards with Paintstar client pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fafafa] rounded-2xl p-6 border border-gray-100 flex flex-col justify-between hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <p className="text-sm text-gray-700 leading-relaxed font-light italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0b1012]">{item.name}</h4>
                  <span className="text-xs text-para font-light">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
