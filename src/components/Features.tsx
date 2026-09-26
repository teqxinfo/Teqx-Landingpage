import React, { useState } from 'react';
import { 
  MessageSquare, 
  Calendar, 
  Cpu, 
  Activity, 
  Check, 
  Clock, 
  Send, 
  User, 
  Bot, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Shield,
  Layers,
  CalendarCheck
} from 'lucide-react';

export const Features: React.FC = () => {
  // Interactive state for conversation feature
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'patient', text: 'Hi, does Dr. Ahmed have any opening for a follow-up tomorrow?' },
    { sender: 'bot', text: 'Hello! Yes, Dr. Ahmed has open slots tomorrow at 10:30 AM and 02:15 PM. Would you like me to reserve one?' },
    { sender: 'patient', text: '10:30 AM works great for me.' },
    { sender: 'bot', text: '✓ Booked! 10:30 AM on Tuesday. We have sent a calendar invite and confirmation code #TQ-8841.' },
  ]);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setMessages((prev) => [...prev, { sender: 'patient', text: userMsg }]);
    setChatInput('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: `Got it! We have logged your request: "${userMsg}". Our clinic team is updated in real time.` },
      ]);
    }, 600);
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0B63CE] mb-3">
            Deep-Dive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4 text-balance">
            Built around the way healthcare teams work.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Eliminate operational friction with purpose-built tools designed for clinics, doctors, and patient satisfaction.
          </p>
        </div>

        <div className="space-y-24 md:space-y-36">
          {/* FEATURE 01: Patient Communication (Text left / Visual right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#0B63CE]">
                <MessageSquare className="w-4 h-4" />
                <span>Feature 01 · Patient Communication</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-5">
                Patient Communication
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                Give patients a simpler way to interact with your clinic while keeping communication organized for your team.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Reach patients on WhatsApp, where 98% of messages are read within 3 minutes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Centralized team inbox prevents duplicate replies and dropped questions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Automated triage for clinic hours, locations, prep instructions, and doctor bio.</span>
                </li>
              </ul>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200">
                <Shield className="w-3.5 h-3.5 text-[#0B63CE]" />
                <span>Compliant with healthcare messaging security standards</span>
              </div>
            </div>

            {/* Visual 01: Conversation Interface */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[380px]">
                  {/* Chat Header */}
                  <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                        TQ
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0B1F3A]">
                          TEQX Clinic Assistant
                        </div>
                        <div className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Always active · Instant reply</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400">Dr. Ahmed Clinic</span>
                  </div>

                  {/* Chat Messages Body */}
                  <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8fafc]/50 text-xs">
                    {messages.map((m, i) => (
                      <div
                        key={i}
                        className={`flex ${m.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-xl p-3 ${
                            m.sender === 'patient'
                              ? 'bg-[#0B63CE] text-white rounded-br-none'
                              : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                          }`}
                        >
                          <p className="leading-relaxed">{m.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Chat Input */}
                  <form onSubmit={handleSendChat} className="p-2.5 bg-white border-t border-slate-200 flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Type a test message (e.g. 'Can I reschedule to Friday?')..."
                      className="flex-1 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#0B63CE]"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#0B63CE] hover:bg-[#0952ac] text-white rounded-lg text-xs font-medium flex items-center gap-1"
                    >
                      <span>Send</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 02: Appointment Management (Visual left / Text right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual 02: Calendar UI */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm">
                  {/* Calendar Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0B63CE]" />
                      <span className="text-xs font-bold text-[#0B1F3A]">
                        Multi-Provider Schedule
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-[#0B63CE] font-semibold">
                        Day View
                      </span>
                      <span>Tomorrow</span>
                    </div>
                  </div>

                  {/* Doctors Slots Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    {/* Doctor 1 Column */}
                    <div className="border border-slate-100 rounded-xl p-3 bg-slate-50/40">
                      <div className="font-bold text-[#0B1F3A] mb-1">Dr. Sarah Patel</div>
                      <div className="text-[11px] text-slate-400 mb-3">Cardiology · Room 204</div>
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-[#0B1F3A] font-medium flex items-center justify-between">
                          <span>09:00 AM · Consultation</span>
                          <span className="text-[10px] text-blue-600 font-semibold">Booked</span>
                        </div>
                        <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-[#0B1F3A] font-medium flex items-center justify-between">
                          <span>09:45 AM · Review</span>
                          <span className="text-[10px] text-blue-600 font-semibold">Booked</span>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium flex items-center justify-between">
                          <span>10:30 AM · Open Slot</span>
                          <span className="text-[10px] text-emerald-700 font-bold">Available</span>
                        </div>
                      </div>
                    </div>

                    {/* Doctor 2 Column */}
                    <div className="border border-slate-100 rounded-xl p-3 bg-slate-50/40">
                      <div className="font-bold text-[#0B1F3A] mb-1">Dr. Ahmed Khan</div>
                      <div className="text-[11px] text-slate-400 mb-3">General Medicine · Room 108</div>
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium flex items-center justify-between">
                          <span>10:00 AM · Open Slot</span>
                          <span className="text-[10px] text-emerald-700 font-bold">Available</span>
                        </div>
                        <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-[#0B1F3A] font-medium flex items-center justify-between">
                          <span>10:30 AM · Confirmed</span>
                          <span className="text-[10px] text-blue-600 font-semibold">Booked</span>
                        </div>
                        <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-medium flex items-center justify-between">
                          <span>11:15 AM · Follow-up</span>
                          <span className="text-[10px] text-amber-700 font-semibold">Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buffer / rules indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      10-minute automated buffer between patient consults
                    </span>
                    <span className="text-emerald-600 font-semibold">Smart Anti-Conflict Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text 02 */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#0B63CE]">
                <Calendar className="w-4 h-4" />
                <span>Feature 02 · Appointment Management</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-5">
                Appointment Management
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                Make appointment workflows easier to manage across doctors, schedules, and patients.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Real-time availability updates prevent conflicting bookings across all channels.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Custom appointment durations per specialty and consultation type.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Instant slot cancellation re-allocation to patients waiting on standby.</span>
                </li>
              </ul>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200">
                <CalendarCheck className="w-3.5 h-3.5 text-[#0B63CE]" />
                <span>Supports multiple clinics, rooms, and rotating doctor rotas</span>
              </div>
            </div>
          </div>

          {/* FEATURE 03: Automation (Text left / Visual right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#0B63CE]">
                <Cpu className="w-4 h-4" />
                <span>Feature 03 · Automation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-5">
                Automation
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                Reduce repetitive administrative work by automating routine appointment workflows and notifications.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Automated confirmation requests sent 24h prior via WhatsApp with 1-click confirmation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Trigger digital pre-consultation intake forms directly into patient files.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Post-visit instructions and prescription follow-up automated with zero staff overhead.</span>
                </li>
              </ul>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-[#0B63CE]" />
                <span>Saves up to 18 staff hours per clinic every single week</span>
              </div>
            </div>

            {/* Visual 03: Automation Workflow */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Active Automation Pipeline
                  </div>

                  {/* Node 1 */}
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0B63CE] flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0B1F3A]">Trigger: New Booking Received</div>
                        <div className="text-[11px] text-slate-500">Patient chooses open slot online</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Immediate
                    </span>
                  </div>

                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-slate-300" />
                  </div>

                  {/* Node 2 */}
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0B63CE] flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0B1F3A]">Action: Dispatch WhatsApp Confirmation</div>
                        <div className="text-[11px] text-slate-500">Doctor details, clinic location link & calendar (.ics)</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      &lt; 2s
                    </span>
                  </div>

                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-slate-300" />
                  </div>

                  {/* Node 3 */}
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0B63CE] flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0B1F3A]">Action: Timed Reminder & Re-confirmation</div>
                        <div className="text-[11px] text-slate-500">24 hours before visit with 1-tap "Confirm" or "Reschedule"</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                      Scheduled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 04: Clinic Operations (Visual left / Text right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual 04: Operations Dashboard */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs font-bold text-[#0B1F3A]">Clinic Operational Velocity</div>
                      <div className="text-[11px] text-slate-500">Real-time throughput metrics</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Peak Efficiency: 94%
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/60">
                      <div className="text-[10px] text-slate-500">Average Wait Time</div>
                      <div className="text-lg font-extrabold text-[#0B1F3A] mt-0.5 tabular-nums">7 min</div>
                      <div className="text-[9px] text-emerald-600 font-medium">Down from 26 min</div>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/60">
                      <div className="text-[10px] text-slate-500">Doctor Slot Utilization</div>
                      <div className="text-lg font-extrabold text-[#0B63CE] mt-0.5 tabular-nums">91.4%</div>
                      <div className="text-[9px] text-slate-500">Minimized empty gaps</div>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/60">
                      <div className="text-[10px] text-slate-500">No-Show Reduction</div>
                      <div className="text-lg font-extrabold text-emerald-600 mt-0.5 tabular-nums">-78%</div>
                      <div className="text-[9px] text-slate-500">Since automation</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center justify-between">
                    <span className="font-medium">Reception capacity redirected to patient hospitality</span>
                    <span className="font-bold text-[#0B1F3A]">+3.2 hrs/day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text 04 */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#0B63CE]">
                <Activity className="w-4 h-4" />
                <span>Feature 04 · Clinic Operations</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-5">
                Clinic Operations
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                Bring everyday clinic processes into a connected digital workflow.
              </p>
              <ul className="space-y-3 text-sm text-slate-600 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Complete visibility over patient wait times, check-ins, and consultation durations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Unified patient records and communication log accessible to all authorized staff.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#0B63CE] flex-shrink-0 mt-0.5" />
                  <span>Exportable reporting for compliance, administrative audits, and clinic growth planning.</span>
                </li>
              </ul>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200">
                <Layers className="w-3.5 h-3.5 text-[#0B63CE]" />
                <span>Works smoothly alongside your existing clinic EHR / EMR system</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
