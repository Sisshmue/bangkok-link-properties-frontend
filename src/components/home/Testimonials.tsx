import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & David Kensington',
      location: 'London, UK (Purchased in Sukhumvit 39)',
      rating: 5,
      quote: 'Working with Bangkok Link Properties made navigating Thailand’s foreign quota seamless. They secured an early-bird 3-bedroom unit at The Crown that exceeded all our expectations.',
    },
    {
      name: 'Kenji Takahashi',
      location: 'Tokyo, Japan (Investor in Asoke CBD)',
      rating: 5,
      quote: 'Exceptional professionalism and transparent yield analysis. Celeste Skyline was handed over on schedule and leased to a multinational tenant within three weeks.',
    },
    {
      name: 'Natcha & Paul Dumont',
      location: 'Bangkok & Paris (Riverfront Residence)',
      rating: 5,
      quote: 'The private riverboat tour along the Chao Phraya to inspect Riverfront Grand was unforgettable. Unmatched service, genuine honesty, and zero broker stress.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What our clients say
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real experiences from homeowners and global investors who trusted Bangkok Link
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-600 text-base italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                <span className="text-xs text-slate-500 mt-0.5 block">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
