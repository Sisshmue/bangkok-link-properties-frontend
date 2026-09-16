'use client';

import React, { useState } from 'react';
import { useCurrency } from '@/context/CurrencyContext';
import { Calendar, Download } from 'lucide-react';
import ViewingModal from '@/components/modals/ViewingModal';
import BrochureModal from '@/components/modals/BrochureModal';

interface ProjectDetailActionsProps {
  projectId: string;
  projectTitle: string;
  priceTHB: number;
  pricePerSqm: number;
}

export default function ProjectDetailActions({
  projectId,
  projectTitle,
  priceTHB,
  pricePerSqm
}: ProjectDetailActionsProps) {
  const { format } = useCurrency();
  const [viewingModalOpen, setViewingModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:items-end gap-3 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs shrink-0 w-full sm:w-auto">
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-right">
            Starting Price
          </span>
          <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 sm:text-right tracking-tight break-words">
            {format(priceTHB)}
          </div>
          <span className="block text-xs text-primary sm:text-right font-medium mt-0.5">
            Avg. {format(pricePerSqm)} / sq.m
          </span>
        </div>

        <div className="flex items-center gap-2 pt-2 w-full sm:w-auto">
          <button
            onClick={() => setViewingModalOpen(true)}
            className="flex-1 sm:flex-initial px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-sm rounded-xl shadow-xs transition active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Viewing</span>
          </button>

          <button
            onClick={() => setBrochureModalOpen(true)}
            className="flex-1 sm:flex-initial px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-xl transition flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Brochure</span>
          </button>
        </div>
      </div>

      <ViewingModal
        isOpen={viewingModalOpen}
        onClose={() => setViewingModalOpen(false)}
        defaultProjectTitle={projectTitle}
        defaultProjectId={projectId}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        projectName={projectTitle}
      />
    </>
  );
}
