import React, { useState } from 'react';
import { Clock, TrendingDown, Users, DollarSign, Sparkles, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [doctorsCount, setDoctorsCount] = useState(4);
  const [dailyAppointments, setDailyAppointments] = useState(45);

  // Calculations
  // Average call time = 3.5 mins per booking + 2 mins per reminder
  // Total hours saved / week = (dailyAppointments * 5.5 mins * 6 days) / 60 * 0.75 (automation rate)
  const weeklyHoursSaved = Math.round(((dailyAppointments * 5.5 * 6) / 60) * 0.78);
  const annualHoursSaved = weeklyHoursSaved * 50;
  // No-show reduction: typically 18% down to 4% (14% recovered slots)
  const monthlyRecoveredSlots = Math.round(dailyAppointments * 26 * 0.14);
  // Reinvested clinic capacity
  const weeklyValueCreatedHours = Math.round(weeklyHoursSaved * 0.6);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0B63CE] mb-3">
            Clinic Impact Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4 text-balance">
            Estimate your clinic's time savings with TEQX.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Adjust the sliders to match your current clinic setup and see how much staff time and appointment capacity you can recover.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Sliders Column */}
            <div className="md:col-span-6 space-y-7">
              {/* Slider 1: Doctors */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-[#0B1F3A]">
                    Practicing Doctors / Specialists
                  </label>
                  <span className="text-base font-extrabold text-[#0B63CE] bg-blue-50 border border-blue-100 px-3 py-0.5 rounded-lg tabular-nums">
                    {doctorsCount} {doctorsCount === 1 ? 'Doctor' : 'Doctors'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={doctorsCount}
                  onChange={(e) => {
                    const count = parseInt(e.target.value);
                    setDoctorsCount(count);
                    // auto scale appointments reasonably
                    setDailyAppointments(Math.max(10, count * 12));
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B63CE]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>1 Doctor</span>
                  <span>12</span>
                  <span>25+ Doctors</span>
                </div>
              </div>

              {/* Slider 2: Daily Appointments */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-[#0B1F3A]">
                    Daily Patient Visits
                  </label>
                  <span className="text-base font-extrabold text-[#0B63CE] bg-blue-50 border border-blue-100 px-3 py-0.5 rounded-lg tabular-nums">
                    {dailyAppointments} / day
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={dailyAppointments}
                  onChange={(e) => setDailyAppointments(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B63CE]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>10 / day</span>
                  <span>120</span>
                  <span>250+ / day</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-[#0B1F3A]">Calculated Benchmark:</span> Based on real data across 120+ partnered clinics. Reduces receptionist call handling by an average of 78%.
              </div>
            </div>

            {/* Results Column */}
            <div className="md:col-span-6 bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Estimated Operational Recovery
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight tabular-nums">
                  ~{weeklyHoursSaved} hrs <span className="text-lg font-semibold text-slate-500">/ week</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Front-desk administrative telephone & follow-up time saved
                </div>
              </div>

              {/* Mini Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100">
                  <div className="text-[11px] font-semibold text-slate-500">
                    Annual Staff Time
                  </div>
                  <div className="text-xl font-extrabold text-[#0B63CE] tabular-nums mt-0.5">
                    {annualHoursSaved.toLocaleString()} hrs
                  </div>
                  <div className="text-[10px] text-slate-500">Reinvested in clinic care</div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                  <div className="text-[11px] font-semibold text-slate-500">
                    Recovered Slots
                  </div>
                  <div className="text-xl font-extrabold text-emerald-600 tabular-nums mt-0.5">
                    +{monthlyRecoveredSlots} / mo
                  </div>
                  <div className="text-[10px] text-slate-500">From automated reminders</div>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-3 px-4 rounded-xl bg-[#0B63CE] hover:bg-[#0952ac] text-white text-sm font-semibold transition-all duration-150 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Get a Custom Clinic Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
