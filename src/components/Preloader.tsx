'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="global-page-loader"
      onClick={() => setVisible(false)}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out pointer-events-none"
    >
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-[#0B1012]/5 animate-ping opacity-75" />
          <Image
            src="/logo-icon.svg"
            alt="Paintstar Atelier"
            width={64}
            height={64}
            priority
            className="relative z-10 w-16 h-16 drop-shadow-md"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-serif text-xl tracking-[0.25em] font-semibold text-[#0B1012]">
            PAINT<span className="text-[#FF543E]">STAR</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-gray-400 mt-1 font-mono">
            Fine Art Atelier
          </span>
        </div>
      </div>
    </div>
  );
}

