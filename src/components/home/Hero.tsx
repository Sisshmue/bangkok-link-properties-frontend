'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import ViewingModal from '@/components/modals/ViewingModal';

export default function Hero() {
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-bleed Background Architecture Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=85"
            alt="Bangkok Luxury Real Estate"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Find your dream property in Bangkok
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover exceptional homes and investment opportunities in prime locations with personalized guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="#selling-projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white text-base sm:text-lg font-medium px-8 py-4 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <span>View Selling Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsViewingModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-amber-600 text-white text-base sm:text-lg font-medium px-8 py-4 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <ViewingModal
        isOpen={isViewingModalOpen}
        onClose={() => setIsViewingModalOpen(false)}
      />
    </>
  );
}
