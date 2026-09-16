import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';
import BrandPillars from '@/components/home/BrandPillars';

export const metadata = {
  title: 'About Us | Bangkok Link Properties',
  description: 'Learn about Bangkok Link Properties, Thailand’s boutique luxury real estate firm built upon Trust, Luxury, and Service.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-slate-50/50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header with Brand Logo */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="relative w-24 h-24 mx-auto bg-white rounded-2xl p-2.5 border border-slate-200 shadow-xs">
            <Image
              src="/logo.png"
              alt="Bangkok Link Properties"
              fill
              sizes="96px"
              className="object-contain"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-primary" />
            <span>Bangkok Link Heritage</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Bridging Discerning Buyers with Bangkok&apos;s Finest Landmarks
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded with a singular mission: to provide transparent, discreet, and authoritative guidance for acquisitions across Thailand&apos;s most prestigious residential developments.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Our Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Redefining Prime Real Estate in Southeast Asia
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At Bangkok Link Properties, we understand that acquiring a luxury home in Bangkok is both a deeply personal lifestyle aspiration and a consequential capital allocation.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We curate our portfolio exclusively from vetted Tier-1 developers who deliver impeccable craftsmanship, guaranteed freehold title registration, and premier post-handover management. Every residence in our catalog is personally inspected and appraised by our senior partners.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <span className="block text-2xl font-bold text-slate-900">฿18 Billion+</span>
                <span className="text-xs text-slate-500">Cumulative Transactions</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-primary">98.5%</span>
                <span className="text-xs text-slate-500">Private Client Retention</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80"
              alt="Bangkok Link Properties Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Excellence in Execution
              </span>
              <p className="text-sm font-bold text-white mt-0.5">
                Headquartered in Asoke CBD, Watthana, Bangkok
              </p>
            </div>
          </div>
        </div>

        {/* Brand Pillars Section */}
        <BrandPillars />

        {/* Foreign Ownership Advisory Notice */}
        <div className="bg-blue-50/60 border border-blue-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-2.5 text-primary font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>Thailand 49% Freehold Foreign Quota Framework</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Under Thailand’s Condominium Act B.E. 2522, foreign nationals can purchase condominiums in 100% Freehold ownership for up to 49% of the total salable floor area of any registered building. Bangkok Link Properties ensures full compliance by coordinating Foreign Exchange Transaction (FET) documentation, banking compliance, and Land Department registration.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-blue-800 transition"
            >
              <span>Consult with our Foreign Quota Legal Specialists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
