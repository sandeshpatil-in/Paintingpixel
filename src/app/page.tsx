'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from '@/components/Preloader';
import TopNavbar from '@/components/TopNavbar';
import FloatingIslandDock from '@/components/FloatingIslandDock';
import HeroSection from '@/components/HeroSection';
import GalleryShowcase from '@/components/GalleryShowcase';
import ArtistCraftStory from '@/components/ArtistCraftStory';
import TestimonialsSection from '@/components/TestimonialsSection';
import ConsultationDrawer from '@/components/ConsultationDrawer';
import PaintingDetailModal from '@/components/PaintingDetailModal';
import Footer from '@/components/Footer';
import { PAINTSTAR_GALLERIES, PaintingItem } from '@/data/paintings';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState<PaintingItem | null>(null);

  // Initialize smooth scroll safely
  useEffect(() => {
    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.0,
        orientation: 'vertical',
        smoothWheel: true,
      });

      const raf = (time: number) => {
        if (lenis) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      };

      requestAnimationFrame(raf);
    } catch (e) {
      console.warn('Native scroll active', e);
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  const handleOpenConsultation = (painting?: PaintingItem) => {
    if (painting) {
      setSelectedPainting(painting);
    }
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-white text-[#0b1012] selection:bg-[#ff543e] selection:text-white">
      {/* 1. Global Preloader */}
      <Preloader />

      {/* 2. Top Header Navbar */}
      <TopNavbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* 3. Hero Section */}
      <HeroSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* 4. Asymmetrical Galleries 01 to 05 */}
      {PAINTSTAR_GALLERIES.map((gallery, idx) => (
        <GalleryShowcase
          key={gallery.id}
          gallery={gallery}
          index={idx}
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectPainting={(p) => setSelectedPainting(p)}
        />
      ))}

      {/* 5. Master Artist & Wacom Section */}
      <ArtistCraftStory onOpenConsultation={() => handleOpenConsultation()} />

      {/* 7. Client Stories & Testimonials */}
      <TestimonialsSection />

      {/* 8. Sister Creative Ecosystem & Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* 9. Floating Bottom Dynamic Island Capsule Dock */}
      <FloatingIslandDock onOpenConsultation={() => handleOpenConsultation()} />

      {/* 10. Consultation Drawer ("Let's revive your wall") */}
      <ConsultationDrawer
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        selectedPainting={selectedPainting}
      />

      {/* 11. Artwork Quick View Modal */}
      <PaintingDetailModal
        painting={selectedPainting && !isConsultationOpen ? selectedPainting : null}
        onClose={() => setSelectedPainting(null)}
        onCommission={(p) => handleOpenConsultation(p)}
      />
    </main>
  );
}
