'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { District } from '@/types';
import { MapPin, ArrowRight } from 'lucide-react';

interface DistrictGuideProps {
  districts: District[];
}

export default function DistrictGuide({ districts }: DistrictGuideProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Prime Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3">
              Explore Bangkok Enclaves
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              From riverfront romance to the energetic heart of Sukhumvit and Sathorn&apos;s financial center.
            </p>
          </div>

          <Link
            href="/districts"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group"
          >
            <span>All Neighborhoods</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* District Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districts.map((d) => (
            <Link
              key={d.id}
              href={`/projects?district=${encodeURIComponent(d.name)}`}
              className="group relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-end p-6"
            >
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    {d.tag}
                  </span>
                  <span className="text-xs text-white/80 font-medium">
                    {d.projectCount} {d.projectCount === 1 ? 'Project' : 'Projects'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  {d.name}
                </h3>

                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed font-normal">
                  {d.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-primary-100 transition">
                  <span>View selling projects</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
