export type ProjectStatus = 'Presale' | 'Under Construction' | 'Ready to Move In' | 'New Launch';

export interface Landmark {
  name: string;
  distance: string;
  category: 'Transit' | 'Shopping' | 'Hospital' | 'Education' | 'Nature' | 'Business' | 'Dining' | 'Hospitality' | 'Lifestyle';
}

export interface UnitType {
  id: string;
  name: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  priceTHB: number;
  priceUSD: number;
  floorPlan: string;
  floorPlanImage?: string;
  status: 'Available' | 'Limited Units' | 'Last 3 Units' | 'Last 2 Units' | 'Last 1 Unit' | 'By Private Appointment';
}

export interface GalleryItem {
  url: string;
  title: string;
  category: 'Exterior' | 'Interior' | 'Facilities';
}

export interface ProjectStats {
  expectedRentalYield: string;
  capitalAppreciationForecast: string;
  foreignQuotaAvailable: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  developer: string;
  district: string;
  subDistrict: string;
  address: string;
  status: ProjectStatus;
  statusBadge: string;
  propertyType: string;
  tenure: string;
  priceTHB: number;
  priceUSD: number;
  priceEUR: number;
  pricePerSqmTHB: number;
  completionYear: string;
  completionQuarter: string;
  constructionProgress: number;
  constructionStage: string;
  totalFloors: number;
  totalUnits: number;
  parkingPercentage: string;
  transitProximity: string;
  featured: boolean;
  heroImage: string;
  gallery: GalleryItem[];
  description: string;
  highlights: string[];
  amenities: string[];
  unitTypes: UnitType[];
  nearbyLandmarks: Landmark[];
  stats: ProjectStats;
  related?: Project[];
}

export interface District {
  id: string;
  name: string;
  tag: string;
  description: string;
  projectCount: number;
  image: string;
}

export interface ViewingBooking {
  id?: string;
  projectId?: string;
  projectName?: string;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  viewingType: string;
  unitPreference?: string;
  budget?: string;
  notes?: string;
  status?: string;
  createdAt?: string;
}

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  projectName?: string;
  inquiryType: string;
  message?: string;
  status?: string;
  createdAt?: string;
}

export type Currency = 'THB' | 'USD' | 'EUR';
