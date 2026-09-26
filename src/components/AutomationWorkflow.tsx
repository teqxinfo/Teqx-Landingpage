import React, { useState } from 'react';
import { 
  ArrowDown, 
  ArrowRight, 
  MessageCircle, 
  Cpu, 
  CalendarCheck, 
  CheckCircle2, 
  Bell, 
  Users, 
  Play, 
  RotateCcw,
  Sparkles,
  Check
} from 'lucide-react';

export const AutomationWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(4); // default full view

  const flowNodes = [
    { label: 'PATIENT', icon: Users, desc: 'Needs consultation' },
    { label: 'MESSAGE', icon: MessageCircle, desc: 'WhatsApp inquiry' },
    { label: 'TEQX', icon: Cpu, desc: 'Autonomous triage' },
    { label: 'APPOINTMENT', icon: CalendarCheck, desc: 'Real-time slot check' },
    { label: 'CONFIRMATION', icon: CheckCircle2, desc: 'Calendar & code sent' },
    { label: 'REMINDER', icon: Bell, desc: 'Timed 24h & 2h ping' },
    { label: 'CLINIC TEAM', icon: Users, desc: 'Ready for consult' },
  ];

  const conversationSteps = [
    {
      step: 1,
      sender: 'patient',
      text: 'Can I book tomorrow at 10:30?',
      time: '10:15 AM',
      status: 'Sent from WhatsApp',
    },
    {
      step: 2,
      sender: 'teqx',
      text: '10:30 AM is available with Dr. Ahmed.',
      time: '10:15 AM (Instant reply)',
      status: 'Calendar verified · 0.2s',
    },
    {
      step: 3,
      sender: 'patient',
      text: 'Book it.',
      time: '10:16 AM',
      status: 'Confirmed by patient',
    },
    {
      step: 4,
      sender: 'teqx',
      text: "You're confirmed.",
      time: '10:16 AM',
      status: 'Synchronized to Clinic EMR',
      subtext: 'Dr. Ahmed · Tuesday, 10:30 AM · Appointment Code: #TQ-4091',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle blue accent glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none rounded-full blur-[120px] opacity-20"
        style={{ background: '#0B63CE' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Autonomous Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-balance text-white">
            Let routine work run itself.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A frictionless automated pathway connecting patient inquiries directly to confirmed doctor schedules.
          </p>
        </div>

        {/* HORIZONTAL / VERTICAL FLOW VISUAL */}
        <div className="mb-14">
          <div className="bg-slate-950/70 p-6 md:p-8 rounded-2xl border border-slate-800 backdrop-blur-md">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
              Complete Closed-Loop Lifecycle
            </div>

            {/* Desktop Horizontal Chain */}
            <div className="hidden lg:flex items-center justify-between gap-2">
              {flowNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <React.Fragment key={node.label}>
                    <div className="flex flex-col items-center text-center group flex-1">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#0B63CE] group-hover:scale-110 group-hover:border-[#0B63CE] transition-all duration-150 mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-extrabold tracking-wider text-white">
                        {node.label}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        {node.desc}
                      </span>
                    </div>

                    {i < flowNodes.length - 1 && (
                      <div className="text-slate-600 px-1">
                        <ArrowRight className="w-4 h-4 text-blue-400/60" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="flex lg:hidden flex-col items-center gap-3">
              {flowNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <React.Fragment key={node.label}>
                    <div className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center text-[#0B63CE] flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-xs font-bold text-white">{node.label}</div>
                        <div className="text-[10px] text-slate-400">{node.desc}</div>
                      </div>
                    </div>
                    {i < flowNodes.length - 1 && (
                      <ArrowDown className="w-3.5 h-3.5 text-blue-400" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* CONVERSATION INTERFACE SHOWCASE */}
        <div className="max-w-2xl mx-auto bg-slate-950/80 rounded-2xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow">
                TQ
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>TEQX Clinic Engine</span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
                <div className="text-xs text-slate-400">Dr. Ahmed Clinic · WhatsApp Business</div>
              </div>
            </div>

            {/* Play / Step Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep(activeStep >= 4 ? 1 : activeStep + 1)}
                className="px-3 py-1.5 rounded-lg bg-[#0B63CE] hover:bg-[#0952ac] text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shadow-sm"
              >
                {activeStep >= 4 ? (
                  <>
                    <RotateCcw className="w-3 h-3" />
                    <span>Replay</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span>Step {activeStep}/4</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Conversation Body */}
          <div className="p-5 space-y-4 bg-slate-950/40 min-h-[300px] flex flex-col justify-end">
            {conversationSteps.slice(0, activeStep).map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${step.sender === 'patient' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 ${
                    step.sender === 'patient'
                      ? 'bg-[#0B63CE] text-white rounded-br-none shadow-md'
                      : 'bg-slate-800 text-slate-100 border border-slate-700/80 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="text-sm font-medium leading-relaxed">{step.text}</p>
                  
                  {step.subtext && (
                    <div className="mt-2.5 pt-2 border-t border-slate-700 text-xs text-blue-300 font-mono">
                      ✓ {step.subtext}
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-4 mt-2 text-[10px] text-slate-300/80">
                    <span>{step.status}</span>
                    <span className="font-mono">{step.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom interactive cue */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0B63CE]" />
            <span>Zero manual staff typing required during this entire dialogue</span>
          </div>
        </div>
      </div>
    </section>
  );
};
