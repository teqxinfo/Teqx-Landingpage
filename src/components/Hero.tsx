import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Settings, 
  Check, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onScrollToHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollToHowItWorks }) => {
  const [activeTab, setActiveTab] = useState<'appointments' | 'patients' | 'messages'>('appointments');

  const appointments = [
    {
      time: '09:30 AM',
      patient: 'Rahul Menon',
      doctor: 'Dr. Sarah Patel',
      service: 'General Consultation',
      status: 'Confirmed',
    },
    {
      time: '10:00 AM',
      patient: 'Aisha Rahman',
      doctor: 'Dr. Sarah Patel',
      service: 'Follow-up Review',
      status: 'Confirmed',
    },
    {
      time: '10:30 AM',
      patient: 'Pending Confirmation',
      doctor: 'Dr. Ahmed Khan',
      service: 'New Patient Intake',
      status: 'Pending',
    },
    {
      time: '11:00 AM',
      patient: 'Muhammed Shamil',
      doctor: 'Dr. Ahmed Khan',
      service: 'Prescription Renewal',
      status: 'Confirmed',
    },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle radial glow background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[450px] pointer-events-none rounded-full blur-3xl opacity-60 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(11,99,206,0.12) 0%, rgba(11,99,206,0.03) 50%, transparent 80%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* HERO COPY CONTAINER */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B63CE] text-xs md:text-sm font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B63CE] animate-pulse" />
            HEALTHCARE, CONNECTED.
          </div>

          {/* Main H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.12] mb-6 text-balance">
            Healthcare, Connected Automatically.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal mb-8 text-balance">
            TEQX helps clinics simplify appointments, automate patient communication, and streamline everyday workflows — so your team can spend less time managing processes and more time caring for patients.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0B63CE] hover:bg-[#0952ac] text-white text-base font-semibold transition-all duration-150 shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B63CE]"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onScrollToHowItWorks}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-base font-semibold transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              <span>See How It Works</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Supporting Trust micro-markers */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0B63CE]" />
              Enterprise Data Security
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0B63CE]" />
              Works with WhatsApp & Web
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#0B63CE]" />
              Zero Disruption to Clinic Operations
            </span>
          </div>
        </div>

        {/* HERO PRODUCT UI COMPOSITION */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Clinic Dashboard Preview Frame */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_60px_-15px_rgba(11,31,58,0.08)] overflow-hidden transition-all duration-300">
            {/* Top Window Bar */}
            <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" />
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" />
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block" />
                <span className="ml-2 text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  TEQX Clinic Hub — Metropolitan Family Care
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
                <span className="hidden sm:inline">Today, 09:20 AM</span>
              </div>
            </div>

            {/* Dashboard Body Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
              {/* SIDE PANEL (Desktop) */}
              <div className="hidden md:flex md:col-span-3 border-r border-slate-100 bg-slate-50/40 p-4 flex-col justify-between">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Clinic Management
                  </div>
                  <button
                    onClick={() => setActiveTab('appointments')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === 'appointments'
                        ? 'bg-[#0B63CE] text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Appointments</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('patients')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === 'patients'
                        ? 'bg-[#0B63CE] text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Patients</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('messages')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === 'messages'
                        ? 'bg-[#0B63CE] text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Messages</span>
                  </button>
                  <div className="pt-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Operations
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer">
                    <Stethoscope className="w-4 h-4" />
                    <span>Doctors</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer">
                    <TrendingUp className="w-4 h-4" />
                    <span>Analytics</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="flex items-center gap-2 px-3 py-2 text-sm text-slate-500">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </div>
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <div className="col-span-1 md:col-span-9 p-4 sm:p-6 bg-white flex flex-col justify-between">
                <div>
                  {/* Top Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                    <div className="p-3.5 sm:p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                      <div className="text-xs font-medium text-slate-500 mb-1">
                        Today's Appointments
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tabular-nums">
                        24
                      </div>
                      <div className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
                        <span>+4 booked today</span>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                      <div className="text-xs font-medium text-slate-500 mb-1">
                        Confirmed
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0B63CE] tabular-nums">
                        21
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1 flex items-center gap-1">
                        <span>87.5% confirmation</span>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl border border-amber-100/70 bg-amber-50/40">
                      <div className="text-xs font-medium text-amber-700 mb-1">
                        Pending
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 tabular-nums">
                        3
                      </div>
                      <div className="text-[11px] text-amber-600 font-medium mt-1 flex items-center gap-1">
                        <span>Auto-prompt active</span>
                      </div>
                    </div>
                  </div>

                  {/* Appointments Table / List */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold text-[#0B1F3A] flex items-center gap-2">
                        <span>Today's Appointments</span>
                        <span className="text-xs font-medium text-slate-400">· 4 Upcoming</span>
                      </h3>
                      <span className="text-xs font-medium text-[#0B63CE]">View full schedule</span>
                    </div>

                    <div className="space-y-2.5">
                      {appointments.map((apt, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/20 transition-all duration-150 gap-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md min-w-[76px] justify-center tabular-nums">
                              <Clock className="w-3.5 h-3.5 text-slate-500" />
                              {apt.time}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-[#0B1F3A]">
                                {apt.patient}
                              </div>
                              <div className="text-xs text-slate-500 flex items-center gap-2">
                                <span>{apt.doctor}</span>
                                <span className="text-slate-300">·</span>
                                <span>{apt.service}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-start sm:self-auto">
                            {apt.status === 'Confirmed' ? (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                Confirmed
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-md">
                                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                                Pending Confirmation
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer bar of preview */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0B63CE]" />
                    <span>WhatsApp automation flow: Active (14 auto-replies handled today)</span>
                  </div>
                  <span className="hidden sm:inline font-medium text-slate-400">Response time: &lt; 2 sec</span>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING WHATSAPP-STYLE NOTIFICATION CARD */}
          <div className="absolute -bottom-6 -left-3 sm:-left-6 sm:bottom-6 z-20 max-w-xs sm:max-w-sm w-full bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_12px_36px_rgba(11,31,58,0.12)] transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.272.607-1.446c.159-.175.346-.219.462-.219s.231.002.332.008c.107.006.251-.041.392.298.145.349.492 1.2.535 1.288.043.088.072.19.014.305-.058.115-.087.19-.174.291-.087.102-.183.227-.261.305-.088.087-.179.182-.077.357.101.175.452.746.97 1.208.667.596 1.23.78 1.404.867.174.087.275.073.376-.044.102-.116.434-.508.55-.682.115-.175.231-.145.39-.087.159.058 1.01.477 1.184.564.174.087.289.13.332.203.043.072.043.421-.101.826z" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-bold text-slate-800">
                    Appointment confirmed
                  </span>
                  <span className="text-[10px] text-slate-400">Just now</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  "Your appointment with <span className="font-semibold text-slate-900">Dr. Ahmed</span> is confirmed for <span className="font-semibold text-[#0B63CE]">10:30 AM</span>."
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-emerald-700 font-semibold">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>Delivered via WhatsApp Bot</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND FLOATING ACCENT: Time Saved Indicator */}
          <div className="hidden lg:flex items-center gap-3 absolute -top-5 -right-4 z-20 bg-white border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-[0_8px_24px_rgba(11,31,58,0.08)]">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0B63CE]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0B1F3A]">12+ Hours Saved / Week</div>
              <div className="text-[10px] text-slate-500">Manual phone triage eliminated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
