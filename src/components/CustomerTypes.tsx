import React from 'react';
import { 
  Building2, 
  Users2, 
  Stethoscope, 
  HeartHandshake, 
  Network, 
  Eye, 
  ArrowRight 
} from 'lucide-react';

interface CustomerTypesProps {
  onOpenDemo: (categoryName?: string) => void;
}

export const CustomerTypes: React.FC<CustomerTypesProps> = ({ onOpenDemo }) => {
  const customerTypes = [
    {
      title: 'Outpatient Clinics',
      description: 'Streamline daily high-volume walk-ins and scheduled appointments with automated queue notifications.',
      icon: Building2,
      stat: 'High-Volume Walk-in & Scheduled',
    },
    {
      title: 'Multi-Doctor Practices',
      description: 'Coordinate multiple doctor rotas, consultation lengths, and specialized equipment booking without friction.',
      icon: Users2,
      stat: 'Cross-Doctor Schedule Sync',
    },
    {
      title: 'Specialty Clinics',
      description: 'Provide pre-consultation questionnaires and customized prep instructions automatically before clinical tests.',
      icon: Stethoscope,
      stat: 'Cardio, Ortho, Derm & More',
    },
    {
      title: 'General & Family Health Centers',
      description: 'Offer accessible patient messaging for families, chronic disease follow-ups, and recurring checkups.',
      icon: HeartHandshake,
      stat: 'Continuity of Family Care',
    },
    {
      title: 'Group Practices & Health Networks',
      description: 'Centralize communication and visibility across multiple clinic branches in one secure management dashboard.',
      icon: Network,
      stat: 'Multi-Branch Architecture',
    },
    {
      title: 'Dental, Eye & Specialist Clinics',
      description: 'Automate procedure confirmations, reminder intervals, and post-treatment follow-up check-ins effortlessly.',
      icon: Eye,
      stat: 'Precise Treatment Intervals',
    },
  ];

  return (
    <section id="for-clinics" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0B63CE] mb-3">
            Clinic Adaptability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4 text-balance">
            Built for healthcare teams of every size.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-balance">
            TEQX is designed for organizations that want simpler patient communication and more connected clinic operations.
          </p>
        </div>

        {/* 6 Customer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {customerTypes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onClick={() => onOpenDemo(item.title)}
                className="group bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-[#0B63CE] hover:shadow-[0_12px_32px_rgba(11,99,206,0.06)] transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 text-[#0B1F3A] group-hover:text-[#0B63CE] group-hover:bg-blue-50/70 transition-all duration-200 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2.5 group-hover:text-[#0B63CE] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-[#0B63CE] transition-colors">
                  <span>{item.stat}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
