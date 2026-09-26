import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenContact }) => {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 md:pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Logo variant="light" showTagline={true} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed pt-2">
              Healthcare technology company focused on making clinic communication and operations more connected, automated, and patient-friendly.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-500 font-mono">
                B2B Healthcare Operations Platform
              </span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* PRODUCT */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                Product
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    Appointments
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Patient Communication
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-white transition-colors">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                Company
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="#for-clinics" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <button onClick={onOpenContact} className="hover:text-white transition-colors text-left">
                    Contact
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                Resources
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">
                    Documentation
                  </button>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                Legal
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 TEQX. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Operational Network Active
            </span>
            <span className="text-slate-400">Security & Privacy First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
