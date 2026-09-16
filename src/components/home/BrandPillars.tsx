'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BrandPillars() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Section: Image & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Professional Bangkok Luxury Architecture Image */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Bangkok Link Properties Luxury Interiors"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right: Narrative */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              About Bangkok Link Properties
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Your trusted partner in Bangkok&apos;s luxury property market
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                With a deep understanding of Bangkok&apos;s prime urban landscape and an unwavering commitment to personalized client care, Bangkok Link Properties guides discerning homeowners and global investors with confidence and clarity.
              </p>
              <p>
                Whether you seek an iconic penthouse overlooking Benchasiri Park, a peaceful riverfront estate on the Chao Phraya, or high-yield corporate units in Asoke, our multilingual advisors deliver exceptional results tailored to your requirements.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-7 py-3.5 rounded-xl shadow-xs transition active:scale-[0.98]"
              >
                <span>Learn more about us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

