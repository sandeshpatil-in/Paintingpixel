'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PaintingItem } from '@/data/paintings';

interface PaintingDetailModalProps {
  painting: PaintingItem | null;
  onClose: () => void;
  onCommission: (painting: PaintingItem) => void;
}

export default function PaintingDetailModal({
  painting,
  onClose,
  onCommission,
}: PaintingDetailModalProps) {
  return (
    <AnimatePresence>
      {painting && (
        <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: High-Resolution Canvas Preview */}
            <div className="relative w-full md:w-1/2 aspect-[4/5] bg-gray-950 flex items-center justify-center">
              <Image
                src={painting.img}
                alt={painting.alt}
                fill
                priority
                className="object-contain md:object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Artwork Details & Commission Action */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#ff543e] font-mono block mb-2">
                  Atelier Showcase
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-[#0b1012] mb-4">
                  {painting.alt}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                  Hand-crafted digital oil portraiture on museum-grade cotton canvas. Every brushstroke is digitally layered to replicate classical oil impasto texture.
                </p>

                {/* Specs */}
                <div className="space-y-3 mb-8 border-y border-gray-100 py-6 text-xs text-gray-700 font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 uppercase tracking-wider">Medium</span>
                    <span className="font-semibold text-gray-900">Digital Oil On Cotton Canvas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 uppercase tracking-wider">Longevity</span>
                    <span className="font-semibold text-gray-900">100+ Years Archival Giclée</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 uppercase tracking-wider">Sizes</span>
                    <span className="font-semibold text-gray-900">12x16&quot; up to 48x72&quot;</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {[
                    'Digital proof preview before canvas printing',
                    'Custom framing options & floating wood frames',
                    'Doorstep insured courier delivery',
                  ].map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commission Button */}
              <div>
                <button
                  onClick={() => {
                    onCommission(painting);
                    onClose();
                  }}
                  className="w-full py-4 bg-[#0b1012] hover:bg-[#ff543e] text-white rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Commission in This Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
