import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { DashboardPreview } from './components/DashboardPreview';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { CustomerTypes } from './components/CustomerTypes';
import { AutomationWorkflow } from './components/AutomationWorkflow';
import { RoiCalculator } from './components/RoiCalculator';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | undefined>(undefined);

  const handleOpenDemo = (specialty?: string) => {
    setSelectedSpecialty(specialty);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleScrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0B63CE]/15 selection:text-[#0B63CE]">
      {/* 1. STICKY NAVIGATION */}
      <Navbar
        onOpenDemo={() => handleOpenDemo()}
        onOpenContact={() => handleOpenDemo('Contact Request')}
      />

      <main className="flex-1">
        {/* 2. HIGH-IMPACT HERO */}
        <Hero
          onOpenDemo={() => handleOpenDemo()}
          onScrollToHowItWorks={handleScrollToHowItWorks}
        />

        {/* 3. TRUST / PROBLEM STATEMENT */}
        <ProblemSection />

        {/* 4. CORE SOLUTION */}
        <SolutionSection onSelectFeature={(feature) => handleOpenDemo(feature)} />

        {/* 5. HOW TEQX WORKS (4-STEP HORIZONTAL/VERTICAL WORKFLOW) */}
        <HowItWorks />

        {/* 6. PRODUCT DASHBOARD PREVIEW (DEEP NAVY #0B1F3A) */}
        <DashboardPreview />

        {/* 7. FEATURES DEEP DIVE (ALTERNATING ROWS) */}
        <Features />

        {/* 8. BEFORE VS AFTER COMPARISON */}
        <Comparison onOpenDemo={() => handleOpenDemo()} />

        {/* 9. BUILT FOR HEALTHCARE / CUSTOMER TYPES */}
        <CustomerTypes onOpenDemo={(category) => handleOpenDemo(category)} />

        {/* 10. AUTOMATION WORKFLOW VISUAL */}
        <AutomationWorkflow />

        {/* 11. INTERACTIVE CLINIC ROI / TIME SAVINGS ESTIMATOR */}
        <RoiCalculator onOpenDemo={() => handleOpenDemo()} />

        {/* 12. FINAL CTA SECTION (TEQX BLUE #0B63CE) */}
        <CTA onOpenDemo={() => handleOpenDemo()} />
      </main>

      {/* 13. FOOTER (DEEP NAVY #0B1F3A) */}
      <Footer
        onOpenDemo={() => handleOpenDemo()}
        onOpenContact={() => handleOpenDemo('Contact Request')}
      />

      {/* 14. INTERACTIVE BOOK A DEMO MODAL */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        initialSpecialty={selectedSpecialty}
      />
    </div>
  );
}
