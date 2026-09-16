import React from 'react';
import Hero from '@/components/home/Hero';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import BrandPillars from '@/components/home/BrandPillars';
import DistrictGuide from '@/components/home/DistrictGuide';
import CallToAction from '@/components/home/CallToAction';
import { fetchProjects, fetchDistricts } from '@/lib/api';

export const revalidate = 0;

export default async function HomePage() {
  const [projects, districts] = await Promise.all([
    fetchProjects(),
    fetchDistricts(),
  ]);

  return (
    <div className="space-y-0">
      {/* 1. Minimalist Hero with Instant Search */}
      <Hero />

      {/* 2. Featured Selling Developments */}
      <ProjectShowcase projects={projects} />

      {/* 3. About Bangkok Link Properties & Brand Pillars (Trust, Luxury, Service) */}
      <BrandPillars />

      {/* 4. Bangkok Enclaves / Neighborhood Guide */}
      <DistrictGuide districts={districts} />

      {/* 5. Call To Action Banner */}
      <CallToAction />
    </div>
  );
}
