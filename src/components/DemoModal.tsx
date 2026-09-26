import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, ShieldCheck, ArrowRight, Clock, Building } from 'lucide-react';
import { Logo } from './Logo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialty?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialSpecialty = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    clinicName: '',
    clinicSize: '4-10 Doctors',
    specialty: initialSpecialty || 'General / Multi-Specialty',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="dark" />
            <span className="text-xs font-semibold text-slate-400 border-l border-slate-200 pl-3">
              Personalized Clinic Walkthrough
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63CE]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1F3A] mb-2">
                Demo Request Confirmed
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. We've received your request for <span className="font-semibold text-slate-900">{formData.clinicName}</span>. A TEQX healthcare workflow specialist will reach out via WhatsApp/email within 2 hours.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Clinic Name:</span>
                  <span className="font-bold text-slate-800">{formData.clinicName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Practice Scale:</span>
                  <span className="font-bold text-slate-800">{formData.clinicSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Specialty:</span>
                  <span className="font-bold text-slate-800">{formData.specialty}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-[#0B63CE] hover:bg-[#0952ac] text-white text-sm font-semibold transition-colors"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#0B1F3A] tracking-tight">
                  Book a TEQX Demo
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Discover how TEQX automates patient communication and appointment management for your clinic.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jennifer Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B63CE] focus:ring-1 focus:ring-[#0B63CE]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Clinic / Hospital Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Family Health"
                      value={formData.clinicName}
                      onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B63CE] focus:ring-1 focus:ring-[#0B63CE]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="admin@clinic.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B63CE] focus:ring-1 focus:ring-[#0B63CE]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B63CE] focus:ring-1 focus:ring-[#0B63CE]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Clinic Size
                    </label>
                    <select
                      value={formData.clinicSize}
                      onChange={(e) => setFormData({ ...formData, clinicSize: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0B63CE] focus:ring-1 focus:ring-[#0B63CE]"
                    >
                      <option>Solo Practice (1 Doctor)</option>
                      <option>2–3 Doctors</option>
                      <option>4–10 Doctors</option>
                      <option>10+ Doctors / Multi-Branch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Primary Practice Area
                    </label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0B63CE] focus:ring-1 focus:ring-[#0B63CE]"
                    >
                      <option>General Practice / Family Health</option>
                      <option>Outpatient Clinic</option>
                      <option>Specialty Medical Center</option>
                      <option>Dental & Orthodontics</option>
                      <option>Eye Care & Ophthalmology</option>
                      <option>Multi-Location Healthcare Network</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    What is your biggest scheduling or communication challenge? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Phone lines busy in mornings, patient no-shows, manual WhatsApp replies..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B63CE] focus:ring-1 focus:ring-[#0B63CE]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0B63CE] hover:bg-[#0952ac] text-white text-base font-semibold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Schedule 20-Minute Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#0B63CE]" />
                  <span>Your clinic details are kept strictly confidential. No spam.</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
