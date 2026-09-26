import React, { useState } from 'react';
import { MessageSquare, Cpu, CalendarDays, CheckCircle2, Clock, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: '01',
      title: 'Patient starts a conversation.',
      summary: 'Initiated via WhatsApp, website widget, or QR link.',
      visual: (
        <div className="bg-[#EFEAE2] p-4 rounded-xl shadow-inner border border-slate-200">
          <div className="text-[10px] text-slate-400 font-semibold mb-2 text-center">
            TODAY · WHATSAPP
          </div>
          <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[210px] text-xs text-slate-800 shadow-sm">
            <p className="leading-snug">
              "Hi, I want to book an appointment with Dr. Ahmed."
            </p>
            <div className="text-[9px] text-slate-400 text-right mt-1">10:14 AM</div>
          </div>
        </div>
      ),
    },
    {
      step: '02',
      title: 'TEQX understands the request.',
      summary: 'Smart routing queries doctor calendars & availability in real time.',
      visual: (
        <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex flex-col justify-center min-h-[120px]">
          <div className="flex items-center gap-2 mb-2 text-[#0B63CE]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B63CE]"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
              TEQX Automation
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Checking Dr. Ahmed's schedule for next open consultation slots...
          </p>
          <div className="mt-2 text-[10px] text-slate-500 font-mono">
            &gt; Syncing with Clinic EMR · 0.4s
          </div>
        </div>
      ),
    },
    {
      step: '03',
      title: 'Available appointment slots are presented.',
      summary: 'Patient chooses from synchronized, real-time openings.',
      visual: (
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-800 mb-2 flex items-center justify-between">
            <span>Available Slots</span>
            <span className="text-[10px] text-[#0B63CE] font-semibold">Today / Tomorrow</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <button className="py-2 text-center rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:border-[#0B63CE]">
              10:00 AM
            </button>
            <button className="py-2 text-center rounded-lg bg-[#0B63CE] text-white text-xs font-bold shadow-sm ring-2 ring-blue-200">
              10:30 AM
            </button>
            <button className="py-2 text-center rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:border-[#0B63CE]">
              11:00 AM
            </button>
          </div>
        </div>
      ),
    },
    {
      step: '04',
      title: 'Appointment is confirmed.',
      summary: 'Instant sync to clinic dashboard, calendar invite, and automated reminder.',
      visual: (
        <div className="bg-white p-4 rounded-xl border border-emerald-200/90 shadow-sm bg-gradient-to-b from-white to-emerald-50/20">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Appointment Confirmed</span>
          </div>
          <div className="space-y-1 text-xs text-slate-700">
            <div className="font-semibold text-slate-900">Dr. Ahmed</div>
            <div className="flex items-center gap-1.5 text-slate-600">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>10:30 AM · Monday</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span>WhatsApp Confirmation Sent</span>
            <span className="text-emerald-600 font-medium">✓ Delivered</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-slate-50/50 border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0B63CE] mb-3">
            Workflow Continuity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4 text-balance">
            From patient message to confirmed appointment.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Eliminate phone tag and manual schedule coordination with an autonomous, four-step patient booking journey.
          </p>
        </div>

        {/* 4-Step Process Layout */}
        <div className="relative">
          {/* Desktop connecting baseline line */}
          <div className="hidden lg:block absolute top-[138px] left-[10%] right-[10%] h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const stepNum = index + 1;
              const isSelected = activeStep === stepNum;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(stepNum)}
                  className={`bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#0B63CE] shadow-lg ring-1 ring-[#0B63CE]/20 -translate-y-1'
                      : 'border-slate-200/90 shadow-sm hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Step badge & Visual preview */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-extrabold tracking-wider px-2.5 py-1 rounded-md ${
                        isSelected 
                          ? 'bg-[#0B63CE] text-white' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        STEP {item.step}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        {stepNum === 1 && 'Initiation'}
                        {stepNum === 2 && 'Automation'}
                        {stepNum === 3 && 'Selection'}
                        {stepNum === 4 && 'Resolution'}
                      </span>
                    </div>

                    {/* Step Visual Card */}
                    <div className="mb-5">
                      {item.visual}
                    </div>

                    <h3 className="text-base font-bold text-[#0B1F3A] mb-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mt-2 pt-3 border-t border-slate-100">
                    {item.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Micro-summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Average completion time from patient message to confirmed calendar slot: 38 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};
