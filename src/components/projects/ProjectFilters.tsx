'use client';

import React from 'react';
import { Search, SlidersHorizontal, RotateCcw, MapPin } from 'lucide-react';

export interface FilterState {
  search: string;
  district: string;
  status: string;
  propertyType: string;
  sort: string;
}

interface ProjectFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalResults: number;
}

const DISTRICTS = [
  { id: 'all', label: 'All Districts' },
  { id: 'Sukhumvit', label: 'Sukhumvit' },
  { id: 'Riverside', label: 'Riverside' },
  { id: 'Asoke', label: 'Asoke' },
  { id: 'Thong Lor', label: 'Thong Lor' },
  { id: 'Sathorn', label: 'Sathorn' },
  { id: 'Ari', label: 'Ari' },
];

const PROPERTY_TYPES = [
  { id: 'all', label: 'All Property Types' },
  { id: 'Condo', label: 'Condominiums' },
  { id: 'House', label: 'Houses & Villas' },
  { id: 'Penthouse', label: 'Penthouses' },
];

export default function ProjectFilters({ filters, onChange, totalResults }: ProjectFiltersProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, search: e.target.value });
  };

  const handleDistrictChange = (district: string) => {
    onChange({ ...filters, district });
  };

  const handlePropertyTypeChange = (propertyType: string) => {
    onChange({ ...filters, propertyType });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...filters, sort: e.target.value });
  };

  const resetFilters = () => {
    onChange({
      search: '',
      district: 'all',
      status: 'all',
      propertyType: 'all',
      sort: 'default'
    });
  };

  const hasActiveFilters =
    filters.search !== '' ||
    filters.district !== 'all' ||
    filters.status !== 'all' ||
    filters.propertyType !== 'all' ||
    filters.sort !== 'default';

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
      {/* Top: Search + Sorting + Reset */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search by project name, BTS station, or district..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white transition"
          />
          {filters.search && (
            <button
              onClick={() => onChange({ ...filters, search: '' })}
              className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort & Reset */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-500 font-medium">Sort:</span>
            <select
              value={filters.sort}
              onChange={handleSortChange}
              className="bg-transparent text-slate-800 font-semibold focus:outline-none cursor-pointer"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Property Type Pills */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span className="font-bold uppercase tracking-wider text-[11px] text-slate-700">
            Property Type
          </span>
          <span>{totalResults} matching properties</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PROPERTY_TYPES.map((pt) => {
            const isActive =
              pt.id === 'all'
                ? filters.propertyType === 'all'
                : filters.propertyType.toLowerCase().includes(pt.id.toLowerCase());
            return (
              <button
                key={pt.id}
                onClick={() => handlePropertyTypeChange(pt.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {pt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Prime Districts */}
      <div>
        <span className="block font-bold uppercase tracking-wider text-[11px] text-slate-700 mb-2">
          Prime Bangkok Districts
        </span>
        <div className="flex flex-wrap gap-2">
          {DISTRICTS.map((d) => {
            const isActive = filters.district.toLowerCase() === d.id.toLowerCase();
            return (
              <button
                key={d.id}
                onClick={() => handleDistrictChange(d.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <MapPin className={`w-3 h-3 ${isActive ? 'text-white' : 'text-primary'}`} />
                <span>{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
