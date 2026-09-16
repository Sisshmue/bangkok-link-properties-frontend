import React, { Suspense } from 'react';
import { fetchProjects } from '@/lib/api';
import ProjectsDirectory from '@/components/projects/ProjectsDirectory';

export const metadata = {
  title: 'Current Selling Developments | Bangkok Link Properties',
  description: 'Explore Bangkok’s finest selling residential developments across Sukhumvit, Riverside, Sathorn, Asoke, Thong Lor, and Ari.',
};

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <div className="py-16 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Current Selling Developments
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Verified freehold high-rises, branded riverfront residences, and luxury boutique projects in Bangkok. Available for both Thai nationals and foreign investors (49% Foreign Quota).
          </p>
        </div>

        {/* Directory */}
        <Suspense fallback={
          <div className="text-center py-20 text-slate-400 text-sm">
            Loading developments...
          </div>
        }>
          <ProjectsDirectory initialProjects={projects} />
        </Suspense>
      </div>
    </div>
  );
}
