'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCurrency } from '@/context/CurrencyContext';
import { Currency } from '@/types';
import { Menu, X, Calendar, Building2, Phone, ChevronRight } from 'lucide-react';
import ViewingModal from '@/components/modals/ViewingModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Selling Projects', href: '/projects' },
    { label: 'Districts', href: '/districts' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 py-2.5 items-center justify-between">
            {/* Logo & Brand Identity */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xs group-hover:border-primary transition overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Bangkok Link Properties"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition">
                  Bangkok<span className="text-primary">Link</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate-600">
                  Properties
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                      active
                        ? 'text-primary bg-blue-50/80 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Controls */}
            <div className="flex items-center gap-3">
              {/* Currency Selector (Clean Minimalist Pill) */}
              <div className="hidden sm:flex items-center bg-slate-100 border border-slate-200 rounded-lg p-1 text-xs">
                {(['THB', 'USD', 'EUR'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                      currency === c
                        ? 'bg-white text-primary font-bold shadow-sm'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {c === 'THB' ? '฿ THB' : c === 'USD' ? '$ USD' : '€ EUR'}
                  </button>
                ))}
              </div>

              {/* VIP Viewing Primary Button */}
              <button
                onClick={() => setIsViewingModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Viewing</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition ${
                      active
                        ? 'text-primary bg-blue-50 font-semibold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Currency selector on mobile */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Currency:</span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                {(['THB', 'USD', 'EUR'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium ${
                      currency === c ? 'bg-white text-primary font-bold shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsViewingModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold py-3 rounded-xl shadow-sm transition active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule VIP Viewing</span>
            </button>
          </div>
        )}
      </header>

      {/* Global Viewing Modal */}
      <ViewingModal
        isOpen={isViewingModalOpen}
        onClose={() => setIsViewingModalOpen(false)}
      />
    </>
  );
}
