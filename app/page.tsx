'use client';

import HeroSection from '@/components/hero-section';
import SolutionsSection from '@/components/solutions-section';
import EngagementsSection from '@/components/engagements-section';
import TestimonialsSection from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-[#002b49]">
      {/* Hero principal avec design IOCÉAN */}
      <HeroSection />

      {/* Section "Nos solutions" illustrée */}
      <SolutionsSection />

      {/* Section d’engagements */}
      <EngagementsSection />

      {/* Témoignages clients */}
      <TestimonialsSection />

      {/* Appel à l’action "Parlons-en" */}
      <section className="relative py-24 bg-[#f5f5f5] overflow-hidden">
        {/* Cercles décoratifs */}
        <div className="absolute right-[-80px] bottom-[-80px] w-64 h-64 rounded-full bg-[#f5a800]/20 z-0" />
        <div className="absolute left-[-60px] top-[-60px] w-40 h-40 rounded-full bg-[#00cc66]/30 z-0" />

        <div className="container relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002b49] mb-6">
            Vous avez un projet ?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Discutons-en ensemble autour d’un projet sur mesure, durable et
            écoresponsable.
          </p>
          <Button
            size="lg"
            className="bg-[#f5a800] hover:bg-[#e89d00] text-white font-semibold px-8 py-6 rounded-full text-lg"
          >
            Parlons-en ensemble
          </Button>
        </div>
      </section>
    </main>
  );
}
