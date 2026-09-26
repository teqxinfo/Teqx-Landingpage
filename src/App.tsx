import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | undefined>(undefined);
  const shouldReduceMotion = useReducedMotion();

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
        {/* 2. HIGH-IMPACT HERO - Initial entrance animation */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero
            onOpenDemo={() => handleOpenDemo()}
            onScrollToHowItWorks={handleScrollToHowItWorks}
          />
        </motion.div>

        {/* 3. TRUST / PROBLEM STATEMENT */}
        <ScrollReveal yOffset={40}>
          <ProblemSection />
        </ScrollReveal>

        {/* 4. CORE SOLUTION */}
        <ScrollReveal yOffset={40}>
          <SolutionSection onSelectFeature={(feature) => handleOpenDemo(feature)} />
        </ScrollReveal>

        {/* 5. HOW TEQX WORKS (4-STEP HORIZONTAL/VERTICAL WORKFLOW) */}
        <ScrollReveal yOffset={40}>
          <HowItWorks />
        </ScrollReveal>

        {/* 6. PRODUCT DASHBOARD PREVIEW (DEEP NAVY #0B1F3A) */}
        <ScrollReveal yOffset={40}>
          <DashboardPreview />
        </ScrollReveal>

        {/* 7. FEATURES DEEP DIVE (ALTERNATING ROWS) */}
        <ScrollReveal yOffset={40}>
          <Features />
        </ScrollReveal>

        {/* 8. BEFORE VS AFTER COMPARISON */}
        <ScrollReveal yOffset={40}>
          <Comparison onOpenDemo={() => handleOpenDemo()} />
        </ScrollReveal>

        {/* 9. BUILT FOR HEALTHCARE / CUSTOMER TYPES */}
        <ScrollReveal yOffset={40}>
          <CustomerTypes onOpenDemo={(category) => handleOpenDemo(category)} />
        </ScrollReveal>

        {/* 10. AUTOMATION WORKFLOW VISUAL */}
        <ScrollReveal yOffset={40}>
          <AutomationWorkflow />
        </ScrollReveal>

        {/* 11. INTERACTIVE CLINIC ROI / TIME SAVINGS ESTIMATOR */}
        <ScrollReveal yOffset={40}>
          <RoiCalculator onOpenDemo={() => handleOpenDemo()} />
        </ScrollReveal>

        {/* 12. FINAL CTA SECTION (TEQX BLUE #0B63CE) */}
        <ScrollReveal yOffset={40}>
          <CTA onOpenDemo={() => handleOpenDemo()} />
        </ScrollReveal>
      </main>

      {/* 13. FOOTER (DEEP NAVY #0B1F3A) */}
      <ScrollReveal yOffset={24} amount={0.05}>
        <Footer
          onOpenDemo={() => handleOpenDemo()}
          onOpenContact={() => handleOpenDemo('Contact Request')}
        />
      </ScrollReveal>

      {/* 14. INTERACTIVE BOOK A DEMO MODAL */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        initialSpecialty={selectedSpecialty}
      />
    </div>
  );
}
