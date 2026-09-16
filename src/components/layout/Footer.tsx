'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ShieldCheck, Star, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      {/* Brand Values Banner */}
      <div className="border-b border-slate-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm">Trust</h4>
                <p className="text-xs text-slate-500">100% Verified Freehold & 49% Foreign Quota</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm">Luxury</h4>
                <p className="text-xs text-slate-500">Prime Locations & Architectural Distinction</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm">Service</h4>
                <p className="text-xs text-slate-500">White-Glove Advisory & VIP Accompaniment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1 border border-slate-200 shadow-xs overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Bangkok Link Properties"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Bangkok<span className="text-primary">Link</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                  Properties
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Bangkok Link Properties specializes in curated residential acquisitions, presale developer allocations, and high-yield properties across Bangkok&apos;s most coveted enclaves.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs">
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium hover:bg-emerald-100 transition"
              >
                LINE: @bangkoklink
              </a>
              <a
                href="https://wa.me/66812345678"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium hover:bg-emerald-100 transition"
              >
                WhatsApp: +66 81 234 5678
              </a>
            </div>
          </div>

          {/* Selling Projects */}
          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Selling Developments
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/projects/the-crown-residences-sukhumvit-39" className="hover:text-primary transition">The Crown Sukhumvit 39</Link></li>
              <li><Link href="/projects/riverfront-grand-charoenkrung" className="hover:text-primary transition">Riverfront Grand</Link></li>
              <li><Link href="/projects/celeste-skyline-asoke" className="hover:text-primary transition">Celeste Skyline Asoke</Link></li>
              <li><Link href="/projects/the-atelier-thonglor-13" className="hover:text-primary transition">The Atelier Thonglor</Link></li>
              <li><Link href="/projects/luxe-horizon-sathorn" className="hover:text-primary transition">Luxe Horizon Sathorn</Link></li>
              <li><Link href="/projects/aria-sanctuary-ari" className="hover:text-primary transition">Aria Sanctuary Ari</Link></li>
            </ul>
          </div>

          {/* Prime Enclaves */}
          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Prime Districts
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/projects?district=Sukhumvit" className="hover:text-primary transition">Sukhumvit</Link></li>
              <li><Link href="/projects?district=Riverside" className="hover:text-primary transition">Chao Phraya Riverside</Link></li>
              <li><Link href="/projects?district=Asoke" className="hover:text-primary transition">Asoke CBD</Link></li>
              <li><Link href="/projects?district=Thong+Lor" className="hover:text-primary transition">Thong Lor</Link></li>
              <li><Link href="/projects?district=Sathorn" className="hover:text-primary transition">Sathorn</Link></li>
              <li><Link href="/projects?district=Ari" className="hover:text-primary transition">Ari</Link></li>
            </ul>
          </div>

          {/* Office Contact */}
          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Private Desk
            </h5>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Level 32, Singha Complex, Asoke, Bangkok 10310</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+66 (0) 2 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>vip@bangkoklinkproperties.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Bangkok Link Properties Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-primary transition">About Us</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
            <span>•</span>
            <Link href="/admin" className="hover:text-primary transition">Agent Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
