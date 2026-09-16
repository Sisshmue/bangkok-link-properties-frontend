import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchDistricts, fetchProjects } from '@/lib/api';
import { MapPin, ArrowRight, Compass, Building, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Bangkok Prime Districts Guide | Bangkok Link Properties',
  description: 'Comprehensive guide to Bangkok’s most coveted residential neighborhoods: Sukhumvit, Riverside, Sathorn, Asoke, Thong Lor, and Ari.',
};

export default async function DistrictsPage() {
  const districts = await fetchDistricts();
  const projects = await fetchProjects();

  return (
    <div className="pt-28 pb-20 bg-slate-50/50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-primary" />
            <span>Bangkok Enclaves & Neighborhoods</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Prime Bangkok Districts
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every neighborhood in Bangkok possesses distinct lifestyle energy, tenant demographics, and capital appreciation potential. Explore our curated insights below.
          </p>
        </div>

        {/* District Detail Cards */}
        <div className="space-y-10">
          {districts.map((d) => {
            const districtProjects = projects.filter(
              p => p.district.toLowerCase() === d.name.toLowerCase()
            );

            return (
              <div
                key={d.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Photo Column */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[400px]">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 shadow-xs">
                      {d.tag}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        {d.name}
                      </h2>
                      <span className="text-xs text-primary font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        {districtProjects.length} Selling {districtProjects.length === 1 ? 'Project' : 'Projects'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {d.description}
                    </p>

                    {/* Current selling projects in this district */}
                    {districtProjects.length > 0 && (
                      <div className="pt-2">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Featured Developments in {d.name}:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {districtProjects.map(proj => (
                            <Link
                              key={proj.id}
                              href={`/projects/${proj.slug}`}
                              className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-primary/40 rounded-xl transition flex items-center justify-between group"
                            >
                              <div className="truncate pr-2">
                                <span className="block text-xs font-bold text-slate-900 group-hover:text-primary transition truncate">
                                  {proj.title}
                                </span>
                                <span className="text-[10px] text-slate-500">
                                  {proj.statusBadge}
                                </span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/projects?district=${encodeURIComponent(d.name)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-800 text-white font-medium text-xs rounded-xl shadow-xs transition"
                    >
                      <span>Filter Projects in {d.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
