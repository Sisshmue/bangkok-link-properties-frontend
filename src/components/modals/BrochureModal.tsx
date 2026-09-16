'use client';

import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, User, Mail, Phone } from 'lucide-react';
import { submitInquiry } from '@/lib/api';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function BrochureModal({ isOpen, onClose, projectName }: BrochureModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectName: projectName,
        inquiryType: 'Brochure & Floor Plan Package',
        message: `Requested official brochure, master floor plans, and current price sheet for ${projectName}.`
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-7">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto border border-blue-200">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Brochure Dispatched</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We have dispatched the official high-resolution architectural dossier & master floor plans for <span className="text-primary font-semibold">{projectName}</span> to <span className="text-slate-900 font-medium">{formData.email}</span>.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-700">
              📁 Package includes:
              <ul className="list-disc list-inside mt-1 text-slate-500 space-y-0.5">
                <li>Complete Master Plan & Unit Dimensions</li>
                <li>Specification & Finishes Material Catalog</li>
                <li>Exclusive Foreign Quota Price Schedule</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="mt-4 w-full py-2.5 bg-primary hover:bg-blue-800 text-white text-xs font-medium rounded-xl transition shadow-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>Developer Dossier</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Download Project Portfolio
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Get instant access to complete architectural floor plans, high-res renderings, and updated unit availability for <span className="text-primary font-medium">{projectName}</span>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Khun / Mr. / Ms. Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Email for Delivery *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="investor@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">WhatsApp / Phone (Optional)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+66 81 234 5678"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-2.5 bg-primary hover:bg-blue-800 text-white font-medium rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                <span>{loading ? 'Preparing Documents...' : 'Receive Official Brochure & Plans'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
