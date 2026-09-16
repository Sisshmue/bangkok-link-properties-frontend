'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { submitInquiry } from '@/lib/api';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General Portfolio Inquiry',
    projectName: 'All Bangkok Developments',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        projectName: formData.projectName,
        message: formData.message
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
    <div className="pt-28 pb-20 bg-slate-50/50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>Private Client Advisory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect with Bangkok Link Properties
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our senior advisors are available for discrete consultations, private viewing arrangements, and portfolio structuring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Direct Communication</h3>

              <div className="space-y-4 text-xs">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/66812345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 font-medium">WhatsApp Private Line</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition">+66 81 234 5678</span>
                  </div>
                </a>

                {/* LINE */}
                <a
                  href="https://line.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 font-medium">LINE Official Account</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition">@bangkoklink</span>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary border border-blue-200 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 font-medium">Head Office Switchboard</span>
                    <span className="text-sm font-bold text-slate-900">+66 (0) 2 123 4567</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary border border-blue-200 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 font-medium">Private Advisory Email</span>
                    <span className="text-sm font-bold text-slate-900">vip@bangkoklinkproperties.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Headquarters & Showroom</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Bangkok Link Properties Co., Ltd.</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Level 32, Singha Complex, Asoke-Phetchaburi Road, Bang Kapi, Huai Khwang, Bangkok 10310 Thailand (Directly connected to MRT Phetchaburi Exit 2)
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Monday – Saturday: 09:00 – 19:00 ICT</span>
              </div>
            </div>
          </div>

          {/* Contact & Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            {success ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto border border-blue-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Registered</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-primary font-semibold">{formData.name}</span>. A Senior Client Advisor from Bangkok Link Properties will contact you within 2 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-2.5 bg-primary hover:bg-blue-800 text-white text-xs font-medium rounded-xl shadow-xs transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Request Private Consultation
                </h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Fill out your requirements below and our portfolio specialists will prepare tailored developer pricing and unit recommendations.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Khun / Mr. / Ms. Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="investor@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone / WhatsApp / LINE
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+66 81 234 5678"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      >
                        <option value="General Portfolio Inquiry">General Portfolio Inquiry</option>
                        <option value="Presale Early Bird Allocation">Presale Early Bird Allocation</option>
                        <option value="Foreign Quota (49%) Inquiries">Foreign Quota (49%) Inquiries</option>
                        <option value="Investment & Rental Yield Structuring">Investment & Rental Yield Structuring</option>
                        <option value="Penthouse & Private Villa Portfolio">Penthouse & Private Villa Portfolio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Target Development of Interest
                    </label>
                    <select
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    >
                      <option value="All Bangkok Developments">All Bangkok Developments (General Advisory)</option>
                      <option value="The Crown Residences Sukhumvit 39">The Crown Residences Sukhumvit 39</option>
                      <option value="Riverfront Grand Charoenkrung">Riverfront Grand Charoenkrung</option>
                      <option value="Celeste Skyline Asoke">Celeste Skyline Asoke</option>
                      <option value="The Atelier Thonglor 13">The Atelier Thonglor 13</option>
                      <option value="Luxe Horizon Sathorn">Luxe Horizon Sathorn</option>
                      <option value="Aria Sanctuary Ari">Aria Sanctuary Ari</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Message / Budget / Specific Layout Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention your preferred move-in timeframe, budget range in THB or USD, and any specific unit preferences..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-primary hover:bg-blue-800 text-white font-medium text-xs sm:text-sm rounded-xl shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Submitting Consultation Request...' : 'Send Inquiry to Private Desk'}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 Strict client confidentiality. We do not distribute client information to third parties.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
