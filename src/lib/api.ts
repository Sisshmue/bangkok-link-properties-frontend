import { Project, District, ViewingBooking, Inquiry } from '@/types';
import { fallbackProjects, fallbackDistricts } from './mockData';

const USE_BACKEND = process.env.NEXT_PUBLIC_USE_BACKEND === 'true';
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.INTERNAL_API_URL || 'http://localhost:5000';

export async function fetchProjects(params?: {
  district?: string;
  status?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sort?: string;
}): Promise<Project[]> {
  if (USE_BACKEND) {
    try {
      const query = new URLSearchParams();
      if (params) {
        if (params.district && params.district !== 'all') query.set('district', params.district);
        if (params.status && params.status !== 'all') query.set('status', params.status);
        if (params.propertyType && params.propertyType !== 'all') query.set('propertyType', params.propertyType);
        if (params.minPrice) query.set('minPrice', params.minPrice.toString());
        if (params.maxPrice) query.set('maxPrice', params.maxPrice.toString());
        if (params.search) query.set('search', params.search);
        if (params.sort) query.set('sort', params.sort);
      }

      const url = `${BASE_URL}/api/projects?${query.toString()}`;
      const res = await fetch(url, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        return json.data || [];
      }
    } catch (error) {
      console.warn('Backend API fetch failed, utilizing standalone mock data:', error);
    }
  }

  let results = [...fallbackProjects];

  if (params) {
    if (params.search) {
      const q = params.search.toLowerCase();
      results = results.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.district.toLowerCase().includes(q) ||
        p.subDistrict.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
      );
    }
    if (params.district && params.district !== 'all') {
      results = results.filter(p => p.district.toLowerCase() === params.district!.toLowerCase());
    }
    if (params.status && params.status !== 'all') {
      results = results.filter(p => p.status.toLowerCase() === params.status!.toLowerCase());
    }
    if (params.propertyType && params.propertyType !== 'all') {
      results = results.filter(p => p.propertyType.toLowerCase() === params.propertyType!.toLowerCase());
    }
    if (params.minPrice) {
      results = results.filter(p => p.priceTHB >= params.minPrice!);
    }
    if (params.maxPrice) {
      results = results.filter(p => p.priceTHB <= params.maxPrice!);
    }
    if (params.sort === 'price-asc') {
      results.sort((a, b) => a.priceTHB - b.priceTHB);
    } else if (params.sort === 'price-desc') {
      results.sort((a, b) => b.priceTHB - a.priceTHB);
    }
  }
  return results;
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  if (USE_BACKEND) {
    try {
      const res = await fetch(`${BASE_URL}/api/projects/${slug}`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch (error) {
      console.warn(`Backend API fetch for slug ${slug} failed, using standalone mock data:`, error);
    }
  }

  const proj = fallbackProjects.find(p => p.slug === slug);
  if (!proj) return null;
  const related = fallbackProjects.filter(p => p.id !== proj.id && (p.district === proj.district || p.status === proj.status)).slice(0, 3);
  return { ...proj, related };
}

export async function fetchFeaturedProjects(): Promise<Project[]> {
  if (USE_BACKEND) {
    try {
      const res = await fetch(`${BASE_URL}/api/projects/featured`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch (error) {
      console.warn('Backend API fetch for featured projects failed, using standalone mock data:', error);
    }
  }

  return fallbackProjects.filter(p => p.featured);
}

export async function fetchDistricts(): Promise<District[]> {
  if (USE_BACKEND) {
    try {
      const res = await fetch(`${BASE_URL}/api/projects/districts`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        return json.data;
      }
    } catch (error) {
      console.warn('Backend API fetch for districts failed, using standalone mock data:', error);
    }
  }

  return fallbackDistricts;
}

export async function bookViewing(data: ViewingBooking): Promise<{ success: boolean; message: string }> {
  if (USE_BACKEND) {
    try {
      const res = await fetch(`${BASE_URL}/api/viewings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        const json = await res.json();
        return { success: json.success, message: json.message || 'Viewing appointment confirmed!' };
      }
    } catch (error) {
      console.warn('Backend API submission failed, using standalone mock booking response:', error);
    }
  }

  return {
    success: true,
    message: 'VIP viewing scheduled successfully. Our client advisor will contact you within 2 hours.'
  };
}

export async function submitInquiry(data: Inquiry): Promise<{ success: boolean; message: string }> {
  if (USE_BACKEND) {
    try {
      const res = await fetch(`${BASE_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        const json = await res.json();
        return { success: json.success, message: json.message || 'Inquiry received successfully.' };
      }
    } catch (error) {
      console.warn('Backend API submission failed, using standalone mock inquiry response:', error);
    }
  }

  return {
    success: true,
    message: 'Your inquiry has been registered. A Bangkok Link senior advisor will contact you.'
  };
}

export async function fetchViewings(): Promise<ViewingBooking[]> {
  if (USE_BACKEND) {
    try {
      const res = await fetch(`${BASE_URL}/api/viewings`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        return json.data || [];
      }
    } catch (error) {
      console.warn('Backend API fetch for viewings failed, using standalone mock data:', error);
    }
  }

  return [
    {
      id: "vw-01",
      projectId: "blp-01",
      projectName: "The Crown Residences Sukhumvit 39",
      name: "Alexander Wright",
      email: "a.wright@londoncap.co.uk",
      phone: "+44 7700 900123",
      preferredDate: "2026-09-18",
      preferredTime: "14:00",
      viewingType: "In-Person VIP Tour",
      unitPreference: "3-Bedroom Horizon Suite",
      budget: "฿50M - ฿70M",
      status: "Confirmed",
      createdAt: new Date().toISOString()
    },
    {
      id: "vw-02",
      projectId: "blp-02",
      projectName: "Riverfront Grand Charoenkrung",
      name: "Natcha Somchai",
      email: "natcha.s@investment.th",
      phone: "+66 81 823 4567",
      preferredDate: "2026-09-20",
      preferredTime: "10:30",
      viewingType: "Private Boat & Site Tour",
      unitPreference: "River Villa Sky Duplex",
      budget: "฿80M+",
      status: "Pending Review",
      createdAt: new Date().toISOString()
    }
  ];
}
