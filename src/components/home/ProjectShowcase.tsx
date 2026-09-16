'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import ProjectCard from '@/components/projects/ProjectCard';
import { ArrowRight, Building2 } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'condo') return project.propertyType.toLowerCase().includes('condo');
    if (activeTab === 'house') return project.propertyType.toLowerCase().includes('house') || project.propertyType.toLowerCase().includes('villa');
    return true;
  });

  const tabs = [
    { id: 'all', label: 'All Properties' },
    { id: 'condo', label: 'Luxury Condominiums' },
    { id: 'house', label: 'Houses & Villas' },
  ];

  return (
    <section id="selling-projects" className="py-24 bg-slate-50/60 border-y border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Selling Developments
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Handpicked residential icons from Bangkok Link&apos;s verified freehold portfolio
          </p>
        </div>

        {/* Minimalist Phase Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom View All Button */}
        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-sm rounded-xl shadow-xs transition active:scale-[0.98]"
          >
            <span>View All Current Developments ({projects.length})</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
