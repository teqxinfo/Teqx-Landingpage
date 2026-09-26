import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  MessageSquare, 
  Stethoscope, 
  BarChart3, 
  Settings, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus, 
  Search, 
  Filter, 
  ArrowUpRight,
  TrendingUp,
  UserCheck,
  Send,
  BellRing
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Appointments' | 'Patients' | 'Messages' | 'Doctors' | 'Analytics'>('Overview');
  const [filterStatus, setFilterStatus] = useState<'all' | 'confirmed' | 'pending'>('all');

  const tabs = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Appointments', icon: Calendar },
    { name: 'Patients', icon: Users },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Doctors', icon: Stethoscope },
    { name: 'Analytics', icon: BarChart3 },
  ];

  const appointmentsList = [
    {
      id: 'apt-1',
      time: '09:00 AM',
      patient: 'Priya Sharma',
      phone: '+1 (555) 234-8901',
      doctor: 'Dr. Sarah Patel',
      department: 'Cardiology',
      channel: 'WhatsApp Bot',
      status: 'Confirmed',
    },
    {
      id: 'apt-2',
      time: '09:30 AM',
      patient: 'Rahul Menon',
      phone: '+1 (555) 345-6712',
      doctor: 'Dr. Ahmed Khan',
      department: 'General Medicine',
      channel: 'WhatsApp Bot',
      status: 'Confirmed',
    },
    {
      id: 'apt-3',
      time: '10:00 AM',
      patient: 'Aisha Rahman',
      phone: '+1 (555) 890-1234',
      doctor: 'Dr. Sarah Patel',
      department: 'Cardiology',
      channel: 'Web Schedule',
      status: 'Confirmed',
    },
    {
      id: 'apt-4',
      time: '10:30 AM',
      patient: 'Marcus Vance',
      phone: '+1 (555) 456-7890',
      doctor: 'Dr. Elena Rostova',
      department: 'Pediatrics',
      channel: 'WhatsApp Bot',
      status: 'Pending',
    },
    {
      id: 'apt-5',
      time: '11:00 AM',
      patient: 'Muhammed Shamil',
      phone: '+1 (555) 901-2345',
      doctor: 'Dr. Ahmed Khan',
      department: 'General Medicine',
      channel: 'Phone Callback',
      status: 'Confirmed',
    },
  ];

  const filteredAppointments = appointmentsList.filter((apt) => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'confirmed') return apt.status === 'Confirmed';
    if (filterStatus === 'pending') return apt.status === 'Pending';
    return true;
  });

  return (
    <section className="py-24 md:py-36 bg-[#0B1F3A] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[550px] pointer-events-none rounded-full blur-[140px] opacity-25"
        style={{ background: '#0B63CE' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <span>Product Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-balance text-white">
            Everything your clinic needs.<br className="hidden sm:inline" /> Nothing your team doesn't.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-balance">
            Manage appointments, patient communication, schedules, and workflows from one connected platform.
          </p>
        </div>

        {/* LARGE TEQX DASHBOARD MOCKUP CONTAINER */}
        <div className="relative rounded-2xl md:rounded-3xl border border-slate-700/80 bg-slate-900/90 shadow-[0_30px_90px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl">
          {/* Top Window Strip */}
          <div className="bg-slate-950/70 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs font-semibold text-slate-400 hidden sm:inline-block">
                TEQX Clinic OS · Version 2026.4
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Quick Tab Switchers in Header for mobile */}
              <div className="flex sm:hidden overflow-x-auto gap-1 text-[11px]">
                {['Overview', 'Appointments'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t as any)}
                    className={`px-2 py-1 rounded ${activeTab === t ? 'bg-[#0B63CE] text-white' : 'text-slate-400'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Connected Clinic Network</span>
              </div>
            </div>
          </div>

          {/* DASHBOARD INNER LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* LEFT SIDEBAR */}
            <div className="hidden lg:flex lg:col-span-2 flex-col justify-between border-r border-slate-800 bg-slate-950/40 p-4">
              <div>
                {/* Logo inside dashboard */}
                <div className="pb-5 pt-1 px-2 border-b border-slate-800/80 mb-4">
                  <Logo variant="light" showTagline={false} />
                </div>

                {/* Sidebar Navigation */}
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.name;
                    return (
                      <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name as any)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-[#0B63CE] text-white shadow-sm'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span>{tab.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar bottom */}
              <div className="pt-4 border-t border-slate-800 space-y-1">
                <div className="flex items-center gap-2.5 px-3 py-2 text-xs text-slate-400 hover:text-white cursor-pointer rounded-lg hover:bg-slate-800/40">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </div>
                <div className="px-3 py-2 text-[11px] text-slate-500">
                  Dr. Ahmed Clinic Group
                </div>
              </div>
            </div>

            {/* MAIN AREA */}
            <div className="col-span-1 lg:col-span-7 p-5 sm:p-7 border-r border-slate-800 flex flex-col justify-between bg-slate-900/60">
              <div>
                {/* Main Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      Good morning, Admin
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Today's overview · Monday, September 25
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span>Search Patient</span>
                    </button>
                    <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0B63CE] hover:bg-[#0952ac] text-xs font-semibold text-white shadow-sm transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                      <span>New Booking</span>
                    </button>
                  </div>
                </div>

                {/* 4 TOP METRICS ROW */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  {/* Appointments */}
                  <div className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/60">
                    <div className="text-[11px] text-slate-400 font-medium">Appointments</div>
                    <div className="text-2xl font-extrabold text-white mt-1 tabular-nums">24</div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>+12% vs last week</span>
                    </div>
                  </div>

                  {/* Patients */}
                  <div className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/60">
                    <div className="text-[11px] text-slate-400 font-medium">Patients</div>
                    <div className="text-2xl font-extrabold text-white mt-1 tabular-nums">148</div>
                    <div className="text-[10px] text-slate-400 font-medium mt-1">
                      Active this month
                    </div>
                  </div>

                  {/* Confirmed */}
                  <div className="bg-slate-800/60 rounded-xl p-3.5 border border-blue-900/60">
                    <div className="text-[11px] text-blue-300 font-medium">Confirmed</div>
                    <div className="text-2xl font-extrabold text-[#0B63CE] mt-1 tabular-nums">21</div>
                    <div className="text-[10px] text-blue-300 font-medium mt-1">
                      Automated verification
                    </div>
                  </div>

                  {/* Pending */}
                  <div className="bg-amber-950/20 rounded-xl p-3.5 border border-amber-800/40">
                    <div className="text-[11px] text-amber-300 font-medium">Pending</div>
                    <div className="text-2xl font-extrabold text-amber-400 mt-1 tabular-nums">3</div>
                    <div className="text-[10px] text-amber-300 font-medium mt-1">
                      Reminder dispatched
                    </div>
                  </div>
                </div>

                {/* Appointment Timeline & Filter Bar */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                      <span>Appointment Schedule</span>
                      <span className="text-[11px] font-normal text-slate-400">· 5 Slots shown</span>
                    </div>

                    {/* Filter segmented buttons */}
                    <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/50">
                      <button
                        onClick={() => setFilterStatus('all')}
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                          filterStatus === 'all'
                            ? 'bg-[#0B63CE] text-white'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        All (24)
                      </button>
                      <button
                        onClick={() => setFilterStatus('confirmed')}
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                          filterStatus === 'confirmed'
                            ? 'bg-[#0B63CE] text-white'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Confirmed (21)
                      </button>
                      <button
                        onClick={() => setFilterStatus('pending')}
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                          filterStatus === 'pending'
                            ? 'bg-[#0B63CE] text-white'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Pending (3)
                      </button>
                    </div>
                  </div>

                  {/* Appointments Table */}
                  <div className="space-y-2 overflow-y-auto max-h-[220px] pr-1">
                    {filteredAppointments.map((apt) => (
                      <div
                        key={apt.id}
                        className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 transition-colors flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="font-mono text-xs font-bold text-blue-300 bg-blue-950/60 border border-blue-800/50 px-2 py-1 rounded">
                            {apt.time}
                          </div>
                          <div>
                            <div className="font-bold text-slate-100">{apt.patient}</div>
                            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                              <span>{apt.doctor}</span>
                              <span>·</span>
                              <span>{apt.department}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline text-[10px] text-slate-400 font-medium">
                            {apt.channel}
                          </span>
                          {apt.status === 'Confirmed' ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              Confirmed
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-md">
                              <Clock className="w-3 h-3 text-amber-400" />
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Clinic WhatsApp Gateway: Active & Connected
                </span>
                <span className="text-[11px] font-mono text-slate-500">Latency: 120ms</span>
              </div>
            </div>

            {/* RIGHT SIDE: RECENT ACTIVITY */}
            <div className="col-span-1 lg:col-span-3 p-5 sm:p-6 bg-slate-950/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Recent Activity
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                </div>

                <div className="space-y-4">
                  {/* Activity 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">
                        Appointment confirmed
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Rahul Menon confirmed 10:30 AM slot via WhatsApp bot.
                      </p>
                      <span className="text-[10px] text-slate-500 font-mono">2 min ago</span>
                    </div>
                  </div>

                  {/* Activity 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">
                        New patient registered
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Aisha Rahman completed intake questionnaire.
                      </p>
                      <span className="text-[10px] text-slate-500 font-mono">8 min ago</span>
                    </div>
                  </div>

                  {/* Activity 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BellRing className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">
                        Reminder sent
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Automated 2-hour appointment reminder sent to 4 patients.
                      </p>
                      <span className="text-[10px] text-slate-500 font-mono">12 min ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bot status summary card */}
              <div className="mt-6 p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs">
                <div className="text-[11px] font-semibold text-slate-300 mb-1">
                  Automated Queue
                </div>
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Queued follow-ups</span>
                  <span className="font-bold text-white">6 today</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 text-[11px] mt-1">
                  <span>No-show rate</span>
                  <span className="font-bold text-emerald-400">3.8% (down 14%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
