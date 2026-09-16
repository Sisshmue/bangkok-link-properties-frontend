'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import ProjectFilters, { FilterState } from './ProjectFilters';
import { LayoutGrid, List, Building2 } from 'lucide-react';

interface ProjectsDirectoryProps {
  initialProjects: Project[];
}

export default function ProjectsDirectory({ initialProjects }: ProjectsDirectoryProps) {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('search') || '',
    district: searchParams.get('district') || 'all',
    status: searchParams.get('status') || 'all',
    propertyType: searchParams.get('propertyType') || 'all',
    sort: 'default'
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const d = searchParams.get('district');
    const s = searchParams.get('status');
    const q = searchParams.get('search');
    if (d || s || q) {
      setFilters(prev => ({
        ...prev,
        district: d || prev.district,
        status: s || prev.status,
        search: q || prev.search
      }));
    }
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    let result = [...initialProjects];

    if (filters.search.trim() !== '') {
      const q = filters.search.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.district.toLowerCase().includes(q) ||
        p.subDistrict.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.transitProximity.toLowerCase().includes(q)
      );
    }

    if (filters.district !== 'all') {
      result = result.filter(p => p.district.toLowerCase() === filters.district.toLowerCase());
    }

    if (filters.status !== 'all') {
      result = result.filter(p => p.status.toLowerCase() === filters.status.toLowerCase());
    }

    if (filters.propertyType !== 'all') {
      result = result.filter(p => p.propertyType.toLowerCase() === filters.propertyType.toLowerCase());
    }

    if (filters.sort === 'price-asc') {
      result.sort((a, b) => a.priceTHB - b.priceTHB);
    } else if (filters.sort === 'price-desc') {
      result.sort((a, b) => b.priceTHB - a.priceTHB);
    } else if (filters.sort === 'completion') {
      result.sort((a, b) => a.completionYear.localeCompare(b.completionYear));
    } else if (filters.sort === 'progress') {
      result.sort((a, b) => b.constructionProgress - a.constructionProgress);
    }

    return result;
  }, [initialProjects, filters]);

  return (
    <div className="space-y-8">
      {/* Filter Suite */}
      <ProjectFilters
        filters={filters}
        onChange={setFilters}
        totalResults={filteredProjects.length}
      />

      {/* Control Bar */}
      <div className="flex items-center justify-between px-1">
        <div className="text-sm text-slate-500">
          Showing <span className="text-slate-900 font-bold">{filteredProjects.length}</span> of{' '}
          <span className="text-slate-700">{initialProjects.length}</span> developments
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-lg text-xs transition ${
              viewMode === 'grid'
                ? 'bg-white text-primary shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
            title="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-lg text-xs transition ${
              viewMode === 'list'
                ? 'bg-white text-primary shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
            title="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'grid grid-cols-1 gap-6'
          }
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto">
            <Building2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No Developments Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            We couldn&apos;t find any current selling projects matching your filter criteria. Try expanding your search parameters.
          </p>
          <button
            onClick={() =>
              setFilters({
                search: '',
                district: 'all',
                status: 'all',
                propertyType: 'all',
                sort: 'default'
              })
            }
            className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl transition shadow-xs"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
