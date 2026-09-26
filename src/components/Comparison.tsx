import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  onOpenDemo: () => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onOpenDemo }) => {
  const beforePoints = [
    {
      title: 'Manual appointment calls',
      detail: 'Front desk spends hours answering routine booking calls during busy clinic hours.',
    },
    {
      title: 'Repeated confirmations',
      detail: 'Staff individually calling or texting patients to re-confirm upcoming clinic slots.',
    },
    {
      title: 'Scattered communication',
      detail: 'Patient queries split across personal WhatsApp numbers, reception phones, and sticky notes.',
    },
    {
      title: 'Staff-heavy workflows',
      detail: 'Administrative team consumes valuable time on scheduling instead of welcoming in-clinic patients.',
    },
    {
      title: 'Limited visibility',
      detail: 'Clinics struggle to track no-show trends, peak demand times, and doctor slot utilization.',
    },
  ];

  const withTeqxPoints = [
    {
      title: 'Connected appointment workflow',
      detail: 'Automated 24/7 self-scheduling directly integrated with doctor calendars in real time.',
    },
    {
      title: 'Automated communication',
      detail: 'Timely, automated WhatsApp confirmations and 2-way reminders with zero staff burden.',
    },
    {
      title: 'Centralized information',
      detail: 'One unified clinic dashboard where all messages, bookings, and patient histories live together.',
    },
    {
      title: 'Less repetitive admin work',
      detail: 'Staff redirect 12+ hours weekly toward compassionate patient intake and clinical care.',
    },
    {
      title: 'Clear operational visibility',
      detail: 'Real-time analytics on slot fill rates, confirmation speed, and clinic capacity.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50/60 border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0B63CE] mb-3">
            Workflow Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4 text-balance">
            Move from manual workflows to connected care.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            See the practical difference when routine operational tasks run through a purpose-built connected platform.
          </p>
        </div>

        {/* Side-by-side comparison columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT: BEFORE TEQX */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Conventional Routine
                  </span>
                  <h3 className="text-xl font-bold text-slate-700 mt-1">
                    BEFORE TEQX
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <X className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              <div className="space-y-6">
                {beforePoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-slate-700 leading-snug">
                        {item.title}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 font-medium">
              Average clinic phone load: 45–60 calls/day per doctor
            </div>
          </div>

          {/* RIGHT: WITH TEQX */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border-2 border-[#0B63CE]/70 shadow-[0_12px_36px_rgba(11,99,206,0.08)] relative overflow-hidden flex flex-col justify-between">
            {/* Subtle top indicator bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0B63CE]" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-blue-50 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B63CE]">
                    Modern Connected Care
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0B1F3A] mt-1">
                    WITH TEQX
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0B63CE]">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              <div className="space-y-6">
                {withTeqxPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0B63CE] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#0B1F3A] leading-snug">
                        {item.title}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-50 flex items-center justify-between">
              <span className="text-xs text-[#0B63CE] font-bold">
                ✓ 78% reduction in manual phone calls
              </span>
              <button
                onClick={onOpenDemo}
                className="text-xs font-bold text-[#0B1F3A] hover:text-[#0B63CE] inline-flex items-center gap-1 transition-colors"
              >
                <span>Upgrade Your Clinic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
