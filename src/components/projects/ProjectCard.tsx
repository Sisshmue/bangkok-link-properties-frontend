'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import { useCurrency } from '@/context/CurrencyContext';
import { Bed, Bath, MapPin, Layers, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import ViewingModal from '@/components/modals/ViewingModal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { format } = useCurrency();
  const [viewingModalOpen, setViewingModalOpen] = useState(false);

  // Status Badge Colors (clean, modern pastel pill badges)
  const getBadgeClass = (status: string) => {
    return 'bg-emerald-100 text-emerald-900 border-emerald-200';
  };

  // Extract representative bed and bath count from unitTypes if available
  const minBed = project.unitTypes ? Math.min(...project.unitTypes.map(u => u.bedrooms)) : 1;
  const maxBed = project.unitTypes ? Math.max(...project.unitTypes.map(u => u.bedrooms)) : 3;
  const bedRange = minBed === maxBed ? `${minBed}` : `${minBed} - ${maxBed}`;

  return (
    <>
      <div className="property-card-hover bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col h-full">
        {/* Photo Container */}
        <div className="relative h-64 sm:h-72 overflow-hidden shrink-0 bg-slate-100 group">
          <Link href={`/projects/${project.slug}`}>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>

          {/* Status Badge Top-Left */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold border shadow-xs bg-emerald-100 text-emerald-900 border-emerald-200">
              Ready to Move In
            </span>
          </div>

          {/* District Tag Top-Right */}
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white border border-white/20">
            {project.district}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            {/* Price & Category */}
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                {format(project.priceTHB)}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {project.propertyType}
              </span>
            </div>

            {/* Title */}
            <Link href={`/projects/${project.slug}`}>
              <h3 className="text-lg font-bold text-slate-900 hover:text-primary transition line-clamp-1">
                {project.title}
              </h3>
            </Link>

            {/* Tagline */}
            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
              {project.tagline}
            </p>

            {/* Spec Details Icons */}
            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-100 text-slate-600 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-slate-400" />
                <span>{bedRange} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-slate-400" />
                <span>{project.totalFloors} Floors</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Freehold</span>
              </div>
            </div>

            {/* Transit Proximity */}
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="truncate">{project.transitProximity}</span>
            </div>
          </div>

          {/* Action Buttons: View Details & Schedule Viewing */}
          <div className="pt-2 flex gap-2.5 mt-auto">
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-xl text-center shadow-xs transition active:scale-[0.98] flex items-center justify-center gap-1.5"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setViewingModalOpen(true)}
              className="flex-1 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl text-center transition active:scale-[0.98] flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>Schedule Viewing</span>
            </button>
          </div>
        </div>
      </div>

      <ViewingModal
        isOpen={viewingModalOpen}
        onClose={() => setViewingModalOpen(false)}
        defaultProjectTitle={project.title}
        defaultProjectId={project.id}
      />
    </>
  );
}
