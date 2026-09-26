import React from 'react';
import { PhoneCall, MessageCircleOff, RefreshCw, GitFork } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      number: '01',
      title: 'MANUAL BOOKINGS',
      description: 'Appointments handled through repeated calls and messages.',
      icon: PhoneCall,
      impact: 'Reception desks overwhelmed during peak morning call spikes',
    },
    {
      number: '02',
      title: 'MISSED COMMUNICATION',
      description: 'Patients may struggle to reach the right person at the right time.',
      icon: MessageCircleOff,
      impact: 'Unanswered queries lead to patient drop-off and frustration',
    },
    {
      number: '03',
      title: 'REPETITIVE FOLLOW-UPS',
      description: 'Staff spend time confirming and reminding patients manually.',
      icon: RefreshCw,
      impact: 'Up to 3 hours daily spent dialing for slot confirmations',
    },
    {
      number: '04',
      title: 'DISCONNECTED WORKFLOWS',
      description: 'Information is scattered across conversations and systems.',
      icon: GitFork,
      impact: 'Double-bookings, missed notes, and disjointed schedules',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/60 border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0B63CE] mb-3">
            The Clinic Bottleneck
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4 text-balance">
            Your clinic shouldn't run on phone calls, spreadsheets, and manual follow-ups.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Healthcare teams spend valuable time managing repetitive communication and appointment workflows. TEQX brings these processes into one connected system.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 tabular-nums">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold tracking-wider text-[#0B1F3A] mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
                  {item.impact}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
