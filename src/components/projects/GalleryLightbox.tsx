'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  gallery: GalleryItem[];
  heroImage: string;
  projectTitle: string;
}

export default function GalleryLightbox({ gallery, heroImage, projectTitle }: GalleryLightboxProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const allImages = [
    { url: heroImage, title: `${projectTitle} - Exterior Facade`, category: 'Exterior' as const },
    ...gallery.filter(item => item.url !== heroImage)
  ];

  const categories = ['All', 'Exterior', 'Interior', 'Facilities'];

  const filteredImages = activeCategory === 'All'
    ? allImages
    : allImages.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % filteredImages.length);
    }
  };

  return (
    <div className="space-y-4">
      {/* Category Pills */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="text-xs text-slate-500 font-medium">
          {filteredImages.length} Visuals
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Main Large Image */}
        <div
          onClick={() => setActiveModalIndex(0)}
          className="relative md:col-span-2 md:row-span-2 h-72 md:h-[440px] rounded-2xl overflow-hidden cursor-pointer group bg-slate-100 border border-slate-200 shadow-xs"
        >
          <Image
            src={filteredImages[0]?.url || heroImage}
            alt={filteredImages[0]?.title || projectTitle}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="text-sm font-bold text-white truncate max-w-[80%]">
              {filteredImages[0]?.title || 'Overview'}
            </span>
            <span className="p-2 bg-black/60 backdrop-blur-md rounded-lg text-white group-hover:bg-primary transition">
              <Maximize2 className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Thumbnail Grid */}
        {filteredImages.slice(1, 5).map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveModalIndex(index + 1)}
            className="relative h-48 md:h-[214px] rounded-2xl overflow-hidden cursor-pointer group bg-slate-100 border border-slate-200 shadow-xs"
          >
            <Image
              src={img.url}
              alt={img.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-white truncate max-w-[80%] drop-shadow">
                {img.title}
              </span>
              <span className="p-1 rounded bg-black/50 text-white">
                <Maximize2 className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {activeModalIndex !== null && filteredImages[activeModalIndex] && (
        <div
          onClick={() => setActiveModalIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setActiveModalIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full h-[75vh] flex items-center justify-center"
          >
            <Image
              src={filteredImages[activeModalIndex].url}
              alt={filteredImages[activeModalIndex].title}
              fill
              sizes="90vw"
              className="object-contain"
            />

            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-primary transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-primary transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="mt-4 text-center">
            <h4 className="text-white text-base font-bold">
              {filteredImages[activeModalIndex].title}
            </h4>
            <p className="text-slate-400 text-xs mt-1">
              Image {activeModalIndex + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
