'use client';

import React, { useState, useEffect } from 'react';
import { ViewingBooking, Inquiry, Project } from '@/types';
import { fetchViewings, fetchProjects } from '@/lib/api';
import { Calendar, Users, Building, ShieldCheck, Mail, Phone, Clock, Search, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const [viewings, setViewings] = useState<ViewingBooking[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeTab, setActiveTab] = useState<'viewings' | 'projects'>('viewings');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [vwData, projData] = await Promise.all([
          fetchViewings(),
          fetchProjects()
        ]);
        setViewings(vwData);
        setProjects(projData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-50/50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Bangkok Link Agent Operations Desk</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Private Client Appointments & Portfolios
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Internal overview of scheduled VIP viewings, client inquiries, and active selling projects.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium rounded-xl transition shadow-xs"
            >
              Public Catalog
            </Link>
          </div>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Scheduled VIP Viewings</span>
            <div className="text-2xl font-bold text-slate-900 mt-1">{viewings.length}</div>
            <span className="text-[11px] text-primary mt-0.5 block">High-Net-Worth Buyers</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Active Selling Projects</span>
            <div className="text-2xl font-bold text-primary mt-1">{projects.length}</div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Across 6 Prime Districts</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Total Available Units</span>
            <div className="text-2xl font-bold text-emerald-600 mt-1">
              {projects.reduce((acc, p) => acc + p.totalUnits, 0)}
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">100% Freehold Title</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Presale vs Ready</span>
            <div className="text-2xl font-bold text-amber-600 mt-1">
              {projects.filter(p => p.status === 'Presale').length} / {projects.filter(p => p.status === 'Ready to Move In').length}
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Presale / Move-In Ready</span>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('viewings')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === 'viewings'
                ? 'bg-primary text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            VIP Viewing Appointments ({viewings.length})
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === 'projects'
                ? 'bg-primary text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Managed Selling Projects ({projects.length})
          </button>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="text-center py-16 text-slate-400 text-xs">
            Loading desk records...
          </div>
        ) : activeTab === 'viewings' ? (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Confirmed & Pending Client Tours
              </h3>
              <span className="text-xs text-slate-500">Sorted by newest</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="p-4">Client</th>
                    <th className="p-4">Target Development</th>
                    <th className="p-4">Tour Format</th>
                    <th className="p-4">Preferred Slot</th>
                    <th className="p-4">Unit Interest</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {viewings.map((vw) => (
                    <tr key={vw.id} className="hover:bg-slate-50/80 transition">
                      <td className="p-4">
                        <div className="font-semibold text-slate-900">{vw.name}</div>
                        <div className="text-[11px] text-slate-500">{vw.email}</div>
                        <div className="text-[11px] text-primary">{vw.phone}</div>
                      </td>
                      <td className="p-4 font-medium text-slate-900">
                        {vw.projectName}
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-primary font-medium border border-blue-200 text-[11px]">
                          {vw.viewingType}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600">
                        <div className="flex items-center gap-1 text-slate-900">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{vw.preferredDate}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{vw.preferredTime}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-slate-900 font-medium">{vw.unitPreference || 'General'}</div>
                        <div className="text-[11px] text-amber-600">{vw.budget}</div>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          {vw.status || 'Confirmed'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-primary border border-blue-200">
                      {p.status}
                    </span>
                    <span className="text-slate-500">{p.district}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mt-2">{p.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{p.tagline}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs flex items-center justify-between">
                  <span className="text-slate-500">Progress: <strong className="text-slate-900">{p.constructionProgress}%</strong></span>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-primary hover:text-blue-800 font-medium text-xs"
                  >
                    View Project Page →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
