import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'For Clinics', href: '#for-clinics' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3'
            : 'bg-white/70 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* LEFT: TEQX Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63CE] rounded-lg"
            aria-label="TEQX Home"
          >
            <Logo variant="dark" />
          </a>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0B63CE] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63CE] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="text-[15px] font-medium text-slate-600 hover:text-[#0B1F3A] transition-colors px-3 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63CE]"
            >
              Contact
            </button>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B63CE] hover:bg-[#0952ac] text-white text-[15px] font-semibold transition-all duration-150 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B63CE]"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63CE]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-white/95 backdrop-blur-md pt-24 px-6 pb-8 flex flex-col justify-between border-b border-slate-200">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <Logo variant="dark" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Menu
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-semibold text-[#0B1F3A] hover:text-[#0B63CE] py-2 transition-colors border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left text-xl font-semibold text-[#0B1F3A] hover:text-[#0B63CE] py-2 transition-colors border-b border-slate-100 flex items-center justify-between"
            >
              <span>Contact</span>
              <Phone className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-[#0B63CE] hover:bg-[#0952ac] text-white text-base font-semibold shadow-sm flex items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Connect. Automate. Care. — TEQX Healthcare
            </p>
          </div>
        </div>
      )}
    </>
  );
};
