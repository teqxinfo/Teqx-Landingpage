import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenDemo: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative py-20 md:py-32 bg-[#0B63CE] text-white overflow-hidden">
      {/* Subtle animated background grid & radial glow */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-200" />
          <span>Transform Your Clinic Operations</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-balance text-white">
          Ready to connect your clinic?
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-blue-50 max-w-2xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          Give your team smarter workflows and give your patients a simpler way to access care.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#0B1F3A] text-base font-bold transition-all duration-150 shadow-xl hover:shadow-2xl active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-[#0B63CE]" />
          </button>
        </div>

        {/* Secondary text */}
        <p className="text-sm text-blue-100 font-medium mt-4">
          See how TEQX can fit your clinic.
        </p>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-blue-100 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Dedicated Onboarding Support</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Healthcare Data Protection</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>No Hardware Installation Needed</span>
          </div>
        </div>
      </div>
    </section>
  );
};
