'use client';

import React from 'react';
import Image from 'next/image';
import { GallerySectionData, PaintingItem } from '@/data/paintings';

interface GalleryShowcaseProps {
  gallery: GallerySectionData;
  index: number;
  onOpenConsultation: () => void;
  onSelectPainting: (item: PaintingItem) => void;
}

export default function GalleryShowcase({
  gallery,
  index,
  onOpenConsultation,
  onSelectPainting,
}: GalleryShowcaseProps) {
  // Exact Paintstar section classes: first section is first-grid-section, others have lg:-mt-30 overlap
  const sectionClass =
    index === 0
      ? 'first-grid-section relative z-6 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28'
      : 'relative z-6 py-16 sm:py-20 lg:py-28';

  return (
    <section id={gallery.id} className={sectionClass}>
      <div className="grid-container-wrapper w-full flex justify-center overflow-hidden relative z-7">
        <div className="grid-container relative will-change-transform w-[inherit] max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="category-grid will-change-transform p-4 pb-6 transition-colors duration-300 delay-200 bg-white">
            {/* Header Block with clear padding below Title and below Description */}
            <div className="text-center overflow-hidden will-change-transform pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-24 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center h-full transition-opacity opacity-100 duration-1000">
                <div className="overflow-hidden mb-3 sm:mb-4">
                  <p className="will-change-transform uppercase text-[#c1c1c1] tracking-[2px] max-lg:text-sm max-md:text-xs font-mono">
                    {gallery.number}
                  </p>
                </div>
                <div className="overflow-hidden pb-4 sm:pb-5 md:pb-6">
                  <h2 className="will-change-transform capitalize fs-60 font-serif font-normal text-[#0b1012]">
                    {gallery.title}
                  </h2>
                </div>
                <div className="overflow-hidden max-w-3xl pb-4 sm:pb-6">
                  <p className="will-change-transform text-xl max-2xl:text-lg max-md:text-base text-para font-light leading-relaxed">
                    {gallery.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Asymmetrical Magazine Grid (Exact Paintstar grid classes) */}
            <div className={gallery.gridClass}>
              {gallery.items.map((item) => (
                <div
                  key={item.id}
                  className={`${item.spanClass} cursor-pointer group`}
                  onClick={() => onSelectPainting(item)}
                >
                  <div className="h-full relative overflow-hidden block">
                    <div className="block lg:h-full transition-all duration-1000 border-transparent relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[300px]">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        className="lg:object-cover object-cover h-full w-full group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paintstar Exact Expanding Dot "VIEW ALL" Button */}
            <div className="xl:pt-20 lg:pt-15 pt-10 mx-auto w-fit">
              <button
                onClick={onOpenConsultation}
                type="button"
                className="group/btn relative max-md:text-[14px] max-sm:text-[12px] tracking-[2px] md:px-9 px-7 md:py-3.5 py-3 uppercase cursor-pointer block bg-transparent"
              >
                <span className="bg-[#ff543e] md:w-2.5 md:h-2.5 w-2 h-2 block absolute top-0 bottom-0 md:left-3 left-2 my-auto group-hover/btn:inset-0 transition-all duration-300 group-hover/btn:w-full group-hover/btn:h-full" />
                <span className="relative z-10 inline-flex overflow-hidden text-[#0b1012] group-hover/btn:text-white transition-colors duration-300">
                  <span className="translate-y-0 transform-gpu transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] group-hover/btn:opacity-0 opacity-100 group-hover/btn:-translate-y-full font-medium">
                    VIEW ALL
                  </span>
                  <span className="absolute translate-y-full transform-gpu transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] group-hover/btn:opacity-100 opacity-0 group-hover/btn:translate-y-0 font-medium">
                    VIEW ALL
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
