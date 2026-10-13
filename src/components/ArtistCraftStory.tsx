'use client';

import React from 'react';
import Image from 'next/image';

interface ArtistCraftStoryProps {
  onOpenConsultation: () => void;
}

export default function ArtistCraftStory({ onOpenConsultation }: ArtistCraftStoryProps) {
  return (
    <section id="artist-story" className="relative w-full py-24 md:py-36 bg-white text-[#0b1012] border-t border-gray-100">
      <div className="custom-container">
        <div className="flex max-md:flex-col-reverse 3xl:gap-32 2xl:gap-20 xl:gap-14 gap-10 w-full items-center">
          {/* Left Column: Heading, narrative & Pan video */}
          <div className="md:w-1/2 w-full flex flex-col justify-between">
            <div className="pb-6 sm:pb-8 lg:pb-10">
              <p className="uppercase text-[#c1c1c1] tracking-[2px] text-xs font-mono mb-3 sm:mb-4">
                Craft &amp; Technique
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-serif leading-[1.18] font-normal text-[#0b1012] pb-4 sm:pb-6">
                Painting memories, <br />
                <span className="italic text-[#ff543e]">pixel by pixel.</span>
              </h2>
              <p className="text-base md:text-lg text-para leading-relaxed font-light pb-4 sm:pb-6 max-w-xl">
                From selecting the right photograph to adding the final brushstroke, every portrait takes shape layer by layer, detail by detail.
              </p>
            </div>

            {/* Video showcase */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-black/5">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/pan.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenConsultation}
                className="w-fit bg-[#0b1012] hover:bg-[#ff543e] text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer shadow-lg"
              >
                Talk to Our Atelier
              </button>
            </div>
          </div>

          {/* Right Column: Master Artist Profile & Studio Tablet */}
          <div className="md:w-1/2 w-full flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
              <Image
                src="/paintstar-master-artist-new.jpg"
                alt="Paintstar Master Artist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#ff543e] font-mono mb-1">
                  Founder &amp; Principal Artist
                </span>
                <h3 className="text-3xl font-serif">Paintstar Master Atelier</h3>
                <p className="text-xs text-white/70 mt-1 font-light">
                  21+ Years of Fine Art Mastery &bull; Over 16,000+ Custom Canvases
                </p>
              </div>
            </div>

            {/* Tablet Trust Overlay Badge */}
            <div className="mt-6 flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-2xl max-w-md w-full shadow-sm">
              <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-white border border-gray-200 p-1">
                <Image
                  src="/wacom-2.png"
                  alt="Precision Digital Tablet"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="text-xs text-gray-700">
                <span className="font-semibold block text-[#0b1012]">
                  Authentic Stylus Digital Artistry
                </span>
                <span className="text-para text-[11px] block mt-0.5">
                  100% hand-painted brushstrokes on cotton canvas with zero automated AI filters.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
