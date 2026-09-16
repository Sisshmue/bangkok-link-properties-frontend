'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UnitType } from '@/types';
import { useCurrency } from '@/context/CurrencyContext';
import { Bed, Bath, Maximize, FileText, Calendar, ArrowRight } from 'lucide-react';
import ViewingModal from '@/components/modals/ViewingModal';
import BrochureModal from '@/components/modals/BrochureModal';

interface UnitPlansShowcaseProps {
  unitTypes: UnitType[];
  projectTitle: string;
  projectId: string;
}

export default function UnitPlansShowcase({ unitTypes, projectTitle, projectId }: UnitPlansShowcaseProps) {
  const [selectedUnit, setSelectedUnit] = useState<UnitType>(unitTypes[0] || null);
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const { format } = useCurrency();

  if (!unitTypes || unitTypes.length === 0) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Unit Configurations
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
            Available Floor Plans
          </h3>
        </div>

        <button
          onClick={() => setIsBrochureModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition self-start sm:self-auto"
        >
          <FileText className="w-3.5 h-3.5 text-primary" />
          <span>Download All Plans (PDF)</span>
        </button>
      </div>

      {/* Unit Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {unitTypes.map((unit) => {
          const isSelected = selectedUnit?.id === unit.id;
          return (
            <button
              key={unit.id}
              onClick={() => setSelectedUnit(unit)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${isSelected
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {unit.name}
            </button>
          );
        })}
      </div>

      {/* Active Unit Layout Details */}
      {selectedUnit && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Architectural Layout Image / Blueprint Box */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[340px]">
            {selectedUnit.floorPlanImage ? (
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                <Image
                  src={selectedUnit.floorPlanImage}
                  alt={`${selectedUnit.name} Floor Plan Layout`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2"
                />
              </div>
            ) : (
              <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs space-y-4">
                <div className="flex justify-between items-center text-[11px] sm:text-xs text-slate-400 font-mono font-bold uppercase tracking-wider border-b border-slate-100 pb-3 gap-2">
                  <span className="truncate">ARCHITECTURAL FLOOR PLAN</span>
                  <span className="text-primary font-sans shrink-0">{selectedUnit.size}</span>
                </div>

                <div className="p-3.5 sm:p-4 bg-blue-50/50 rounded-xl border border-blue-100 space-y-2">
                  <div className="text-sm font-bold text-slate-900">{selectedUnit.name}</div>
                  <div className="text-xs text-slate-600 flex flex-wrap items-center gap-2 sm:gap-3">
                    <span>{selectedUnit.bedrooms} Bedrooms</span>
                    <span>•</span>
                    <span>{selectedUnit.bathrooms} Bathrooms</span>
                    <span>•</span>
                    <span>{selectedUnit.size}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {selectedUnit.floorPlan}
                </p>

                <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-100 pt-3 font-mono">
                  <span>BANGKOK LINK PROPERTIES</span>
                  <span>VERIFIED LAYOUT</span>
                </div>
              </div>
            )}
          </div>

          {/* Unit Specs & CTA */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-primary border border-blue-200 shrink-0">
                {selectedUnit.status}
              </span>
              <span className="text-xs text-slate-400 font-mono truncate">ID: {selectedUnit.id.toUpperCase()}</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {selectedUnit.name}
            </h4>

            {/* Spec pills */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-center">
                <div className="flex items-center justify-center gap-1 text-slate-500 text-[11px] sm:text-xs mb-1">
                  <Maximize className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Area</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">{selectedUnit.size}</span>
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-center">
                <div className="flex items-center justify-center gap-1 text-slate-500 text-[11px] sm:text-xs mb-1">
                  <Bed className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Bedrooms</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">{selectedUnit.bedrooms} Beds</span>
              </div>

              <div className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-200 text-center">
                <div className="flex items-center justify-center gap-1 text-slate-500 text-[11px] sm:text-xs mb-1">
                  <Bath className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Bathrooms</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">{selectedUnit.bathrooms} Baths</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {selectedUnit.floorPlan}
            </p>

            {/* Price */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Starting Price
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 break-words">
                {format(selectedUnit.priceTHB)}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setIsViewingModalOpen(true)}
                className="flex-1 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule</span>
              </button>

              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>Request Specs</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <ViewingModal
        isOpen={isViewingModalOpen}
        onClose={() => setIsViewingModalOpen(false)}
        defaultProjectTitle={projectTitle}
        defaultProjectId={projectId}
      />
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        projectName={projectTitle}
      />
    </div>
  );
}
