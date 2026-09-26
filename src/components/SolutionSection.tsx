import React from 'react';
import { 
  MessageSquare, 
  Calendar, 
  Cpu, 
  Bell, 
  Users, 
  BarChart3,
  ArrowUpRight
} from 'lucide-react';

interface SolutionSectionProps {
  onSelectFeature?: (featureTitle: string) => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onSelectFeature }) => {
  const cards = [
    {
      id: 'patient-communication',
      icon: MessageSquare,
      title: 'Patient Communication',
      description: 'Keep patient conversations organized and accessible across WhatsApp and digital touchpoints.',
      details: 'Unified messaging inbox with auto-triage and instant answers for common clinic queries.',
    },
    {
      id: 'smart-appointments',
      icon: Calendar,
      title: 'Smart Appointments',
      description: 'Make appointment booking and scheduling easier for your team with real-time slot synchronization.',
      details: 'Multi-doctor calendars with buffer times, specialty rules, and automatic double-booking prevention.',
    },
    {
      id: 'workflow-automation',
      icon: Cpu,
      title: 'Workflow Automation',
      description: 'Automate repetitive administrative processes so staff focus on in-clinic patient care.',
      details: 'Trigger instant confirmation, pre-appointment questionnaires, and cancellation re-allocations.',
    },
    {
      id: 'automated-notifications',
      icon: Bell,
      title: 'Automated Notifications',
      description: 'Keep patients informed throughout the appointment journey with timely alerts.',
      details: 'WhatsApp and SMS reminders sent 24 hours and 2 hours prior, reducing clinic no-shows by up to 78%.',
    },
    {
      id: 'team-coordination',
      icon: Users,
      title: 'Team Coordination',
      description: 'Connect doctors, receptionists, and clinic administrators in one synchronized workspace.',
      details: 'Role-based access, instant schedule updates, and internal doctor notes per appointment.',
    },
    {
      id: 'operational-insights',
      icon: BarChart3,
      title: 'Operational Insights',
      description: 'Understand your clinic workflows with clear operational data and capacity reports.',
      details: 'Track peak booking hours, doctor consultation volumes, confirmation rates, and patient return frequency.',
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0B63CE] mb-3">
            THE TEQX APPROACH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4 text-balance">
            One connected system for your clinic.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-balance">
            TEQX connects patients, reception teams, doctors, and appointment workflows in one streamlined experience.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onSelectFeature && onSelectFeature(card.title)}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#0B63CE] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(11,99,206,0.06)] cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Icon container with micro-movement */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B1F3A] group-hover:text-[#0B63CE] group-hover:bg-blue-50/60 transition-all duration-200 mb-6 group-hover:scale-105">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#0B63CE] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#0B63CE] transition-colors font-medium">
                  <span>{card.details}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
