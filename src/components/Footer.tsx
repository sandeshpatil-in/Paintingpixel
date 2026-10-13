'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SUBSIDIARY_BRANDS } from '@/data/paintings';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer id="footer" className="relative bg-[#0b1012] text-white pt-24 pb-36 border-t border-white/10">
      <div className="custom-container">
        {/* Creative Ecosystem Brands */}
        <div className="mb-24 pb-20 border-b border-white/10">
          <div className="text-center pb-10 sm:pb-12 lg:pb-16">
            <p className="uppercase text-[#c1c1c1] tracking-[2px] text-xs font-mono pb-3">
              Our Creative Network
            </p>
            <h3 className="fs-60 font-serif font-normal pb-2">
              Paintstar Ecosystem
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {SUBSIDIARY_BRANDS.map((brand, idx) => (
              <a
                key={idx}
                href={brand.href}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#ff543e]/50 transition-all duration-300 block"
              >
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-end p-3">
                  <span className="text-xs uppercase tracking-widest text-white/95 font-mono font-medium">
                    {brand.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Studio Info & Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Logo & About */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="Paintstar"
                width={180}
                height={45}
                className="w-auto lg:h-12 h-10"
              />
            </Link>
            <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed mb-6">
              Paintstar Atelier transforms your treasured photographs into timeless, museum-grade oil paintings. Hand-crafted by master artists with fine digital brushstrokes.
            </p>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Studio 402, Signature Art Galleria, Linking Road, Bandra West, Mumbai, Maharashtra 400050, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#c1c1c1] font-mono mb-6">
              Galleries &amp; Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>
                <Link href="#gallery-01" className="hover:text-white transition-colors">
                  Self Portrait Paintings
                </Link>
              </li>
              <li>
                <Link href="#gallery-02" className="hover:text-white transition-colors">
                  Children&apos;s Portrait Paintings
                </Link>
              </li>
              <li>
                <Link href="#gallery-03" className="hover:text-white transition-colors">
                  Family Portrait Paintings
                </Link>
              </li>
              <li>
                <Link href="#gallery-04" className="hover:text-white transition-colors">
                  Couple Portrait Paintings
                </Link>
              </li>
              <li>
                <Link href="#gallery-05" className="hover:text-white transition-colors">
                  Photo Restoration &amp; Paintings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#c1c1c1] font-mono mb-6">
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm text-gray-400 font-light mb-6">
              <p>
                Phone:{' '}
                <a href="tel:+919876543210" className="text-white hover:text-[#ff543e] transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:hello@paintstar.studio" className="text-white hover:text-[#ff543e] transition-colors">
                  hello@paintstar.studio
                </a>
              </p>
              <p className="text-xs text-gray-500">
                Mon - Sat: 10:00 AM &ndash; 8:00 PM IST
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="bg-transparent border border-white/20 hover:border-[#ff543e] text-white hover:text-[#ff543e] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer"
            >
              Make My Painting
            </button>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <p>&copy; {new Date().getFullYear()} Paintstar Atelier. All rights reserved. Painted, not prompted.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Commission
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Certificate of Authenticity
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
