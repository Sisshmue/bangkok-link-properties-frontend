import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { fetchProjectBySlug, fetchProjects } from '@/lib/api';
import GalleryLightbox from '@/components/projects/GalleryLightbox';
import UnitPlansShowcase from '@/components/projects/UnitPlansShowcase';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectDetailActions from '@/components/projects/ProjectDetailActions';
import {
  MapPin,
  Building,
  Calendar,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Train,
  Sparkles,
  ChevronRight,
  Phone,
  MessageSquare
} from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await fetchProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found | Bangkok Link Properties' };

  return {
    title: `${project.title} | Bangkok Link Properties`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = await fetchProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 bg-slate-50/50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/projects" className="hover:text-primary transition">Selling Projects</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold truncate max-w-xs">{project.title}</span>
        </nav>

        {/* Header Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                Ready to Move In
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 flex items-center gap-1.5 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {project.district} • {project.subDistrict}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Freehold
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <span>Developer: <strong className="text-slate-800">{project.developer}</strong></span>
              <span>•</span>
              <span className="flex items-center gap-1 text-primary font-semibold">
                <Train className="w-3.5 h-3.5" />
                {project.transitProximity}
              </span>
            </div>
          </div>

          {/* Pricing & Booking Actions */}
          <ProjectDetailActions
            projectId={project.id}
            projectTitle={project.title}
            priceTHB={project.priceTHB}
            pricePerSqm={project.pricePerSqmTHB}
          />
        </div>

        {/* Gallery */}
        <GalleryLightbox
          gallery={project.gallery}
          heroImage={project.heroImage}
          projectTitle={project.title}
        />

        {/* Specs Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Property & Tenure</span>
            <div className="text-xl font-bold text-slate-900 mt-1">{project.propertyType}</div>
            <span className="text-xs text-emerald-600 font-semibold mt-0.5 block">100% Freehold Ownership</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Storeys & Units</span>
            <div className="text-xl font-bold text-slate-900 mt-1">{project.totalFloors} Floors</div>
            <span className="text-xs text-slate-500 mt-0.5 block">{project.totalUnits} Exclusive Residences</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Transit & Access</span>
            <div className="text-xl font-bold text-slate-900 mt-1 truncate">{project.district} Prime</div>
            <span className="text-xs text-primary font-medium mt-0.5 block truncate">{project.transitProximity}</span>
          </div>
        </div>

        {/* Main Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Development Overview & Concept
              </h3>
              <p className="text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>

              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Signature Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Unit Plans */}
            <UnitPlansShowcase
              unitTypes={project.unitTypes}
              projectTitle={project.title}
              projectId={project.id}
            />

            {/* Amenities */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Facilities</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  World-Class Resident Amenities
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2.5 text-xs font-medium text-slate-800"
                  >
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Landmarks */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Location Guide</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Surrounding Landmarks
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{project.address}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.nearbyLandmarks.map((lm, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2 text-slate-800 font-medium">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span>{lm.name}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-white text-slate-700 font-bold border border-slate-200">
                      {lm.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Advisor Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5 sticky top-24">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                    alt="Bangkok Link Advisor"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Khun Pimchanok V.</h4>
                  <span className="text-xs text-primary font-semibold block">Senior Portfolio Director</span>
                  <span className="text-[11px] text-slate-500">Bangkok Link Private Desk</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Direct liaison with developer sales management. Contact for private viewings, developer incentives, and foreign allocation confirmation.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href="https://wa.me/66812345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition active:scale-[0.98] shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: +66 81 234 5678</span>
                </a>

                <a
                  href="tel:+6621234567"
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call: +66 (0) 2 123 4567</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                <div className="flex justify-between">
                  <span>Tenure:</span>
                  <strong className="text-slate-900">{project.tenure}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Foreign Quota:</span>
                  <strong className="text-emerald-600 font-bold">49% Available</strong>
                </div>
                <div className="flex justify-between">
                  <span>Buyer Fee:</span>
                  <strong className="text-slate-900">0% (Developer Direct)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Developments */}
        {project.related && project.related.length > 0 && (
          <div className="pt-10 border-t border-slate-200 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Similar Developments in {project.district}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.related.map((rel) => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
