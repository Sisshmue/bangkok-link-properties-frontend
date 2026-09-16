'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import ViewingModal from '@/components/modals/ViewingModal';

export default function CallToAction() {
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Ready to find your dream property in Bangkok?
          </h2>

          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Let our experienced team guide you through every step of your real estate acquisition with complete transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 hover:bg-slate-50 font-bold text-base rounded-xl shadow-lg transition active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              <span>Explore Selling Projects</span>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>

            <button
              onClick={() => setIsViewingModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-base rounded-xl shadow-lg transition active:scale-[0.98] inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule VIP Consultation</span>
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
