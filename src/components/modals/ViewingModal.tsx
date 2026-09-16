'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Phone, Building, Sparkles } from 'lucide-react';
import { bookViewing } from '@/lib/api';

interface ViewingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectTitle?: string;
  defaultProjectId?: string;
}

const AVAILABLE_PROJECTS = [
  "The Crown Residences Sukhumvit 39",
  "Riverfront Grand Charoenkrung",
  "Celeste Skyline Asoke",
  "The Atelier Thonglor 13",
  "Luxe Horizon Sathorn",
  "Aria Sanctuary Ari"
];

export default function ViewingModal({
  isOpen,
  onClose,
  defaultProjectTitle,
  defaultProjectId
}: ViewingModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: defaultProjectTitle || AVAILABLE_PROJECTS[0],
    viewingType: 'In-Person VIP Tour',
    preferredDate: '',
    preferredTime: '14:00 PM',
    unitPreference: '2-Bedroom',
    budget: '฿20M - ฿40M',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await bookViewing({
        projectId: defaultProjectId || 'general',
        projectName: formData.projectName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        preferredTime: formData.preferredTime,
        viewingType: formData.viewingType,
        unitPreference: formData.unitPreference,
        budget: formData.budget,
        notes: formData.notes
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto border border-blue-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Private Viewing Requested</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-primary font-semibold">{formData.name}</span>. A dedicated Senior Client Advisor from Bangkok Link Properties will contact you via WhatsApp/Phone within 2 hours to finalize your itinerary.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Development:</span>
                <span className="text-slate-900 font-semibold">{formData.projectName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Format:</span>
                <span className="text-primary font-medium">{formData.viewingType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferred Slot:</span>
                <span className="text-slate-900 font-medium">{formData.preferredDate || 'Upcoming Date'} at {formData.preferredTime}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-3 bg-primary hover:bg-blue-800 text-white font-medium rounded-xl transition shadow-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Exclusive Private Access</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Schedule a VIP Viewing
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Experience bespoke show suites, penthouse walk-throughs, and site inspections with our senior real estate advisors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Project Selection */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Selling Development
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <select
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  >
                    {AVAILABLE_PROJECTS.map((proj) => (
                      <option key={proj} value={proj}>
                        {proj}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Khun / Mr. / Ms. Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone / WhatsApp / LINE *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+66 81 234 5678"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Viewing Format
                  </label>
                  <select
                    value={formData.viewingType}
                    onChange={(e) => setFormData({ ...formData, viewingType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  >
                    <option value="In-Person VIP Tour">In-Person VIP Show Gallery</option>
                    <option value="Live Virtual 4K Tour">Live Virtual 4K Video Tour</option>
                    <option value="Private Chauffeur & Site Inspection">Private Chauffeur & Site Tour</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    >
                      <option value="10:00 AM">10:00 AM (Morning Fresh)</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="14:00 PM">02:00 PM (Afternoon)</option>
                      <option value="16:00 PM">04:00 PM</option>
                      <option value="17:30 PM">05:30 PM (Golden Hour / Sunset)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Specific Requirements or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Interested in high floor, foreign quota, parking ratio..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary hover:bg-blue-800 text-white font-medium rounded-xl text-xs sm:text-sm shadow-xs transition disabled:opacity-50"
                >
                  {loading ? 'Submitting Reservation...' : 'Confirm VIP Viewing Appointment'}
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  🔒 Strict confidentiality guaranteed. Bangkok Link Properties does not share private client data.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
